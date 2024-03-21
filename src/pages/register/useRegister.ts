import { useState, useCallback, ChangeEvent, useEffect } from 'react'

import { formatTime } from '@/utils'

import { useRegisterVideo } from '@/contexts/registerVideo'
import { useInteractiveVideo } from '@/contexts/interactiveVideo'
import {
  PropsVideoInteractiveRegister,
  PropsContentInteractive,
} from '@/types/iteractiveVideo'
import { PropsMessage } from '@/types/message'

export default function useRegister() {
  const {
    contentInteractiveRegister,
    statusPaused,
    setContentInteractiveRegister,
    setModal,
  } = useRegisterVideo()

  const { contentInteractive, setContentInteractive } = useInteractiveVideo()

  const { file, urlVideo } = contentInteractiveRegister

  const [isLoadingForm, setIsLoadingForm] = useState(false)
  const [message, setMessage] = useState<PropsMessage>({
    open: false,
    title: '',
    status: 'info',
  })

  const handleChange = useCallback(
    ({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
      const file = files![0]

      if (!file) return

      const url = URL.createObjectURL(file)

      setContentInteractiveRegister((oldContentInteractiveRegister) => ({
        ...oldContentInteractiveRegister,
        file: files,
        urlVideo: url,
        data: [],
      }))
    },
    [setContentInteractiveRegister],
  )

  const handleAddContentInteractive = () => {
    setContentInteractiveRegister((oldContentInteractiveRegister) => {
      const newContentInteractive: PropsVideoInteractiveRegister = {
        time: statusPaused!.time as number,
        timeFormated: statusPaused!.timeFormated!,
        type: 'info',
        content: {
          question: null,
          answers: [],
          correctAnswer: null,
        },
      }
      return {
        ...oldContentInteractiveRegister,
        data: [...oldContentInteractiveRegister.data, newContentInteractive],
      }
    })

    setModal({
      open: true,
      data: {
        type: 'info',
        statusPaused,
        fields: {
          question: '',
          answers: [],
          correctAnswer: null,
        },
      },
    })
  }

  const canIAddThisTime = (time: number) => {
    return !contentInteractiveRegister.data.filter(
      (item) =>
        item.time === time || (item.time < time + 60 && item.time > time - 60),
    ).length
  }

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    setIsLoadingForm(true)

    setTimeout(() => {
      console.log({
        contentInteractiveRegister,
      })

      const data: PropsContentInteractive[] = []

      contentInteractiveRegister.data.forEach((item) => {
        data.push({
          time: item.time,
          type: item.type,
          finished: false,
          status: null,
          content: {
            question: item.content.question,
            answers: item.content?.answers ?? [],
            questionAnswer: null,
            correctAnswer: item.content.correctAnswer,
          },
        })
      })

      setContentInteractive((oldContentInteractive) => {
        return {
          ...oldContentInteractive,
          data,
          urlVideo: contentInteractiveRegister.urlVideo,
          closeContentInteractive: false,
        }
      })

      setMessage({
        open: true,
        title: 'O vídeo foi cadastrado com sucesso!',
        status: 'success',
      })

      setIsLoadingForm(false)
    }, 2000)
  }

  useEffect(() => {
    const data: PropsVideoInteractiveRegister[] = []

    contentInteractive.data?.forEach((item) => {
      data.push({
        time: item.time,
        timeFormated: formatTime(item.time, 'auto'),
        type: item.type,
        content: {
          question: item.content.question,
          answers: item.content.answers,
          correctAnswer: item.content.correctAnswer,
        },
      })
    })

    setContentInteractiveRegister((oldContentInteractiveRegister) => {
      return {
        ...oldContentInteractiveRegister,
        urlVideo: contentInteractive?.urlVideo ?? '',
        file: null,
        data,
      }
    })
  }, [contentInteractive, setContentInteractiveRegister])

  return {
    isLoadingForm,
    message,
    statusPaused,
    file,
    urlVideo,
    confirm,
    handleChange,
    handleAddContentInteractive,
    canIAddThisTime,
    onSubmit,
  }
}

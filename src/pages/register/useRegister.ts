import { useState, useCallback, ChangeEvent } from 'react'

import { useRegisterVideo } from '@/contexts/registerVideo'
import { PropsVideoInteractiveRegister } from '@/types/iteractiveVideo'
import { PropsMessage } from '@/types/message'

export default function useRegister() {
  const {
    contentInteractiveRegister,
    statusPaused,
    setContentInteractiveRegister,
    setModal,
  } = useRegisterVideo()

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
      const url = URL.createObjectURL(file)

      setContentInteractiveRegister((oldContentInteractiveRegister) => ({
        ...oldContentInteractiveRegister,
        file: files,
        urlVideo: url,
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

      setMessage({
        open: true,
        title: 'O vídeo foi cadastrado com sucesso!',
        status: 'success',
      })

      setIsLoadingForm(false)
    }, 2000)
  }

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

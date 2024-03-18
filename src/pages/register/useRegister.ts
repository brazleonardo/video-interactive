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

  const [file, setFile] = useState<FileList | null>(null)
  const [urlVideo, setUrlVideo] = useState<string>('')
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

      setFile(files)
      setUrlVideo(url)
    },
    [],
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
      return [...oldContentInteractiveRegister, newContentInteractive]
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
    return !contentInteractiveRegister.filter(
      (item) =>
        item.time === time || (item.time < time + 60 && item.time > time - 60),
    ).length
  }

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    setIsLoadingForm(true)

    setTimeout(() => {
      console.log({
        file,
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
    file,
    urlVideo,
    isLoadingForm,
    message,
    statusPaused,
    confirm,
    handleChange,
    handleAddContentInteractive,
    canIAddThisTime,
    onSubmit,
  }
}

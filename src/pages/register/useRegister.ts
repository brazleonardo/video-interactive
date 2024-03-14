import { useState, useCallback, ChangeEvent } from 'react'

import { useRegisterVideo } from '@/contexts/registerVideo'
import { PropsVideoInteractiveRegister } from '@/types/iteractiveVideo'

export default function useRegister() {
  const {
    contentInteractive,
    statuPaused,
    modal,
    setContentInteractive,
    onOpenModal,
  } = useRegisterVideo()

  const [file, setFile] = useState<FileList | null>(null)
  const [urlVideo, setUrlVideo] = useState<string>('')

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
    setContentInteractive((oldContentInteractive) => {
      const newContentInteractive: PropsVideoInteractiveRegister = {
        time: statuPaused!.time as number,
        timeFormated: statuPaused!.timeFormated!,
        type: 'info',
        content: {
          question: null,
          answers: [],
          correctAnswer: null,
        },
      }
      return [...oldContentInteractive, newContentInteractive]
    })

    onOpenModal({
      open: true,
      data: {
        type: 'info',
        statuPaused,
      },
    })
  }

  const canIAddThisTime = (time: number) => {
    return !contentInteractive.filter(
      (item) =>
        item.time === time || (item.time < time + 60 && item.time > time - 60),
    ).length
  }

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log({
      file,
      contentInteractive,
    })
  }

  return {
    file,
    urlVideo,
    contentInteractive,
    statuPaused,
    modal,
    handleChange,
    handleAddContentInteractive,
    canIAddThisTime,
    onSubmit,
  }
}

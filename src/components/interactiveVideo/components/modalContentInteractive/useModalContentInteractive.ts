import { useMemo, useState, ChangeEvent } from 'react'

import { useRegisterVideo } from '@/contexts/registerVideo'

import { TypeIteractiveContent } from '@/types/iteractiveVideo'

interface PropsFields {
  question: string
  answers?: string[]
  correctAnswer?: number | null
}

export default function useModalContentInteractive() {
  const { modal, onCloseModal, onOpenModal, setContentInteractive } =
    useRegisterVideo()

  const initialFields = useMemo(
    () => ({
      question: '',
    }),
    [],
  )

  const [fields, setFields] = useState<PropsFields>(initialFields)

  const onCancel = () => {
    onCloseModal()
  }

  const onChangeType = (type: TypeIteractiveContent) => {
    onOpenModal({
      open: true,
      data: {
        type,
        statuPaused: modal.data!.statuPaused,
      },
    })
  }

  const onChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target

    setFields((oldFields) => {
      if (name === 'question') {
        oldFields.question = value
      }

      return oldFields
    })
  }

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log(modal.data!.type)

    setContentInteractive((oldContentInteractive) => {
      oldContentInteractive.map((item) => {
        if (item.time === modal.data?.statuPaused?.time) {
          item.content.question = fields.question
          item.type = modal.data.type
        }

        return item
      })

      return oldContentInteractive
    })
  }

  return { fields, onCancel, onChangeType, onChange, onSubmit }
}

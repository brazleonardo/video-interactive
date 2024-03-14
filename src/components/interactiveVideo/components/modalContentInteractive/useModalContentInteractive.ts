import { ChangeEvent } from 'react'

import { useRegisterVideo } from '@/contexts/registerVideo'

import { TypeIteractiveContent } from '@/types/iteractiveVideo'

export default function useModalContentInteractive() {
  const { modal, onCloseModal, setModal, setContentInteractive } =
    useRegisterVideo()

  const onCancel = () => {
    onCloseModal()
  }

  const onChangeType = (type: TypeIteractiveContent) => {
    setModal((oldModal) => ({
      ...oldModal,
      data: {
        ...oldModal.data,
        type,
      },
    }))
  }

  const onChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target

    setModal((oldModal) => ({
      ...oldModal,
      data: {
        ...oldModal.data,
        fields: {
          ...oldModal.data.fields,
          [name]: value,
        },
      },
    }))
  }

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    setContentInteractive((oldContentInteractive) => {
      oldContentInteractive.map((item) => {
        if (item.time === modal.data.statuPaused?.time) {
          item.content.question = modal.data.fields.question
          item.type = modal.data.type
        }

        return item
      })

      console.log(oldContentInteractive)

      return oldContentInteractive
    })

    onCloseModal()
  }

  return { modal, onCancel, onChangeType, onChange, onSubmit }
}

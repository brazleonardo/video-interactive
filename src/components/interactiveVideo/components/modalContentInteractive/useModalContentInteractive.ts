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
    setModal((oldModal) => {
      return {
        ...oldModal,
        data: {
          ...oldModal.data,
          type,
        },
      }
    })
  }

  const onChange = (
    { target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id?: string,
  ) => {
    const { name, value, type } = target

    setModal((oldModal) => {
      if (oldModal.data.type === 'quiz' && id) {
        oldModal.data.fields.answers.map((item) => {
          if (item.id === id && type === 'text') {
            item.text = value
          }
          return item
        })

        if (type === 'radio') {
          oldModal.data.fields.correctAnswer = value
        }

        return {
          ...oldModal,
        }
      }
      return {
        ...oldModal,
        data: {
          ...oldModal.data,
          fields: {
            ...oldModal.data.fields,
            [name]: value,
          },
        },
      }
    })
  }

  const onAddResponse = () => {
    setModal((oldModal) => {
      const id =
        Math.random().toString(36).substring(2) +
        new Date().getTime().toString(36)

      return {
        ...oldModal,
        data: {
          ...oldModal.data,
          fields: {
            ...oldModal.data.fields,
            answers: [...oldModal.data.fields.answers, { id, text: '' }],
          },
        },
      }
    })
  }

  const onRemoveResponse = (id: string) => {
    console.log(id)
    setModal((oldModal) => {
      console.log('index', oldModal.data.fields.answers.length)
      if (oldModal.data.fields.answers.length < 1) {
        return oldModal
      }
      return {
        ...oldModal,
        data: {
          ...oldModal.data,
          fields: {
            ...oldModal.data.fields,
            answers: [
              ...oldModal.data.fields.answers.filter((item) => item.id !== id),
            ],
          },
        },
      }
    })
  }

  const onValidate = () => {
    if (!modal.data.type) {
      return false
    }

    return true
  }

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!onValidate()) {
      return
    }

    setContentInteractive((oldContentInteractive) => {
      oldContentInteractive.map((item) => {
        if (item.time === modal.data.statuPaused!.time) {
          item.content.question = modal.data.fields.question
          if (item.type === 'quiz') {
            item.content.answers = modal.data.fields.answers
            item.content.correctAnswer = modal.data.fields.correctAnswer ?? null
          }
          item.type = modal.data.type
        }

        return item
      })

      return oldContentInteractive
    })

    onCloseModal()
  }

  return {
    modal,
    onCancel,
    onChangeType,
    onChange,
    onAddResponse,
    onRemoveResponse,
    onSubmit,
  }
}

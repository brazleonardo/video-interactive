import { useState, ChangeEvent } from 'react'

import { useRegisterVideo } from '@/contexts/registerVideo'

import { TypeIteractiveContent } from '@/types/iteractiveVideo'
import { PropsMessage } from '@/types/message'

export default function useModalContentInteractive() {
  const { modal, onCloseModal, setModal, setContentInteractive } =
    useRegisterVideo()

  const [message, setMessage] = useState<PropsMessage>({
    open: false,
    title: '',
    status: 'info',
  })

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

    setMessage({
      open: false,
      title: '',
      status: 'info',
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

  const onMessageError = (title: string) => {
    setMessage({
      title,
      open: true,
      status: 'error',
    })
  }

  const onValidate = () => {
    let error = 0
    if (modal.data.fields.question === '') {
      onMessageError('Ops! Você precisa preencher a pergunta.')
      error++

      return !error
    }
    if (modal.data.type === 'quiz') {
      if (modal.data.fields.answers.length < 2) {
        onMessageError('Ops! Você precisa adicionar pelo menos 2 respostas.')
        error++

        return !error
      }
      modal.data.fields.answers.forEach((item) => {
        if (item.text === '') {
          onMessageError('Ops! Você precisa preencher a resposta.')
          error++

          return !error
        }
      })
      if (!modal.data.fields.correctAnswer) {
        onMessageError('Ops! Você precisa marcar a resposta certa.')
        error++

        return !error
      }
    }

    if (error > 1) {
      onMessageError('Ops! Você precisa preencher os campos abaixo!')
    }

    return !error
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
    message,
    onCancel,
    onChangeType,
    onChange,
    onAddResponse,
    onRemoveResponse,
    onSubmit,
  }
}

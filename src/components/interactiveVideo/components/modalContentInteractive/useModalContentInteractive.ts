import { useMemo, useState, ChangeEvent } from 'react'

import { useRegisterVideo } from '@/contexts/registerVideo'

import {
  TypeIteractiveContent,
  PropsModalContentInteractiveFieldsError,
} from '@/types/iteractiveVideo'
import { PropsMessage } from '@/types/message'

export default function useModalContentInteractive() {
  const { modal, onCloseModal, setModal, setContentInteractiveRegister } =
    useRegisterVideo()

  const initialMessage = useMemo(
    () => ({
      open: false,
      title: '',
      status: 'info',
    }),
    [],
  ) as PropsMessage

  const initialError = useMemo(
    () => ({
      question: '',
      answers: [],
      correctAnswer: '',
    }),
    [],
  )

  const [message, setMessage] = useState<PropsMessage>(initialMessage)

  const [error, setError] =
    useState<PropsModalContentInteractiveFieldsError>(initialError)

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

    setError((oldError) => {
      if (type === 'textarea') {
        oldError.question = ''
      }
      if (type === 'text') {
        oldError.answers = [...oldError.answers.filter((item) => item !== id)]
      }
      if (type === 'radio') {
        oldError.correctAnswer = ''
      }
      return { ...oldError }
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
    let totalError = 0
    let msg = ''
    const customError: PropsModalContentInteractiveFieldsError = {
      question: '',
      answers: [],
      correctAnswer: '',
    }

    if (modal.data.fields.question === '') {
      msg = 'Ops! Você precisa preencher a pergunta.'
      customError.question = 'Ops! Você precisa preencher a pergunta.'
      totalError++
    }
    if (modal.data.type === 'quiz') {
      if (modal.data.fields.answers.length < 2) {
        msg = 'Ops! Você precisa adicionar pelo menos 2 respostas.'
        customError.correctAnswer =
          'Ops! Você precisa adicionar pelo menos 2 respostas.'
        totalError++
      }
      if (
        !!modal.data.fields.answers.length &&
        !modal.data.fields.correctAnswer
      ) {
        msg = 'Ops! Você precisa marcar a resposta certa.'
        customError.correctAnswer = 'Ops! Você precisa marcar a resposta certa.'
        totalError++
      }
      modal.data.fields.answers.forEach((item) => {
        if (item.text === '') {
          msg = 'Ops! Você precisa preencher a resposta.'
          customError.answers.push(item.id)
          totalError++
        }
      })
    }

    if (totalError > 1) {
      msg = 'Ops! Você precisa preencher todas as opções.'
    }

    onMessageError(msg)

    setError(customError)

    return !totalError
  }

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!onValidate()) {
      return
    }

    setContentInteractiveRegister((oldContentInteractive) => {
      oldContentInteractive.map((item) => {
        if (item.time === modal.data.statusPaused!.time) {
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

    setMessage(initialMessage)
    onCloseModal()
  }

  return {
    modal,
    message,
    error,
    onCancel,
    onChangeType,
    onChange,
    onAddResponse,
    onRemoveResponse,
    onSubmit,
  }
}

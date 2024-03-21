import {
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  useMemo,
  useState,
  useCallback,
  useEffect,
} from 'react'

import useSound from 'use-sound'

import {
  TypeStatus,
  PropsContentInteractiveData,
  PropsContentInteractive,
} from '@/types/iteractiveVideo'

import bite from '@/assets/bite.mp3'
import dunDunDun from '@/assets/dun-dun-dun.mp3'
import fanfare from '@/assets/fanfare.mp3'

interface Props {
  isLoadingPage: boolean
  isLoadingForm: boolean
  status: TypeStatus
  contentInteractive: PropsContentInteractiveData
  onStart(): void
  onEnd(): void
  onResetStatus(): void
  setContentInteractive: Dispatch<SetStateAction<PropsContentInteractiveData>>
  onChangeResponse(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    time: number,
  ): void
  onSubmit(values: PropsContentInteractive | null): void
  onSubmitComment(values: PropsContentInteractive | null): void
  onContinue(values: PropsContentInteractive | null): void
}

export const InteractiveVideoContext = createContext({} as Props)

export function useInteractiveVideo() {
  const context = useContext(InteractiveVideoContext)
  return context
}

export function useInteractiveVideoProvider() {
  const [clickSound] = useSound(bite)
  const [errorResponseSound] = useSound(dunDunDun, { volume: 0.2 })
  const [successResponseSound] = useSound(fanfare, { volume: 0.2 })

  const initialContentInteractive = useMemo(
    () => ({
      data: [],
      urlVideo: '',
      current: null,
      closeContentInteractive: false,
    }),
    [],
  ) as PropsContentInteractiveData

  const [isLoadingPage, setIsLoadingPage] = useState(true)
  const [isLoadingForm, setIsLoadingForm] = useState(false)
  const [status, setStatus] = useState<TypeStatus>(null)
  const [contentInteractive, setContentInteractive] =
    useState<PropsContentInteractiveData>(initialContentInteractive)

  const onStart = useCallback(() => {
    setStatus('start')
    clickSound()
  }, [clickSound])

  const onEnd = () => {
    setStatus('end')
  }

  const onResetStatus = () => {
    setStatus(null)
  }

  const onChangeResponse = useCallback(
    (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      time: number,
    ) => {
      const { type, value } = event.target

      if (type === 'radio') {
        clickSound()
      }

      setContentInteractive((oldContentInteractive) => {
        if (
          oldContentInteractive.current?.type === 'quiz' &&
          oldContentInteractive.current.finished
        ) {
          oldContentInteractive.closeContentInteractive = false
          return oldContentInteractive
        }
        if (oldContentInteractive.current?.type) {
          oldContentInteractive.current.content.questionAnswer = value
          oldContentInteractive.data = oldContentInteractive.data.map(
            (item) => {
              if (item.time === time) {
                item = {
                  ...item,
                  content: {
                    ...item.content,
                    questionAnswer: value,
                  },
                }
              }

              return item
            },
          )
        }

        return { ...oldContentInteractive }
      })
    },
    [clickSound],
  )

  const onSubmit = useCallback(
    (values: PropsContentInteractive | null) => {
      setIsLoadingForm(true)

      console.log({ values })

      setContentInteractive((oldContentInteractive) => ({
        ...oldContentInteractive,
        ...{
          current: oldContentInteractive.current,
          closeContentInteractive: false,
          data: oldContentInteractive.data.map((item) => {
            if (
              item.content.correctAnswer === values!.content.questionAnswer &&
              item.time === values!.time
            ) {
              item.status = 'answered'
              item.finished = true
              successResponseSound()
            }
            if (
              item.content.correctAnswer !== values!.content.questionAnswer &&
              item.time === values!.time
            ) {
              item.status = 'answered'
              item.finished = true
              errorResponseSound()
            }
            return item
          }),
        },
      }))

      setIsLoadingForm(false)
    },
    [errorResponseSound, successResponseSound],
  )

  const updateStateDataContentInteractive = useCallback(
    (
      data: PropsContentInteractive[],
      values: PropsContentInteractive | null,
      isSound?: boolean,
    ) => {
      return data.map((item) => {
        if (item.time === values!.time) {
          item.status = 'answered'
          item.finished = true

          if (isSound) {
            successResponseSound()
          }
        }

        return item
      })
    },
    [successResponseSound],
  )

  const onSubmitComment = useCallback(
    (values: PropsContentInteractive | null) => {
      setIsLoadingForm(true)

      console.log({ values })

      setTimeout(() => {
        setContentInteractive((oldContentInteractive) => ({
          ...oldContentInteractive,
          ...{
            current: oldContentInteractive.current,
            closeContentInteractive: false,
            data: updateStateDataContentInteractive(
              oldContentInteractive.data,
              values,
              true,
            ),
          },
        }))

        setIsLoadingForm(false)
      }, 1000)
    },
    [updateStateDataContentInteractive],
  )

  const onContinue = useCallback(
    (values: PropsContentInteractive | null) => {
      setIsLoadingForm(true)

      clickSound()

      console.log({ values })

      setTimeout(() => {
        setContentInteractive((oldContentInteractive) => ({
          ...oldContentInteractive,
          ...{
            current: null,
            closeContentInteractive: true,
            data: updateStateDataContentInteractive(
              oldContentInteractive.data,
              values,
            ),
          },
        }))

        setIsLoadingForm(false)
      }, 1000)
    },
    [clickSound, updateStateDataContentInteractive],
  )

  useEffect(() => {
    setIsLoadingPage(false)
  }, [])

  const values = useMemo(
    () => ({
      isLoadingPage,
      isLoadingForm,
      status,
      contentInteractive,
      onStart,
      onEnd,
      onResetStatus,
      setContentInteractive,
      onChangeResponse,
      onSubmit,
      onSubmitComment,
      onContinue,
    }),
    [
      isLoadingPage,
      isLoadingForm,
      status,
      contentInteractive,
      onStart,
      onChangeResponse,
      onSubmit,
      onSubmitComment,
      onContinue,
    ],
  )

  return {
    values,
  }
}

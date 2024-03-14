import {
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
  useEffect,
} from 'react'

import {
  PropsVideoInteractiveRegister,
  StatusPaused,
  PropsModalContentInteractive,
} from '@/types/iteractiveVideo'

interface Props {
  isLoadingPage: boolean
  statuPaused: StatusPaused | null
  contentInteractive: PropsVideoInteractiveRegister[]
  modal: PropsModalContentInteractive
  onStatuPaused(value: StatusPaused | null): void
  onCloseModal(): void
  setModal: Dispatch<SetStateAction<PropsModalContentInteractive>>
  setContentInteractive: Dispatch<
    SetStateAction<PropsVideoInteractiveRegister[]>
  >
}

export const RegisterVideoContext = createContext({} as Props)

export function useRegisterVideo() {
  const context = useContext(RegisterVideoContext)
  return context
}

export function useRegisterVideoProvider() {
  const initialModal = useMemo(
    () => ({
      open: false,
      data: {
        type: 'info',
        statuPaused: null,
        fields: {
          question: '',
          answers: [],
          correctAnswer: null,
        },
      },
    }),
    [],
  ) as PropsModalContentInteractive

  const [isLoadingPage, setIsLoadingPage] = useState(true)
  const [statuPaused, setStatuPaused] = useState<StatusPaused | null>(null)
  const [modal, setModal] = useState<PropsModalContentInteractive>(initialModal)
  const [contentInteractive, setContentInteractive] = useState<
    PropsVideoInteractiveRegister[]
  >([])

  const onStatuPaused = (value: StatusPaused | null) => {
    setStatuPaused(value)
  }

  const onCloseModal = () => {
    setModal((oldModal) => ({
      ...oldModal,
      open: false,
    }))
  }

  useEffect(() => {
    setIsLoadingPage(false)
  }, [])

  const values = useMemo(
    () => ({
      isLoadingPage,
      contentInteractive,
      statuPaused,
      modal,
      onStatuPaused,
      onCloseModal,
      setModal,
      setContentInteractive,
    }),
    [isLoadingPage, contentInteractive, statuPaused, modal],
  )

  return {
    values,
  }
}

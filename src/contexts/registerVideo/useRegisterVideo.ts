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
  PropsModalConfirm,
} from '@/types/iteractiveVideo'

interface Props {
  isLoadingPage: boolean
  statusPaused: StatusPaused | null
  contentInteractive: PropsVideoInteractiveRegister[]
  modal: PropsModalContentInteractive
  confirm: PropsModalConfirm
  onOpenConfirm(value: StatusPaused | null): void
  onCloseConfirm(): void
  onStatusPaused(value: StatusPaused | null): void
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
        statusPaused: null,
        fields: {
          question: '',
          answers: [],
          correctAnswer: null,
        },
      },
    }),
    [],
  ) as PropsModalContentInteractive

  const initialConfirm = useMemo(
    () => ({
      open: false,
      statusPaused: null,
    }),
    [],
  ) as PropsModalConfirm

  const [isLoadingPage, setIsLoadingPage] = useState(true)
  const [statusPaused, setStatusPaused] = useState<StatusPaused | null>(null)
  const [modal, setModal] = useState<PropsModalContentInteractive>(initialModal)
  const [confirm, setConfirm] = useState(initialConfirm)
  const [contentInteractive, setContentInteractive] = useState<
    PropsVideoInteractiveRegister[]
  >([])

  const onOpenConfirm = (statusPaused: StatusPaused | null) => {
    setConfirm({
      open: true,
      statusPaused,
    })
  }

  const onCloseConfirm = () => {
    setConfirm((oldConfirm) => ({ ...oldConfirm, open: false }))
  }

  const onStatusPaused = (value: StatusPaused | null) => {
    setStatusPaused(value)
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
      statusPaused,
      modal,
      confirm,
      onOpenConfirm,
      onCloseConfirm,
      onStatusPaused,
      onCloseModal,
      setModal,
      setContentInteractive,
    }),
    [isLoadingPage, contentInteractive, statusPaused, modal, confirm],
  )

  return {
    values,
  }
}

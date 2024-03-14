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
  onOpenModal(value: PropsModalContentInteractive): void
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
  const [isLoadingPage, setIsLoadingPage] = useState(true)
  const [statuPaused, setStatuPaused] = useState<StatusPaused | null>(null)
  const [modal, setModal] = useState<PropsModalContentInteractive>({
    open: false,
  })
  const [contentInteractive, setContentInteractive] = useState<
    PropsVideoInteractiveRegister[]
  >([])

  const onStatuPaused = (value: StatusPaused | null) => {
    setStatuPaused(value)
  }

  const onOpenModal = (value: PropsModalContentInteractive) => {
    setModal(value)
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
      onOpenModal,
      setContentInteractive,
    }),
    [isLoadingPage, contentInteractive, statuPaused, modal],
  )

  return {
    values,
  }
}

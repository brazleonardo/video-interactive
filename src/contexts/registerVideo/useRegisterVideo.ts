import {
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
  useEffect,
} from 'react'

import { PropsVideoInteractiveRegister } from '@/types/iteractiveVideo'

type StatusPaused = {
  time: number | null
  timeFormated: string | null
}

interface Props {
  isLoadingPage: boolean
  statuPaused: StatusPaused | null
  contentInteractive: PropsVideoInteractiveRegister[]
  onStatuPaused(value: StatusPaused | null): void
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
  const [contentInteractive, setContentInteractive] = useState<
    PropsVideoInteractiveRegister[]
  >([])

  const onStatuPaused = (value: StatusPaused | null) => {
    setStatuPaused(value)
  }

  useEffect(() => {
    setIsLoadingPage(false)
  }, [])

  const values = useMemo(
    () => ({
      isLoadingPage,
      contentInteractive,
      statuPaused,
      onStatuPaused,
      setContentInteractive,
    }),
    [isLoadingPage, statuPaused, contentInteractive],
  )

  return {
    values,
  }
}

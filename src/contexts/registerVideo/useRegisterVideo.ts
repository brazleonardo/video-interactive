import {
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
  useEffect,
} from 'react'

import { PropsVideoInteractiveRegisterData } from '@/types/iteractiveVideo'

interface Props {
  isLoadingPage: boolean
  contentInteractive: PropsVideoInteractiveRegisterData
  setContentInteractive: Dispatch<
    SetStateAction<PropsVideoInteractiveRegisterData>
  >
}

export const RegisterVideoContext = createContext({} as Props)

export function useRegisterVideo() {
  const context = useContext(RegisterVideoContext)
  return context
}

export function useRegisterVideoProvider() {
  const initialContentInteractive = useMemo(
    () => ({
      data: [],
    }),
    [],
  )

  const [isLoadingPage, setIsLoadingPage] = useState(true)
  const [contentInteractive, setContentInteractive] = useState(
    initialContentInteractive as PropsVideoInteractiveRegisterData,
  )

  useEffect(() => {
    setIsLoadingPage(false)
  }, [])

  const values = useMemo(
    () => ({
      isLoadingPage,
      contentInteractive,
      setContentInteractive,
    }),
    [isLoadingPage, contentInteractive],
  )

  return {
    values,
  }
}

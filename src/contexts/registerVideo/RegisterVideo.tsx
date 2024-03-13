import { ReactNode } from 'react'
import {
  useRegisterVideoProvider,
  RegisterVideoContext,
} from './useRegisterVideo'

interface Props {
  children?: ReactNode
}

const RegisterVideo = ({ children }: Props) => {
  const { values } = useRegisterVideoProvider()

  return (
    <RegisterVideoContext.Provider value={values}>
      {children}
    </RegisterVideoContext.Provider>
  )
}

export default RegisterVideo

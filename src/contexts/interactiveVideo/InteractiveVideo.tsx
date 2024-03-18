import { ReactNode } from 'react'
import {
  useInteractiveVideoProvider,
  InteractiveVideoContext,
} from './useInteractiveVideo'

interface Props {
  children?: ReactNode
}

const InteractiveVideoProvider = ({ children }: Props) => {
  const { values } = useInteractiveVideoProvider()

  return (
    <InteractiveVideoContext.Provider value={values}>
      {children}
    </InteractiveVideoContext.Provider>
  )
}

export default InteractiveVideoProvider

import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  is: boolean
}

const When = ({ is, children }: Props) => {
  if (is) {
    return <>{children}</>
  }
  return <></>
}

export default When

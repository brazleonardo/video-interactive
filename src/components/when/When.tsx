import React from 'react'

interface Props {
  children: React.ReactNode
  is: boolean
}

const When = ({ is, children }: Props) => {
  if (is) {
    return <>{children}</>
  }
  return <></>
}

export default When

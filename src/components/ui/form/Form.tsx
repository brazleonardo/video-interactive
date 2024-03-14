import { ChangeEvent, ReactNode } from 'react'

import * as Component from './styled'

interface Props {
  method?: 'POST' | 'GET'
  encType?: string
  isLoading?: boolean
  children: ReactNode
  onSubmit?(event: ChangeEvent<HTMLFormElement>): void
}

const Form = ({ method, encType, children, isLoading, onSubmit }: Props) => (
  <Component.Form
    method={method ?? 'POST'}
    encType={encType}
    $isLoading={isLoading ?? false}
    onSubmit={onSubmit}
  >
    {children}
  </Component.Form>
)

export default Form

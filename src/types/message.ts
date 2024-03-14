export type TypeStatusMessage = 'success' | 'error' | 'info'

export interface PropsMessage {
  open: boolean
  title: string
  status: TypeStatusMessage
  text?: string
}

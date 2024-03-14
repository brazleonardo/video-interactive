export type TypeMessage = 'success' | 'error'

export interface PropsMessage {
  open: boolean
  title: string
  status?: TypeMessage
  text?: string
}

import * as Component from './styled'

import { PropsMessage } from '@/types/message'

const Message = ({ open, title, text, status }: PropsMessage) => {
  if (open) {
    return (
      <Component.Container status={status}>
        <Component.When is={status === 'success'}>
          <Component.TbInfoSquareRounded />
        </Component.When>
        <Component.When is={status === 'error'}>
          <Component.BiError />
        </Component.When>
        <Component.Info>
          <Component.Title>{title}</Component.Title>
          <Component.When is={!!text}>
            <Component.Text>{text}</Component.Text>
          </Component.When>
        </Component.Info>
      </Component.Container>
    )
  }

  return <></>
}

export default Message

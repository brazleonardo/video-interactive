import styled from 'styled-components'
import { TbInfoSquareRounded } from 'react-icons/tb'
import { BiError } from 'react-icons/bi'

import When from '@/components/when'

import { TypeStatusMessage } from '@/types/message'

export { When, TbInfoSquareRounded, BiError }

function colorStatus({ ...props }) {
  if (props.status === 'success') {
    return props.theme.colors.successBtn
  }
  if (props.status === 'error') {
    return props.theme.colors.errorBtn
  }

  return props.theme.colors.infoBtn
}

export const Container = styled.div.attrs({ className: 'alert--message' })<{
  status: TypeStatusMessage
}>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 2rem;
  border: 1px solid ${(props) => colorStatus(props)};
  color: ${(props) => colorStatus(props)};
  border-radius: 4px;
  font-size: 2rem;
`

export const Info = styled.div``

export const Title = styled.span`
  display: block;
  font-size: 1.2rem;
`

export const Text = styled.span`
  display: block;
`

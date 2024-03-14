import styled from 'styled-components'
import { TbInfoSquareRounded } from 'react-icons/tb'
import { BiError } from 'react-icons/bi'

import When from '@/components/when'

import { TypeMessage } from '@/types/message'

export { When, TbInfoSquareRounded, BiError }

export const Container = styled.div.attrs({ className: 'alert--message' })<{
  status: TypeMessage
}>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 2rem;
  border: 1px solid
    ${(props) =>
      props.status === 'success'
        ? props.theme.colors.successBtn
        : props.theme.colors.errorBtn};
  color: ${(props) =>
    props.status === 'success'
      ? props.theme.colors.successBtn
      : props.theme.colors.errorBtn};
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

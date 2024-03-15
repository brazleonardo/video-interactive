import styled from 'styled-components'
import { MdDeleteForever } from 'react-icons/md'

import Button from '@/components/ui/button'

import { darken } from '@/utils'

export { Button, MdDeleteForever }

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Label = styled.label`
  font-weight: bold;
`

export const TextArea = styled.textarea.attrs({ rows: 5 })`
  padding: 0.5rem;
  font-size: 0.9rem;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 4px;
`

export const WrapResponses = styled.div`
  && {
    display: flex;
    flex-direction: column;
    gap: 10px;

    button {
      max-width: 180px;
      color: ${(props) => props.theme.colors.primary};
      background-color: ${(props) => props.theme.colors.textPrimaryContrast};
      border: 1px solid ${(props) => props.theme.colors.primary};

      &:hover {
        background-color: ${(props) =>
          darken(props.theme.colors.textPrimaryContrast, -50)};
      }
    }
  }
`

export const GroupInput = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const Radio = styled.input.attrs({ type: 'radio' })`
  width: 20px;
  height: 20px;
`

export const LabelNumber = styled.span`
  width: 40px;
  height: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input.attrs({ type: 'text' })`
  width: calc(100% - 100px);
  height: 40px;
  padding: 0.5rem;
  font-size: 0.9rem;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 4px;
`

export const ButtonRemove = styled.button.attrs({ type: 'button' })`
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 0;
  border-radius: 4px;
`

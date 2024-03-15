import styled from 'styled-components'
import { MdDeleteForever } from 'react-icons/md'

import When from '@/components/when'
import Button from '@/components/ui/button'

import { darken } from '@/utils'

export { When, Button, MdDeleteForever }

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Label = styled.label`
  font-weight: bold;
  line-height: 1.3;
`

export const TextArea = styled.textarea<{
  $error?: boolean
}>`
  min-height: 100px;
  max-height: 150px;
  padding: 0.5rem;
  font-size: 0.9rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.$error ? props.theme.colors.errorBtn : props.theme.colors.primary};
  border-radius: 4px;
  resize: vertical;
`

export const WrapResponses = styled.div<{ $error: boolean }>`
  && {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: ${(props) => (props.$error ? 10 : 0)}px;
    border-style: solid;
    border-width: ${(props) => (props.$error ? 1 : 0)}px;
    border-color: ${(props) =>
      props.$error ? props.theme.colors.errorBtn : props.theme.colors.primary};

    button {
      max-width: 180px;
      color: ${(props) => props.theme.colors.primary};
      background-color: ${(props) => props.theme.colors.textPrimaryContrast};
      border-width: 1px;
      border-style: solid;
      border-color: ${(props) => props.theme.colors.primary};

      &:not(:disabled):hover {
        background-color: ${(props) =>
          darken(props.theme.colors.textPrimaryContrast, -50)};
      }
    }
  }
`

export const GroupLabel = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`

export const Hint = styled.span`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.primary};
  font-style: italic;
  line-height: 1.3;
`

export const GroupInput = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const InputRadio = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
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

export const InputText = styled.input<{
  $error?: boolean
}>`
  width: calc(100% - 100px);
  height: 40px;
  padding: 0.5rem;
  font-size: 0.9rem;
  border: 1px solid
    ${(props) =>
      props.$error ? props.theme.colors.errorBtn : props.theme.colors.primary};
  border-radius: 4px;
`

export const ButtonRemove = styled.button`
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 0;
  border-radius: 4px;

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`

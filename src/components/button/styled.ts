import styled from 'styled-components'

import { darken } from '@/utils'

import { PropsButton } from './interface'

export const Button = styled.button<PropsButton>`
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  height: ${(props) => sizeButton(props.size)}px;
  padding: 20px;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textPrimaryContrast};
  background-color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  border-radius: 10px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease-in-out;

  &:not(:disabled):hover {
    background-color: ${(props) => darken(props.theme.colors.primary, 20)};
  }

  &:not(:disabled):active {
    transition: all 0.2s ease-in-out;
    background-color: ${(props) => darken(props.theme.colors.primary, 10)};
    transform: scale(1.2);
  }

  &:disabled {
    background-color: ${(props) => darken(props.theme.colors.primary, 60)};
    cursor: default;
  }
`

const sizeButton = (size: 'small' | 'medium' | 'large' | undefined) => {
  if (size === 'large') {
    return 60
  }
  if (size === 'medium') {
    return 45
  }

  return 30
}

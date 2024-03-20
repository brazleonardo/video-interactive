import styled from 'styled-components'

import Button from '@/components/ui/button'
import { ButtonFullscreen } from '@/components/interactiveVideo'

export { Button, ButtonFullscreen }

export const Container = styled.div.attrs({
  className: 'container--start-video',
})`
  width: 100%;
  min-height: calc(100vh - var(--navbarHeight));
  position: relative;
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`

export const Box = styled.div`
  width: 100%;
  max-width: 990px;

  p {
    margin-bottom: 20px;
    text-align: center;
  }
`

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.textSecondaryContrast};
`

export const WrapButtonFullscreen = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;

  button {
    color: ${(props) => props.theme.colors.textSecondaryContrast};

    &:hover {
      color: ${(props) => props.theme.colors.textPrimaryContrast};
    }
  }
`

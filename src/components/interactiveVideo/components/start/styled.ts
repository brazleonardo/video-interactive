import styled from 'styled-components'

import Button from '@/components/button'

export { Button }

export const Container = styled.div`
  width: 100%;
  height: 100vh;
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

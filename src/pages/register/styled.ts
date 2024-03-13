import styled from 'styled-components'

import ButtonUpload from '@/components/ui/buttonUpload'

export { ButtonUpload }

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  min-height: 100vh;
  margin: auto;
`

export const Title = styled.h1`
  font-size: 1.9rem;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-top: 80px;
  margin-bottom: 15px;
`

export const Text = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 40px;
`

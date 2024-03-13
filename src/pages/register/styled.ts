import styled from 'styled-components'

import When from '@/components/when'
import ButtonUpload from '@/components/ui/buttonUpload'
import Button from '@/components/ui/button'
import { ModalContentInteractive } from '@/components/interactiveVideo'

export { When, ButtonUpload, Button, ModalContentInteractive }

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const GroupButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`

export const ButtonAdd = styled(Button)`
  && {
    background-color: #fff;
    color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.primary};

    &:hover {
      background-color: #d1d1d1;
    }
  }
`

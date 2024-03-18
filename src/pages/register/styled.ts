import styled from 'styled-components'

import When from '@/components/when'
import Message from '@/components/ui/message'
import Form from '@/components/ui/form'
import ButtonUpload from '@/components/ui/buttonUpload'
import Button from '@/components/ui/button'
import ModalConfirm from '@/components/interactiveVideo/components/modalConfirm'
import { ModalContentInteractive } from '@/components/interactiveVideo'

export {
  When,
  Message,
  Form,
  ButtonUpload,
  Button,
  ModalConfirm,
  ModalContentInteractive,
}

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  transition: all 0.4s ease-in-out;

  .alert--message {
    margin-top: 40px;
  }
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

export const InnerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin: 40px 0;
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

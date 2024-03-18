import styled from 'styled-components'

import Button from '@/components/ui/button'
import Message from '@/components/ui/message'

export { Button, Message }

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  &:before {
    width: 100%;
    height: 100%;
    content: '';
    background-color: rgba(255, 255, 255, 0.3);
    position: fixed;
    top: 0;
    left: 0;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 360px;
  min-height: 240px;
  margin: auto;
  position: relative;
  border-radius: 4px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);

  &:before {
    width: 100%;
    height: 100%;
    content: '';
    background-color: rgba(241, 241, 241, 0.96);
    filter: blur(2px);
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const Header = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 2rem;
  background-color: ${(props) => props.theme.colors.primary};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;

  h3 {
    color: ${(props) => props.theme.colors.textPrimaryContrast};
  }
`

export const Content = styled.div`
  padding: 2rem;
  position: relative;
  z-index: 1;
`

export const Title = styled.h3`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.primary};
`

export const Text = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
`

export const TextBold = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
`

export const GroupButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 40px;

  button {
    width: 100%;
    max-width: 120px;
  }
`

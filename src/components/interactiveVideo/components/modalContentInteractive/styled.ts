import styled from 'styled-components'

import Button from '@/components/ui/button'

import FormContentType from './components/formContentType'

export { Button, FormContentType }

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
  max-width: 860px;
  min-height: 380px;
  margin: auto;
  padding: 2rem;
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

export const Content = styled.div`
  position: relative;
  z-index: 1;
`

export const Title = styled.h3`
  font-size: 18px;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 40px;
`

export const Form = styled.form`
  width: 100%;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`

export const GroupButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`

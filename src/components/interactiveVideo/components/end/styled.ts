import styled from 'styled-components'

import {
  FaRegCalendarAlt,
  FaInfo,
  FaCheck,
  FaRegCommentAlt,
  FaQuestion,
} from 'react-icons/fa'
import { GiPodium } from 'react-icons/gi'

import When from '@/components/when'
import Button from '@/components/button'

export {
  When,
  Button,
  FaRegCalendarAlt,
  FaInfo,
  FaCheck,
  FaRegCommentAlt,
  FaQuestion,
  GiPodium,
}

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
  max-width: 700px;

  p {
    margin-bottom: 20px;
    text-align: center;
  }
`

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.textSecondaryContrast};
`

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`

export const Card = styled.div`
  width: 20%;
  padding: 25px;
  background-color: ${(props) => props.theme.colors.bgCard};
  border: 1px solid #333;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`

export const Info = styled.div`
  width: calc(100% - 40px);
  height: 100%;
`

export const CardTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.textSecondaryContrast};
`

export const CardText = styled.h3`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.textSecondaryContrast};
`

export const TextSmall = styled.span`
  font-size: 0.9rem;
  font-weight: normal;
`

export const WrapIcon = styled.h3`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 3.1rem;
`

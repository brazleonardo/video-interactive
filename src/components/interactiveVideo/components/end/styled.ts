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
import Button from '@/components/ui/button'
import { ButtonFullscreen } from '@/components/interactiveVideo'

export {
  When,
  Button,
  FaRegCalendarAlt,
  FaInfo,
  FaCheck,
  FaRegCommentAlt,
  FaQuestion,
  GiPodium,
  ButtonFullscreen,
}

interface PropsContainer {
  average: number
}

export const Container = styled.div.attrs({
  className: 'container--end-video',
})<PropsContainer>`
  width: 100%;
  min-height: calc(100vh - var(--navbarHeight));
  background-color: ${(props) =>
    props.average >= 80
      ? props.theme.colors.bgEndApproved
      : props.theme.colors.bgEndNotApproved};
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

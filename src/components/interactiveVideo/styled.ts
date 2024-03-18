import styled from 'styled-components'
import { RiVideoAddFill } from 'react-icons/ri'

import { Link } from 'react-router-dom'

import { darken } from '@/utils'

import When from '@/components/when'
import Start from './components/start'
import End from './components/end'
import Video from './components/video'

export { Link, RiVideoAddFill, When, Start, End, Video }

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const NotFoundVideo = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    font-size: 0.9rem;
    font-weight: bold;
    padding: 1rem 1.5rem;
    color: ${(props) => props.theme.colors.textPrimaryContrast};
    background-color: ${(props) => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${(props) => darken(props.theme.colors.primary, -20)};
    }
  }
`

export const Text = styled.h2`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 30px;
`

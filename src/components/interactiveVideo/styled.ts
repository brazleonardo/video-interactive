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
  min-height: calc(100vh - var(--navbarHeight));
  position: relative;

  @media (orientation: portrait) {
    &:before {
      width: 100%;
      height: 100%;
      background-color: #000;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 40;
    }
  }
`

export const NotFoundVideo = styled.div`
  width: 100%;
  min-height: calc(100vh - var(--navbarHeight));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 15px;

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
  line-height: 1.3;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 30px;
  text-align: center;
`

export const TextNotSupported = styled.h2`
  display: none;

  @media (orientation: portrait) {
    width: 100%;
    font-size: 1.3rem;
    line-height: 1.3;
    color: ${(props) => props.theme.colors.textPrimaryContrast};
    text-align: center;
    display: block;
    padding: 0 15px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 41;
  }
`

import styled from 'styled-components'
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'
import { FaPlay, FaPause } from 'react-icons/fa6'

import When from '@/components/when'
import Button from '@/components/button'
import Marker from '../marker'

import InteractiveContent from '../interactiveContent'

export {
  When,
  Button,
  Marker,
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  InteractiveContent,
}

export const Container = styled.div`
  width: calc(100vw - 80px);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`

export const Wrap = styled.div<{ $hasInteractive: boolean }>`
  width: 100vw;
  position: relative;
  overflow: hidden;
  background-color: #000;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 10px;

  video {
    width: ${(props) => (props.$hasInteractive ? '60%' : '100%')};
  }

  article {
    width: ${(props) => (props.$hasInteractive ? '40%' : '0')};
    visibility: ${(props) => (props.$hasInteractive ? 'visible' : 'hidden')};
  }
`

export const Video = styled.video`
  height: 70vh;
  border: 1px solid #000;
  transition: all 0.3s ease-in-out;
`

export const Controls = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 20px;
  background-color: ${(props) => props.theme.colors.primary};
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 10;
`

export const ButtonIcon = styled(Button)`
  width: auto;
  height: auto;
  padding: 10px;
  border-radius: 50%;
  background-color: transparent;
  color: #fff;

  svg {
    font-size: 20px;
  }
`

export const WrapSlider = styled.div`
  width: calc(100% - 260px);
  height: 8px;
  background-color: ${(props) => props.theme.colors.secondary};
  position: relative;
  display: flex;
  transition: all 0.3s ease;
  border-radius: 2px;
`

export const Slider = styled.input.attrs({ type: 'range' })`
  width: 100%;
  height: 8px;
  background: transparent;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 5;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 12px;
    width: 12px;
    background-color: ${(props) => props.theme.colors.barVideoSlider};
    border-radius: 50%;
    transition: 0.2s ease-in-out;
    border: none;
    opacity: 0;
  }

  &::-moz-range-thumb {
    background-color: ${(props) => props.theme.colors.barVideoSlider};
    height: 12px;
    width: 12px;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    border: none;
    opacity: 0;
  }

  &:hover::-webkit-slider-thumb {
    width: 15px;
    height: 15px;
    opacity: 1;
  }
  &:hover::-moz-range-thumb {
    width: 15px;
    height: 15px;
    opacity: 1;
  }

  &:active::-webkit-slider-thumb {
    width: 20px;
    height: 20px;
    opacity: 1;
  }
  &:active::-moz-range-thumb {
    width: 20px;
    height: 20px;
    opacity: 1;
  }
`

export const Time = styled.span`
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  padding-left: 20px;
  display: block;
`

export const MarkerSlider = styled.div<{ left: string }>`
  width: 2.7%;
  height: 8px;
  background-color: #db5b30;
  position: absolute;
  top: 0;
  left: ${(props) => props.left}%;
  z-index: 2;
`

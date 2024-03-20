import styled from 'styled-components'
import { FaPlay, FaPause } from 'react-icons/fa6'

import { darken } from '@/utils'

import When from '@/components/when'
import Button from '@/components/ui/button'
import { Marker, VolumeIcon } from '@/components/interactiveVideo'

interface PropsMarkerSlider {
  left: string
}

export { When, Button, Marker, FaPlay, FaPause, VolumeIcon }

export const Container = styled.div`
  width: 100%;
  max-width: 767px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`

export const Wrap = styled.div`
  width: 100vw;
  position: relative;
  overflow: hidden;
  background-color: #000;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: var(--navbarVideoHeight);

  video {
    width: 100%;
  }
`

export const Video = styled.video`
  border: 1px solid #000;
  transition: all 0.3s ease-in-out;
`

export const Controls = styled.div`
  width: 100%;
  height: var(--navbarVideoHeight);
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
  }

  &::-moz-range-thumb {
    background-color: ${(props) => props.theme.colors.barVideoSlider};
    height: 12px;
    width: 12px;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    border: none;
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
  font-size: 0.8rem;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  padding-left: 20px;
  display: block;
`

export const MarkerSlider = styled.div<PropsMarkerSlider>`
  width: 8px;
  height: 8px;
  background-color: #db5b30;
  position: absolute;
  top: 0;
  left: ${(props) => props.left}%;
  z-index: 2;

  &:hover {
    .menu--item-options {
      visibility: visible;
      opacity: 1;
    }
  }
`

export const MenuOptions = styled.div.attrs({
  className: 'menu--item-options',
})`
  background-color: ${(props) => darken(props.theme.colors.primary, -20)};
  border: 3px solid ${(props) => darken(props.theme.colors.primary, -20)};
  position: absolute;
  bottom: -32px;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: hidden;
  opacity: 0;
  z-index: 1000;
  transition: opacity 0.3s ease-in-out;

  &:before {
    width: 0;
    height: 0;
    content: '';
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 15px;
    border-style: solid;
    border-color: transparent;
    border-top-color: ${(props) => darken(props.theme.colors.primary, -20)};
    z-index: -1;
  }

  &:hover {
    visibility: visible;
    opacity: 1;
  }
`

export const ItemButton = styled(Button)`
  && {
    width: 100%;
    border-radius: 0;
    font-size: 0.9rem;
    background-color: ${(props) => darken(props.theme.colors.primary, -20)};
  }
`

export const WrapVolume = styled.div`
  position: relative;

  input[type='range'] {
    width: 45px;
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(270deg);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    button {
      opacity: 0.1;
    }

    input[type='range'] {
      opacity: 1;
    }
  }
`

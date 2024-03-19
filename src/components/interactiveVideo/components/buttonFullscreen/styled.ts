import styled from 'styled-components'

import { RiFullscreenFill } from 'react-icons/ri'
import { RxExitFullScreen } from 'react-icons/rx'

import When from '@/components/when'
import Button from '@/components/ui/button'

export { When, RiFullscreenFill, RxExitFullScreen }

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

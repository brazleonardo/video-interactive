import styled from 'styled-components'
import { FaInfo, FaCheck, FaRegCommentAlt, FaQuestion } from 'react-icons/fa'

import { darken } from '@/utils'

import { TypeStatusMarker } from '@/types/iteractiveVideo'

export { FaInfo, FaCheck, FaRegCommentAlt, FaQuestion }

interface PropsMark {
  $status: TypeStatusMarker
  $hasClick?: boolean
}

function colorStatus({ ...props }) {
  if (props.$status === 'viewed') {
    return props.theme.colors.viewedBtn
  }
  if (props.$status === 'answered') {
    return props.theme.colors.successBtn
  }

  return props.theme.colors.primaryBtn
}

export const Marker = styled.button.attrs({
  type: 'button',
})<PropsMark>`
  width: 18px;
  height: 18px;
  background-color: ${(props) => colorStatus(props)};
  border-radius: 50%;
  position: absolute;
  top: 12px;
  left: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  color: ${(props) =>
    props.$status === 'viewed'
      ? props.theme.colors.textSecondaryContrast
      : props.theme.colors.textPrimaryContrast};
  transition: all 0.5s ease-in-out;
  cursor: ${(props) => (props?.$hasClick ? 'pointer' : 'default')};

  &:hover {
    background-color: ${(props) => darken(colorStatus(props), -50)};
  }

  &:after {
    width: 1px;
    height: 22px;
    content: '';
    border-left: 0.2rem dotted #000;
    border-right: 0.2rem dotted #fff;
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }

  svg {
    font-size: 10px;
  }
`

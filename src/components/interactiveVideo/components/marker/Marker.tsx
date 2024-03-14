import { MouseEventHandler } from 'react'

import * as Component from './styled'

import {
  TypeIteractiveContent,
  TypeStatusMarker,
} from '@/types/iteractiveVideo'

interface Props {
  type: TypeIteractiveContent
  status: TypeStatusMarker
  hasClick?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Marker = ({ type, status, hasClick, onClick }: Props) => {
  if (type === 'info') {
    return (
      <Component.Marker $hasClick={hasClick} $status={status} onClick={onClick}>
        <Component.FaInfo />
      </Component.Marker>
    )
  }
  if (type === 'check') {
    return (
      <Component.Marker $hasClick={hasClick} $status={status} onClick={onClick}>
        <Component.FaCheck />
      </Component.Marker>
    )
  }
  if (type === 'quiz') {
    return (
      <Component.Marker $hasClick={hasClick} $status={status} onClick={onClick}>
        <Component.FaQuestion />
      </Component.Marker>
    )
  }
  if (type === 'comment') {
    return (
      <Component.Marker $hasClick={hasClick} $status={status} onClick={onClick}>
        <Component.FaRegCommentAlt />
      </Component.Marker>
    )
  }

  return <></>
}

export default Marker

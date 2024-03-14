import { MouseEventHandler } from 'react'

import * as Component from './styled'

import {
  TypeIteractiveContent,
  TypeStatusMarker,
} from '@/types/iteractiveVideo'

interface Props {
  type: TypeIteractiveContent
  status: TypeStatusMarker
  onClick: MouseEventHandler<HTMLButtonElement> | undefined
}

const Marker = ({ type, status, onClick }: Props) => {
  if (type === 'info') {
    return (
      <Component.Marker $status={status} onClick={onClick}>
        <Component.FaInfo />
      </Component.Marker>
    )
  }
  if (type === 'check') {
    return (
      <Component.Marker $status={status} onClick={onClick}>
        <Component.FaCheck />
      </Component.Marker>
    )
  }
  if (type === 'quiz') {
    return (
      <Component.Marker $status={status} onClick={onClick}>
        <Component.FaQuestion />
      </Component.Marker>
    )
  }
  if (type === 'comment') {
    return (
      <Component.Marker $status={status} onClick={onClick}>
        <Component.FaRegCommentAlt />
      </Component.Marker>
    )
  }

  return <></>
}

export default Marker

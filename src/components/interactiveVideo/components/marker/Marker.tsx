import * as Component from './styled'

import {
  TypeIteractiveContent,
  TypeStatusMarker,
} from '@/types/iteractiveVideo'

interface Props {
  type: TypeIteractiveContent
  status: TypeStatusMarker
  time: number
  onClick?(time: number): void
}

const Marker = ({ type, status, time, onClick }: Props) => {
  if (type === 'info') {
    return (
      <Component.Marker $status={status} onClick={() => onClick!(time)}>
        <Component.FaInfo />
      </Component.Marker>
    )
  }
  if (type === 'check') {
    return (
      <Component.Marker $status={status} onClick={() => onClick!(time)}>
        <Component.FaCheck />
      </Component.Marker>
    )
  }
  if (type === 'quiz') {
    return (
      <Component.Marker $status={status} onClick={() => onClick!(time)}>
        <Component.FaQuestion />
      </Component.Marker>
    )
  }
  if (type === 'comment') {
    return (
      <Component.Marker $status={status} onClick={() => onClick!(time)}>
        <Component.FaRegCommentAlt />
      </Component.Marker>
    )
  }

  return <></>
}

export default Marker

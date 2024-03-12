import * as Component from './styled'

import {
  TypeIteractiveContent,
  TypeStatusMarker,
} from '@/types/iteractiveVideo'

interface Props {
  type: TypeIteractiveContent
  status: TypeStatusMarker
}

const Marker = ({ type, status }: Props) => {
  if (type === 'info') {
    return (
      <Component.Marker $status={status}>
        <Component.FaInfo />
      </Component.Marker>
    )
  }
  if (type === 'check') {
    return (
      <Component.Marker $status={status}>
        <Component.FaCheck />
      </Component.Marker>
    )
  }
  if (type === 'quiz') {
    return (
      <Component.Marker $status={status}>
        <Component.FaQuestion />
      </Component.Marker>
    )
  }
  if (type === 'comment') {
    return (
      <Component.Marker $status={status}>
        <Component.FaRegCommentAlt />
      </Component.Marker>
    )
  }

  return <></>
}

export default Marker

import * as Component from './styled'

interface Props {
  value: number
}

const VolumeIcon = ({ value }: Props) => {
  if (value === 0) {
    return <Component.FaVolumeMute />
  }

  if (value <= 0.5) {
    return <Component.FaVolumeDown />
  }

  return <Component.FaVolumeUp />
}

export default VolumeIcon

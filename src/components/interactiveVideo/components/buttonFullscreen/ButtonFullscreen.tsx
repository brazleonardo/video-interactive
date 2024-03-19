import * as Component from './styled'

import useButtonFullscreen from './useButtonFullscreen'

export default function ButtonFullscreen() {
  const { onToggleFullscreen, fullscreen } = useButtonFullscreen()
  return (
    <Component.ButtonIcon onClick={onToggleFullscreen}>
      <Component.When is={!fullscreen}>
        <Component.RiFullscreenFill />
      </Component.When>
      <Component.When is={fullscreen}>
        <Component.RxExitFullScreen />
      </Component.When>
    </Component.ButtonIcon>
  )
}

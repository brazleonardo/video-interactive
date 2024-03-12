import InteractiveVideoContext, {
  useInteractiveVideo,
} from '@/contexts/interactiveVideo'

import * as Component from './styled'

function InteractiveVideo() {
  const { status, onStart } = useInteractiveVideo()

  return (
    <Component.Container>
      <Component.When is={!status}>
        <Component.Start onStart={onStart} />
      </Component.When>
      <Component.When is={status === 'start'}>
        <Component.Video />
      </Component.When>
      <Component.When is={status === 'end'}>
        <Component.End />
      </Component.When>
    </Component.Container>
  )
}

const InteractiveVideoComponent = () => (
  <InteractiveVideoContext>
    <InteractiveVideo />
  </InteractiveVideoContext>
)

export default InteractiveVideoComponent

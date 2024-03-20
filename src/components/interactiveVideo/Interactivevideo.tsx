import { useInteractiveVideo } from '@/contexts/interactiveVideo'

import router from '@/constants/route'

import * as Component from './styled'

function InteractiveVideo() {
  const { status, contentInteractive, onStart } = useInteractiveVideo()

  if (!contentInteractive.urlVideo) {
    return (
      <Component.NotFoundVideo>
        <Component.Text>
          Ops! Parece que não existe vídeo cadastrado :(
        </Component.Text>
        <Component.Link to={router.register}>
          <Component.RiVideoAddFill size={18} /> Cadastre seu vídeo
        </Component.Link>
      </Component.NotFoundVideo>
    )
  }

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
      <Component.TextNotSupported>
        Você pode visualizar melhor com o aparelho virado.
      </Component.TextNotSupported>
    </Component.Container>
  )
}

export default InteractiveVideo

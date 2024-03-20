import * as Component from './styled'

interface Props {
  onStart(): void
}

const Start = ({ onStart }: Props) => (
  <Component.Container>
    <Component.Box>
      <Component.Text>
        Deixe sua aprendizagem mais simples com vídeo interativo e uma forma
        diferente de assistir seus vídeos.
      </Component.Text>
      <Component.Text>
        Você só tem que ir interagindo com o conteúdo do vídeo.
      </Component.Text>
    </Component.Box>
    <Component.Button onClick={onStart}>Iniciar</Component.Button>
    <Component.WrapButtonFullscreen>
      <Component.ButtonFullscreen />
    </Component.WrapButtonFullscreen>
  </Component.Container>
)

export default Start

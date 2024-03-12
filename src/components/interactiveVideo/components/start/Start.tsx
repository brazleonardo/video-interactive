import * as Component from './styled'

interface Props {
  onStart(): void
}

const Start = ({ onStart }: Props) => (
  <Component.Container>
    <Component.Box>
      <Component.Text>
        Torne sua aprendizagem mais simples com vídeo interativo e exclusivo.
      </Component.Text>
      <Component.Text>
        Você só tem que ir interagindo com o conteúdo do vídeo.
      </Component.Text>
    </Component.Box>
    <Component.Button onClick={onStart}>Iniciar</Component.Button>
  </Component.Container>
)

export default Start

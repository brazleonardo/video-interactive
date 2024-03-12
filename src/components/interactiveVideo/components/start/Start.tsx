import * as Component from './styled'

interface Props {
  onStart(): void
}

const Start = ({ onStart }: Props) => (
  <Component.Container>
    <Component.Box>
      <Component.Text>
        Torne seu vídeo de aprendizagem mais envolvente com este modelo
        Videogenic exclusivo.
      </Component.Text>
      <Component.Text>
        Você pode adicionar perguntas e itens informativos para que os alunos
        pensem mais, permitir que comentem e colaborem no processo de
        aprendizagem.
      </Component.Text>
    </Component.Box>
    <Component.Button onClick={onStart}>Iniciar</Component.Button>
  </Component.Container>
)

export default Start

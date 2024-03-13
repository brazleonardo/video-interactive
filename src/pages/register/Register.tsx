import * as Component from './styled'

import useRegister from './useRegister'

function Register() {
  const { urlVideo, handleChange } = useRegister()
  return (
    <Component.Container>
      <Component.Title>Cadastro de vídeo</Component.Title>
      <Component.Text>Adicione vídeo com interatividade</Component.Text>

      <Component.Form>
        <Component.ButtonUpload
          label="Anexar o vídeo"
          url={urlVideo}
          onChange={handleChange}
        />
      </Component.Form>
    </Component.Container>
  )
}

export default Register

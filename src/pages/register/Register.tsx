import * as Component from './styled'

import RegisterVideoContext from '@/contexts/registerVideo'

import useRegister from './useRegister'

function Register() {
  const { urlVideo, file, handleChange } = useRegister()
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

        <Component.When is={!!file}>
          <Component.Button type="submit">Salvar</Component.Button>
        </Component.When>
      </Component.Form>
    </Component.Container>
  )
}

const RegisterPage = () => (
  <RegisterVideoContext>
    <Register />
  </RegisterVideoContext>
)

export default RegisterPage

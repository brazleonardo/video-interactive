import * as Component from './styled'

import RegisterVideoContext from '@/contexts/registerVideo'

import useRegister from './useRegister'

function Register() {
  const {
    urlVideo,
    file,
    statuPaused,
    modal,
    handleChange,
    handleAddContentInteractive,
  } = useRegister()
  return (
    <>
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
            <Component.GroupButton>
              <Component.When is={!!statuPaused && statuPaused.time! > 10}>
                <Component.ButtonAdd
                  type="button"
                  onClick={handleAddContentInteractive}
                >
                  Adicionar conteúdo no tempo {statuPaused?.timeFormated}
                </Component.ButtonAdd>
              </Component.When>
              <Component.Button type="submit">Salvar</Component.Button>
            </Component.GroupButton>
          </Component.When>
        </Component.Form>
      </Component.Container>
      <Component.ModalContentInteractive open={modal.open} data={modal.data} />
    </>
  )
}

const RegisterPage = () => (
  <RegisterVideoContext>
    <Register />
  </RegisterVideoContext>
)

export default RegisterPage

import * as Component from './styled'

import useModalConfirm from './useModalConfirm'

const ModalConfirm = () => {
  const { confirm, onCloseConfirm, handleOnSubmit } = useModalConfirm()
  if (confirm.open) {
    return (
      <Component.Modal>
        <Component.Container>
          <Component.Header>
            <Component.Title>Confirme</Component.Title>
          </Component.Header>
          <Component.Content>
            <Component.Text>Deseja remove esse conteúdo?</Component.Text>
            <Component.TextBold>
              no tempo {confirm.statusPaused?.timeFormated}
            </Component.TextBold>
            <Component.GroupButton>
              <Component.Button type="button" onClick={onCloseConfirm}>
                Cancelar
              </Component.Button>
              <Component.Button type="button" onClick={handleOnSubmit}>
                Salvar
              </Component.Button>
            </Component.GroupButton>
          </Component.Content>
        </Component.Container>
      </Component.Modal>
    )
  }

  return <></>
}

export default ModalConfirm

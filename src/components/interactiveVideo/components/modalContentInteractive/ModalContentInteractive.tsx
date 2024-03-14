import * as Component from './styled'

import useModalContentInteractive from './useModalContentInteractive'

const ModalContentInteractive = () => {
  const { modal, onChangeType, onChange, onSubmit, onCancel } =
    useModalContentInteractive()
  if (modal.open) {
    return (
      <Component.Modal>
        <Component.Container>
          <Component.Header>
            <Component.Title>
              Adicionar conteúdo no tempo {modal.data.statuPaused?.timeFormated}
            </Component.Title>
          </Component.Header>
          <Component.Content>
            <Component.Form method="post" onSubmit={onSubmit}>
              <Component.GroupButtonRadio>
                <Component.ButtonRadio
                  $actived={modal.data.type === 'info'}
                  onClick={() => onChangeType('info')}
                >
                  Info
                </Component.ButtonRadio>
                <Component.ButtonRadio
                  $actived={modal.data.type === 'check'}
                  onClick={() => onChangeType('check')}
                >
                  Check
                </Component.ButtonRadio>
                <Component.ButtonRadio
                  $actived={modal.data.type === 'quiz'}
                  onClick={() => onChangeType('quiz')}
                >
                  Quiz
                </Component.ButtonRadio>
                <Component.ButtonRadio
                  $actived={modal.data.type === 'comment'}
                  onClick={() => onChangeType('comment')}
                >
                  Comentário
                </Component.ButtonRadio>
              </Component.GroupButtonRadio>
              <Component.FormContentType
                type={modal.data.type}
                fields={modal.data.fields}
                onChange={onChange}
              />
              <Component.GroupButton>
                <Component.Button onClick={onCancel}>Cancelar</Component.Button>
                <Component.Button type="submit">Salvar</Component.Button>
              </Component.GroupButton>
            </Component.Form>
          </Component.Content>
        </Component.Container>
      </Component.Modal>
    )
  }

  return <></>
}

export default ModalContentInteractive

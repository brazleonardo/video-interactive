import * as Component from './styled'

import useModalContentInteractive from './useModalContentInteractive'

const ModalContentInteractive = () => {
  const {
    modal,
    message,
    error,
    onChangeType,
    onChange,
    onAddResponse,
    onSubmit,
    onRemoveResponse,
    onCancel,
  } = useModalContentInteractive()
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
            <Component.Form method="POST" onSubmit={onSubmit}>
              <Component.InnerForm>
                <Component.Message
                  open={message.open}
                  title={message.title}
                  status={message?.status}
                />
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
                  error={error}
                  onChange={onChange}
                  onAddResponse={onAddResponse}
                  onRemoveResponse={onRemoveResponse}
                />
                <Component.GroupButton>
                  <Component.Button onClick={onCancel}>
                    Cancelar
                  </Component.Button>
                  <Component.Button type="submit">Salvar</Component.Button>
                </Component.GroupButton>
              </Component.InnerForm>
            </Component.Form>
          </Component.Content>
        </Component.Container>
      </Component.Modal>
    )
  }

  return <></>
}

export default ModalContentInteractive

import * as Component from './styled'

import { PropsModalContentInteractive } from '@/types/iteractiveVideo'

import useModalContentInteractive from './useModalContentInteractive'

const ModalContentInteractive = ({
  open,
  data,
}: PropsModalContentInteractive) => {
  const { onChangeType, onChange, onSubmit, onCancel } =
    useModalContentInteractive()
  if (open) {
    return (
      <Component.Modal>
        <Component.Container>
          <Component.Header>
            <Component.Title>
              Adicionar conteúdo no tempo {data?.statuPaused?.timeFormated}
            </Component.Title>
          </Component.Header>
          <Component.Content>
            <Component.Form method="post" onSubmit={onSubmit}>
              <Component.GroupButtonRadio>
                <Component.ButtonRadio
                  $actived={data!.type === 'info'}
                  onClick={() => onChangeType('info')}
                >
                  Info
                </Component.ButtonRadio>
                <Component.ButtonRadio
                  $actived={data!.type === 'check'}
                  onClick={() => onChangeType('check')}
                >
                  Check
                </Component.ButtonRadio>
                <Component.ButtonRadio
                  $actived={data!.type === 'quiz'}
                  onClick={() => onChangeType('quiz')}
                >
                  Quiz
                </Component.ButtonRadio>
                <Component.ButtonRadio
                  $actived={data!.type === 'comment'}
                  onClick={() => onChangeType('comment')}
                >
                  Comentário
                </Component.ButtonRadio>
              </Component.GroupButtonRadio>
              <Component.FormContentType
                type={data!.type}
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

import * as Component from './styled'

import { TypeIteractiveContent } from '@/types/iteractiveVideo'

interface Props {
  data: {
    open: boolean
    type: TypeIteractiveContent
  }
}

const ModalContentInteractive = ({ data }: Props) => {
  if (data.open) {
    return (
      <Component.Modal>
        <Component.Container>
          <Component.Content>
            <Component.Title>Adicionar conteúdo</Component.Title>
            <Component.Form>
              <Component.FormContentType type={data.type} />
              <Component.GroupButton>
                <Component.Button>Cancelar</Component.Button>
                <Component.Button>Salvar</Component.Button>
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

import * as Component from './styled'

import { TypeIteractiveContent } from '@/types/iteractiveVideo'

interface Props {
  type: TypeIteractiveContent
}

const FormContentType = ({ type }: Props) => {
  if (type === 'quiz') {
    return (
      <Component.Container>
        <Component.Label>Questão</Component.Label>
        <Component.TextArea placeholder="Digite sua pergunta"></Component.TextArea>
      </Component.Container>
    )
  }

  return (
    <Component.Container>
      <Component.Label>Informação</Component.Label>
      <Component.TextArea placeholder="Digite sua Informação"></Component.TextArea>
    </Component.Container>
  )
}

export default FormContentType

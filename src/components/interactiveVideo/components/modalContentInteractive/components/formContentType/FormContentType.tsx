import { ChangeEvent } from 'react'

import * as Component from './styled'

import { TypeIteractiveContent } from '@/types/iteractiveVideo'

interface Props {
  type: TypeIteractiveContent
  onChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
}

const FormContentType = ({ type, onChange }: Props) => {
  if (type === 'quiz') {
    return (
      <Component.Container>
        <Component.Label>Questão</Component.Label>
        <Component.TextArea
          name="question"
          placeholder="Digite sua pergunta"
          onChange={onChange}
        ></Component.TextArea>
      </Component.Container>
    )
  }

  return (
    <Component.Container>
      <Component.Label>Informação</Component.Label>
      <Component.TextArea
        name="question"
        placeholder="Digite sua Informação"
        onChange={onChange}
      ></Component.TextArea>
    </Component.Container>
  )
}

export default FormContentType

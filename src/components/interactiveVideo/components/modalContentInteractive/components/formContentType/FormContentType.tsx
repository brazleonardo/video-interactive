import { ChangeEvent } from 'react'

import * as Component from './styled'

import {
  TypeIteractiveContent,
  PropsModalContentInteractiveFields,
} from '@/types/iteractiveVideo'

interface Props {
  type: TypeIteractiveContent
  fields: PropsModalContentInteractiveFields
  onChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
}

const FormContentType = ({ type, fields, onChange }: Props) => {
  if (type === 'quiz') {
    return (
      <Component.Container>
        <Component.Label>Questão</Component.Label>
        <Component.TextArea
          name="question"
          placeholder="Digite sua pergunta"
          value={fields.question}
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
        value={fields.question}
        onChange={onChange}
      ></Component.TextArea>
    </Component.Container>
  )
}

export default FormContentType

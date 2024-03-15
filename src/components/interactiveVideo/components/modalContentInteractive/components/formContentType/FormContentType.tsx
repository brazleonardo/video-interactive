import { ChangeEvent } from 'react'

import * as Component from './styled'

import {
  TypeIteractiveContent,
  PropsModalContentInteractiveFields,
} from '@/types/iteractiveVideo'

interface Props {
  type: TypeIteractiveContent
  fields: PropsModalContentInteractiveFields
  onChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id?: string,
  ): void
  onAddResponse(): void
  onRemoveResponse(id: string): void
}

const FormContentType = ({
  type,
  fields,
  onChange,
  onAddResponse,
  onRemoveResponse,
}: Props) => {
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
        <Component.WrapResponses>
          <Component.Label>Respostas</Component.Label>
          {fields.answers?.map((item, index) => (
            <Component.GroupInput key={item.id}>
              <Component.LabelNumber>( {index + 1} ); </Component.LabelNumber>
              <Component.Radio name="quiz" value={item.id} />
              <Component.Input
                name={`answers_${item.id}`}
                placeholder="Digite uma resposta"
                value={item.text}
                onChange={(e) => onChange(e, item.id)}
              />
              <Component.ButtonRemove onClick={() => onRemoveResponse(item.id)}>
                <Component.MdDeleteForever />
              </Component.ButtonRemove>
            </Component.GroupInput>
          ))}
          <Component.Button type="button" onClick={onAddResponse}>
            Adicionar resposta
          </Component.Button>
        </Component.WrapResponses>
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

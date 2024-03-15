import { ChangeEvent } from 'react'

import * as Component from './styled'

import {
  TypeIteractiveContent,
  PropsModalContentInteractiveFields,
  PropsModalContentInteractiveFieldsError,
} from '@/types/iteractiveVideo'

interface Props {
  type: TypeIteractiveContent
  fields: PropsModalContentInteractiveFields
  error: PropsModalContentInteractiveFieldsError
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
  error,
  onChange,
  onAddResponse,
  onRemoveResponse,
}: Props) => {
  if (type === 'quiz') {
    return (
      <Component.Container>
        <Component.Label>Questão</Component.Label>
        <Component.TextArea
          rows={4}
          name="question"
          placeholder="Digite sua pergunta"
          value={fields.question}
          onChange={onChange}
          $error={!!error.question}
        ></Component.TextArea>
        <Component.WrapResponses $error={!!error.correctAnswer}>
          <Component.GroupLabel>
            <Component.Label>Respostas</Component.Label>
            <Component.Hint>
              Você precisa adicionar pelo menos 2 respostas
            </Component.Hint>
          </Component.GroupLabel>
          {fields.answers?.map((item, index) => (
            <Component.GroupInput key={item.id}>
              <Component.LabelNumber>( {index + 1} ) </Component.LabelNumber>
              <Component.InputRadio
                type="radio"
                name="quiz"
                value={item.id}
                checked={fields.correctAnswer === item.id}
                onChange={(e) => onChange(e, item.id)}
              />
              <Component.InputText
                type="text"
                name={`answers_${item.id}`}
                placeholder="Digite uma resposta"
                value={item.text}
                onChange={(e) => onChange(e, item.id)}
                $error={!!error.answers.find((id) => id === item.id)}
              />
              <Component.ButtonRemove
                type="button"
                onClick={() => onRemoveResponse(item.id)}
                disabled={fields.answers.length <= 2}
              >
                <Component.MdDeleteForever />
              </Component.ButtonRemove>
            </Component.GroupInput>
          ))}
          <Component.When is={fields.answers.length <= 3}>
            <Component.Button type="button" onClick={onAddResponse}>
              Adicionar resposta
            </Component.Button>
          </Component.When>
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
        $error={!!error.question}
      ></Component.TextArea>
    </Component.Container>
  )
}

export default FormContentType

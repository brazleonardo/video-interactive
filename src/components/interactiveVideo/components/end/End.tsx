import * as Component from './styled'

import useEnd from './useEnd'

const End = () => {
  const { data, onStart } = useEnd()

  return (
    <Component.Container>
      <Component.Box>
        <Component.Text>
          Parabéns! Você entendeu bem sobre o conteúdo.
        </Component.Text>
      </Component.Box>
      <Component.Cards>
        <Component.Card>
          <Component.Info>
            <Component.CardTitle>Data</Component.CardTitle>
            <Component.CardText>{data.date}</Component.CardText>
          </Component.Info>
          <Component.WrapIcon>
            <Component.FaRegCalendarAlt />
          </Component.WrapIcon>
        </Component.Card>
        <Component.Card>
          <Component.Info>
            <Component.CardTitle>Pontuação</Component.CardTitle>
            <Component.CardText>
              {data.scores}%{' '}
              <Component.TextSmall>de acerto</Component.TextSmall>
            </Component.CardText>
          </Component.Info>
          <Component.WrapIcon>
            <Component.GiPodium />
          </Component.WrapIcon>
        </Component.Card>
        <Component.When is={!!data.quiz}>
          <Component.Card>
            <Component.Info>
              <Component.CardTitle>Quiz</Component.CardTitle>
              <Component.CardText>
                {data.quiz?.questionsAnswered}/{data.quiz?.total}
              </Component.CardText>
            </Component.Info>
            <Component.WrapIcon>
              <Component.FaQuestion />
            </Component.WrapIcon>
          </Component.Card>
        </Component.When>
        <Component.When is={!!data.comment}>
          <Component.Card>
            <Component.Info>
              <Component.CardTitle>Comentários</Component.CardTitle>
              <Component.CardText>
                {data.comment?.questionsAnswered}/{data.comment?.total}
              </Component.CardText>
            </Component.Info>
            <Component.WrapIcon>
              <Component.FaRegCommentAlt />
            </Component.WrapIcon>
          </Component.Card>
        </Component.When>
        <Component.When is={!!data.check}>
          <Component.Card>
            <Component.Info>
              <Component.CardTitle>Check</Component.CardTitle>
              <Component.CardText>
                {data.check?.questionsAnswered}/{data.check?.total}
              </Component.CardText>
            </Component.Info>
            <Component.WrapIcon>
              <Component.FaCheck />
            </Component.WrapIcon>
          </Component.Card>
        </Component.When>
        <Component.When is={!!data.info}>
          <Component.Card>
            <Component.Info>
              <Component.CardTitle>Informações</Component.CardTitle>
              <Component.CardText>
                {data.info?.questionsAnswered}/{data.info?.total}
              </Component.CardText>
            </Component.Info>
            <Component.WrapIcon>
              <Component.FaInfo />
            </Component.WrapIcon>
          </Component.Card>
        </Component.When>
      </Component.Cards>
      <Component.Button onClick={onStart}>Iniciar o Vídeo</Component.Button>
    </Component.Container>
  )
}

export default End

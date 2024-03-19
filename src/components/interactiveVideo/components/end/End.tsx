import * as Component from './styled'

import useEnd from './useEnd'

const End = () => {
  const { data, onStart } = useEnd()

  return (
    <Component.Container average={data.scores}>
      <Component.Box>
        <Component.When is={data.scores >= 90}>
          <Component.Text>
            Parabéns! Você entendeu bem sobre o conteúdo.
          </Component.Text>
        </Component.When>
        <Component.When is={data.scores >= 80 && data.scores < 90}>
          <Component.Text>
            Parabéns! Você atingiu a média necessária.
          </Component.Text>
        </Component.When>
        <Component.When is={data.scores >= 50 && data.scores < 80}>
          <Component.Text>
            Ops! Você não atingiu a média necessária.
          </Component.Text>
        </Component.When>
        <Component.When is={data.scores < 50}>
          <Component.Text>
            Ops! Parece que você não entendeu o conteúdo.
          </Component.Text>
        </Component.When>
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
      <Component.WrapButtonFullscreen>
        <Component.ButtonFullscreen />
      </Component.WrapButtonFullscreen>
    </Component.Container>
  )
}

export default End

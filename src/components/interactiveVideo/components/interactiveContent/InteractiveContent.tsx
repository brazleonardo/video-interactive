import * as Component from './styled';

import { useInteractiveVideo } from '@/contexts/interactiveVideo';
import { PropsContentInteractive } from '@/types/iteractiveVideo';

interface Props {
  data: PropsContentInteractive | null;
}

const InteractiveContent = ({ data }: Props) => {
  const { onChangeResponse, onSubmit, onSubmitComment, onContinue } = useInteractiveVideo();
  
  const renderContent = () => {
    if(data?.type === 'info'){
      return (
        <Component.Content>
          <Component.GroupAnswers>
            <Component.Question>{data.content.question}</Component.Question>
           </Component.GroupAnswers>
           <Component.GroupBtn>
            <Component.Button type="button" onClick={() => onContinue(data)}>
                Continue
                <Component.FaPlay />
              </Component.Button>
            </Component.GroupBtn>
        </Component.Content>
      )
    }
    if(data?.type === 'check'){
      return (
        <Component.Content>
          <Component.GroupAnswers>
            <Component.Question>{data.content.question}</Component.Question>
           </Component.GroupAnswers>
           <Component.GroupBtn>
            <Component.Button 
              type="button" 
              onClick={() => onSubmit(data)} 
              disabled={data.status === 'answered'}>Sim</Component.Button>
            <Component.When is={data.status === 'answered'}>
              <Component.Button type="button" onClick={() => onContinue(data)}>
                Continue
                <Component.FaPlay />
              </Component.Button>
            </Component.When>
          </Component.GroupBtn>
        </Component.Content>
      )
    }
    if(data?.type === 'quiz'){
      return (
        <Component.Content>
            <Component.GroupAnswers>
              <Component.Question>{data.content.question}</Component.Question>
              <Component.Answers>
                {data.content.answers?.map((item, index) => 
                  <Component.Answer 
                    key={item} 
                    $isChecked={data.content.questionAnswer === index} 
                    $finished={data.finished}
                    $isCorrect={data.content.correctAnswer === data.content.questionAnswer}
                  >
                    <Component.Radio 
                      name="quiz" 
                      value={index} 
                      checked={data.content.questionAnswer === index} 
                      onChange={(e) => onChangeResponse(e, data.time)} 
                      disabled={data.finished}
                    />
                    {item}
                  </Component.Answer>
                )}
              </Component.Answers>
           </Component.GroupAnswers>
           <Component.GroupBtn>
            <Component.Button 
              type="button" 
              onClick={() => onSubmit(data)} 
              disabled={data.status === 'answered' || !data.content.questionAnswer}>Enviar</Component.Button>
            <Component.When is={data.status === 'answered'}>
              <Component.Button type="button" onClick={() => onContinue(data)}>
                Continue
                <Component.FaPlay />
              </Component.Button>
            </Component.When>
          </Component.GroupBtn>
        </Component.Content>
      )
    }
    if(data?.type === 'comment'){
      return (
        <Component.Content>
          <Component.GroupAnswers>
            <Component.Question>{data.content.question}</Component.Question>
            <Component.Comment value={data.content?.questionAnswer ?? ''} onChange={(e) => onChangeResponse(e, data.time)}></Component.Comment>
          </Component.GroupAnswers>
          <Component.GroupBtn>
            <Component.Button 
              type="button" 
              onClick={() => onSubmitComment(data)}
              disabled={data.status === 'answered' || !data.content.questionAnswer}>Enviar</Component.Button>
            <Component.When is={data.status === 'answered'}>
              <Component.Button type="button" onClick={() => onContinue(data)}>
                Continue
                <Component.FaPlay />
              </Component.Button>
            </Component.When>
          </Component.GroupBtn>
        </Component.Content>
      )
    }
  }

  return (
    <Component.Container>
      {renderContent()}
    </Component.Container>
  )
}
  
export default InteractiveContent;
  
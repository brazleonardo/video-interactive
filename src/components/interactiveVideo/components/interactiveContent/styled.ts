import styled from 'styled-components'
import { FaPlay } from 'react-icons/fa6'

import When from '@/components/when'
import Button from '@/components/button'

export { When, Button, FaPlay }

function colorRadioQuiz({ ...props }) {
  if (props.$isChecked && props.$finished && props.$isCorrect) {
    return props.theme.colors.quizCheckedSuccess
  }
  if (props.$isChecked && props.$finished && !props.$isCorrect) {
    return props.theme.colors.quizCheckedError
  }
  if (props.$isChecked) {
    return props.theme.colors.quizChecked
  }

  return props.theme.colors.quizCheck
}

export const Container = styled.article`
  width: 40%;
  height: calc(70vh - 50px);
  background-color: #fff;
  border: 10px solid #000;
  padding: 15px;
  transition: all 0.3s ease-in-out;
`

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`

export const Question = styled.h3`
  font-size: 18px;
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts[0]};
  line-height: 1.3;
  color: #000;
  margin-bottom: 30px;
`

export const GroupAnswers = styled.div`
  width: 100%;
  height: calc(100% - 20px);
`

export const Answers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Answer = styled.label<{
  $isChecked: boolean
  $finished: boolean
  $isCorrect: boolean
}>`
  width: auto;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  background-color: ${(props) => colorRadioQuiz(props)};
  color: #000;
  font-size: 18px;
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts[0]};
  cursor: ${(props) => (props.$finished ? 'default' : 'pointer')};
`

export const Radio = styled.input.attrs({ type: 'radio' })`
  width: 20px;
  height: 20px;
  margin-right: 15px;
`

export const Comment = styled.textarea.attrs({ rows: 10, cols: 10 })`
  width: calc(100% - 20px);
  min-height: 180px;
  max-height: 220px;
  background-color: #efefef;
  overflow-y: auto;
  resize: vertical;
  border: 1px solid #333;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  padding: 10px;
`

export const GroupBtn = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;

  button {
    max-width: 120px;
  }
`

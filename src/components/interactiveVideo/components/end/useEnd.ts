import { useMemo, useState, useCallback, useEffect } from 'react'

import { useInteractiveVideo } from '@/contexts/interactiveVideo'

import { PropDataEnd, PropsTotalScores } from '@/types/iteractiveVideo'

export default function useEnd() {
  const { contentInteractive, onStart } = useInteractiveVideo()

  const initialData = useMemo(
    () => ({
      date: null,
      scores: 0,
      quiz: null,
      comment: null,
      check: null,
      info: null,
    }),
    [],
  )

  const [data, setData] = useState<PropDataEnd>(initialData)

  const getResultQuiz = useCallback(() => {
    const result: PropsTotalScores | null = { questionsAnswered: 0, total: 0 }

    if (!contentInteractive.data.find((item) => item.type === 'quiz')) {
      return null
    }

    result.questionsAnswered =
      contentInteractive.data.filter(
        (item) =>
          item.type === 'quiz' &&
          item.status === 'answered' &&
          item.content.correctAnswer === item.content.questionAnswer,
      ).length ?? 0

    result.total =
      contentInteractive.data.filter((item) => item.type === 'quiz').length ?? 0

    return result
  }, [contentInteractive])

  const getResultComment = useCallback(() => {
    const result: PropsTotalScores | null = { questionsAnswered: 0, total: 0 }

    if (!contentInteractive.data.find((item) => item.type === 'comment')) {
      return null
    }

    result.questionsAnswered =
      contentInteractive.data.filter(
        (item) => item.type === 'comment' && item.status === 'answered',
      ).length ?? 0

    result.total =
      contentInteractive.data.filter((item) => item.type === 'comment')
        .length ?? 0

    return result
  }, [contentInteractive])

  const getResultCheck = useCallback(() => {
    const result: PropsTotalScores | null = { questionsAnswered: 0, total: 0 }

    if (!contentInteractive.data.find((item) => item.type === 'check')) {
      return null
    }

    result.questionsAnswered =
      contentInteractive.data.filter(
        (item) => item.type === 'check' && item.status === 'answered',
      ).length ?? 0

    result.total =
      contentInteractive.data.filter((item) => item.type === 'check').length ??
      0

    return result
  }, [contentInteractive])

  const getResultInfo = useCallback(() => {
    const result: PropsTotalScores | null = { questionsAnswered: 0, total: 0 }

    if (!contentInteractive.data.find((item) => item.type === 'info')) {
      return null
    }

    result.questionsAnswered =
      contentInteractive.data.filter(
        (item) => item.type === 'info' && item.status === 'answered',
      ).length ?? 0

    result.total =
      contentInteractive.data.filter((item) => item.type === 'info').length ?? 0

    return result
  }, [contentInteractive])

  useEffect(() => {
    setData((oldData) => {
      return {
        ...oldData,
        date: '11 de março de 2024',
        quiz: getResultQuiz(),
        comment: getResultComment(),
        check: getResultCheck(),
        info: getResultInfo(),
      }
    })
  }, [getResultQuiz, getResultComment, getResultCheck, getResultInfo])

  return { data, onStart }
}

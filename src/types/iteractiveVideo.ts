export type TypeStatus = null | 'start' | 'end'

export type TypeIteractiveContent = 'info' | 'check' | 'quiz' | 'comment'

export type TypeStatusMarker = 'viewed' | 'answered' | null

export type StatusPaused = {
  time: number | null
  timeFormated: string | null
}

export type TypeAnswers = {
  id: string
  text: string
}

export interface PropsPlayer {
  isPlaying: boolean
  currentTime: string
  duration: string
  progress: number
  visualizedTime: number
  isMuted: boolean
  volume: number
  fullscreen: boolean
}

export interface PropsContentInteractive {
  time: number
  type: TypeIteractiveContent
  finished: boolean
  status: TypeStatusMarker
  content: {
    question: string | null
    answers: string[] | null
    questionAnswer: string | number | null
    correctAnswer: number | null
  }
}

export interface PropsContentInteractiveData {
  data: PropsContentInteractive[]
  current: PropsContentInteractive | null
  closeContentInteractive: boolean
}

export interface PropsTotalScores {
  questionsAnswered: number
  total: number
}

export interface PropDataEnd {
  date: string | null
  scores: number
  quiz: PropsTotalScores | null
  comment: PropsTotalScores | null
  check: PropsTotalScores | null
  info: PropsTotalScores | null
}

export interface PropsVideoInteractiveRegister {
  time: number
  timeFormated: string
  type: TypeIteractiveContent
  content: {
    question: string | null
    answers: TypeAnswers[] | null
    correctAnswer: string | null
  }
}

export interface PropsVideoInteractiveRegisterData {
  file: FileList | null
  urlVideo: string
  data: PropsVideoInteractiveRegister[]
}

export interface PropsModalContentInteractiveFields {
  question: string
  answers: TypeAnswers[]
  correctAnswer?: string | null
}

export interface PropsModalContentInteractive {
  open: boolean
  data: {
    type: TypeIteractiveContent
    statusPaused: StatusPaused | null
    fields: PropsModalContentInteractiveFields
  }
}

export interface PropsModalContentInteractiveFieldsError {
  question: string
  answers: string[]
  correctAnswer: string
}

export interface PropsModalConfirm {
  open: boolean
  statusPaused: StatusPaused | null
}

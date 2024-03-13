export type TypeStatus = null | 'start' | 'end'

export type TypeIteractiveContent = 'info' | 'check' | 'quiz' | 'comment'

export type TypeStatusMarker = 'viewed' | 'answered' | null

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
  type: TypeIteractiveContent
}

export interface PropsVideoInteractiveRegisterData {
  data: PropsVideoInteractiveRegister[]
}

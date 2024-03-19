import {
  useMemo,
  useRef,
  useState,
  useCallback,
  SyntheticEvent,
  ChangeEvent,
} from 'react'

import { theme } from '@/Theme'
import { convertTimeToSeconds, formatTime } from '@/utils'

import { useRegisterVideo } from '@/contexts/registerVideo'

import { PropsPlayer } from '@/types/iteractiveVideo'

export default function useAttachment() {
  const {
    contentInteractiveRegister,
    onOpenConfirm,
    onStatusPaused,
    setModal,
  } = useRegisterVideo()

  const initialPlayer = useMemo(
    () => ({
      isPlaying: false,
      currentTime: '00:00',
      duration: 0,
      durationFormated: '00:00',
      progress: 0,
      visualizedTime: 0,
      isMuted: false,
      volume: 1,
    }),
    [],
  )

  const videoRef = useRef<HTMLVideoElement>(null)
  const sliderRef = useRef<HTMLInputElement>(null)
  const sliderVolumeRef = useRef<HTMLInputElement>(null)

  const [player, setPlayer] = useState<PropsPlayer>(initialPlayer)

  const onLoadedMetadata = useCallback(
    (event: SyntheticEvent<HTMLVideoElement>) => {
      const duration = event.currentTarget.duration
      const timeCurrent = Math.floor(videoRef.current!.currentTime)
      const progressValue = (timeCurrent / duration) * 100
      const progressVolume = (event.currentTarget.volume / 1) * 100

      if (convertTimeToSeconds(String(timeCurrent))) {
        videoRef.current!.currentTime = convertTimeToSeconds(
          String(timeCurrent),
        )
      }
      setPlayer((oldPlayer) => {
        if (videoRef.current) {
          videoRef.current.muted = false
          videoRef.current.volume = 1
        }

        return {
          ...oldPlayer,
          ...{
            duration,
            durationFormated: formatTime(Math.round(duration), 'auto'),
            visualizedTime: 0,
            currentTime: formatTime(timeCurrent, 'auto'),
            isMuted: false,
            volume: 1,
          },
        }
      })

      sliderRef.current!.style.background = `linear-gradient(to right, ${theme.colors.barVideoSlider} ${progressValue}%, ${theme.colors.secondary} ${progressValue}%)`
      sliderVolumeRef.current!.style.background = `linear-gradient(to right, ${theme.colors.barVideoSlider} ${progressVolume}%, ${theme.colors.secondary} ${progressVolume}%)`
    },
    [],
  )

  const onTimeUpdate = useCallback(() => {
    const videoElem = videoRef.current
    const timeCurrent = Math.floor(videoElem!.currentTime)
    const progressValue = (timeCurrent / videoElem!.duration) * 100

    setPlayer((oldPlayer) => ({
      ...oldPlayer,
      ...{
        progress: progressValue,
        visualizedTime:
          oldPlayer.visualizedTime > timeCurrent
            ? oldPlayer.visualizedTime
            : timeCurrent,
        currentTime: formatTime(videoElem!.currentTime, 'auto'),
      },
    }))

    onStatusPaused({
      time: timeCurrent,
      timeFormated: formatTime(timeCurrent, 'auto'),
    })

    sliderRef.current!.style.background = `linear-gradient(to right, ${theme.colors.barVideoSlider} ${progressValue}%, ${theme.colors.secondary} ${progressValue}%)`
  }, [onStatusPaused])

  const onVolumeChange = useCallback((event: ChangeEvent<HTMLVideoElement>) => {
    setPlayer((oldPlayer) => ({
      ...oldPlayer,
      ...{
        volume: event.target.muted ? 0 : event.target.volume,
        isMuted:
          event.target.muted ||
          (!event.target.muted && event.target.volume === 0),
      },
    }))
  }, [])

  const onPlay = useCallback(() => {
    setPlayer((oldPlayer) => ({ ...oldPlayer, isPlaying: true }))
  }, [])

  const onPause = useCallback(async () => {
    const videoElem = videoRef.current
    const timeCurrent = Math.floor(videoElem!.currentTime)

    onStatusPaused({
      time: timeCurrent,
      timeFormated: formatTime(timeCurrent, 'auto'),
    })

    setPlayer((oldPlayer) => ({ ...oldPlayer, isPlaying: false }))
  }, [onStatusPaused])

  const onMarkerBar = useCallback((pos: number) => {
    if (!videoRef.current) {
      return '0'
    }

    return String((pos / Number(videoRef.current.duration)) * 100)
  }, [])

  const handleTogglePlay = useCallback(() => {
    setPlayer((oldPlayer) => {
      if (oldPlayer.isPlaying) {
        videoRef.current!.pause()

        return {
          ...oldPlayer,
          isPlaying: false,
        }
      }

      videoRef.current!.play()

      return {
        ...oldPlayer,
        isPlaying: true,
      }
    })
  }, [])

  const handleChangeProgress = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      const manualChange = Number(event.target.value)

      videoRef.current!.currentTime =
        (videoRef.current!.duration / 100) * manualChange

      setPlayer((oldPlayer) => ({
        ...oldPlayer,
        progress: manualChange,
      }))
    },
    [],
  )

  const handleChangeVolume = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      const volume = parseFloat(Number(event.target.value).toString())
      const progressValue = (volume / 1) * 100

      videoRef.current!.volume = volume
      videoRef.current!.muted = true

      if (volume === 0) {
        videoRef.current!.muted = true
        setPlayer((oldPlayer) => ({
          ...oldPlayer,
          ...{
            volume,
            isMuted: volume <= 0,
          },
        }))

        return
      }

      videoRef.current!.muted = false

      setPlayer((oldPlayer) => ({
        ...oldPlayer,
        ...{
          volume,
          isMuted: false,
        },
      }))

      sliderVolumeRef.current!.style.background = `linear-gradient(to right, ${theme.colors.barVideoSlider} ${progressValue}%, ${theme.colors.secondary} ${progressValue}%)`
    },
    [],
  )

  const handleOpenModalContent = useCallback(
    (time: number) => {
      const values = contentInteractiveRegister.data.find(
        (item) => item.time === time,
      )
      console.log(values)

      setModal((oldModal) => ({
        ...oldModal,
        open: true,
        data: {
          type: values!.type,
          statusPaused: {
            time: values!.time,
            timeFormated: values!.timeFormated,
          },
          fields: {
            question: values?.content.question ?? '',
            answers: values?.content.answers ?? [],
            correctAnswer: values?.content.correctAnswer ?? null,
          },
        },
      }))
    },
    [contentInteractiveRegister, setModal],
  )

  const handleOpenModalConfirm = useCallback(
    (time: number) => {
      onOpenConfirm({
        time,
        timeFormated: formatTime(time, 'auto'),
      })
    },
    [onOpenConfirm],
  )

  return {
    videoRef,
    sliderRef,
    sliderVolumeRef,
    player,
    contentInteractiveRegister,
    onLoadedMetadata,
    onTimeUpdate,
    onVolumeChange,
    onPlay,
    onPause,
    onMarkerBar,
    handleTogglePlay,
    handleChangeProgress,
    handleChangeVolume,
    handleOpenModalContent,
    handleOpenModalConfirm,
  }
}

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

import { useInteractiveVideo } from '@/contexts/interactiveVideo'

import { PropsPlayer, PropsContentInteractive } from '@/types/iteractiveVideo'

export default function useVideo() {
  const { contentInteractive, setContentInteractive, onEnd } =
    useInteractiveVideo()

  const initialPlayer = useMemo(
    () => ({
      isPlaying: false,
      currentTime: '00:00',
      duration: '00:00',
      progress: 0,
      visualizedTime: 0,
      isMuted: false,
      volume: 1,
      fullscreen: false,
    }),
    [],
  )

  const time = '00:00'

  const videoRef = useRef<HTMLVideoElement>(null)
  const sliderRef = useRef<HTMLInputElement>(null)

  const [player, setPlayer] = useState<PropsPlayer>(initialPlayer)

  const onLoadedMetadata = useCallback(
    (event: SyntheticEvent<HTMLVideoElement>) => {
      const duration = event.currentTarget.duration

      if (convertTimeToSeconds(time)) {
        videoRef.current!.currentTime = convertTimeToSeconds(time)
      }
      setPlayer((oldPlayer) => {
        if (videoRef.current) {
          videoRef.current.muted = false
          videoRef.current.volume = 1
        }

        return {
          ...oldPlayer,
          ...{
            duration: formatTime(Math.round(duration), 'auto'),
            visualizedTime: 0,
            currentTime: time,
            isMuted: false,
            volume: 1,
          },
        }
      })
    },
    [time],
  )

  const compareTimeCurrent = useCallback(
    (timeCurrent: number, time: number) =>
      timeCurrent >= time && timeCurrent <= time + 15,
    [],
  )

  const updateStateContentInteractive = useCallback(
    (timeCurrent: number) => {
      let hasIteractive = true
      setContentInteractive((oldContentInteractive) => {
        if (oldContentInteractive.closeContentInteractive) {
          hasIteractive = false
        }
        if (hasIteractive) {
          oldContentInteractive.data.map((item) => {
            if (compareTimeCurrent(timeCurrent, item.time)) {
              item.status = item?.status ?? 'viewed'
            }
            return item
          })
          oldContentInteractive.current = oldContentInteractive.data.find(
            (item) => compareTimeCurrent(timeCurrent, item.time),
          ) as PropsContentInteractive

          hasIteractive = true
        }
        if (
          !hasIteractive &&
          !oldContentInteractive.data.find((item) =>
            compareTimeCurrent(timeCurrent, item.time),
          )
        ) {
          oldContentInteractive.closeContentInteractive = false
        }

        return {
          ...oldContentInteractive,
        }
      })
    },
    [setContentInteractive, compareTimeCurrent],
  )

  const onTimeUpdate = useCallback(() => {
    const videoElem = videoRef.current
    const timeCurrent = Math.floor(videoElem!.currentTime)
    const progressValue = (timeCurrent / videoElem!.duration) * 100

    updateStateContentInteractive(timeCurrent)

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

    sliderRef.current!.style.background = `linear-gradient(to right, ${theme.colors.barVideoSlider} ${progressValue}%, ${theme.colors.secondary} ${progressValue}%)`
  }, [updateStateContentInteractive])

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
    setPlayer((oldPlayer) => ({ ...oldPlayer, isPlaying: false }))
  }, [])

  const onMarkerBar = useCallback((pos: number) => {
    if (!videoRef.current) {
      return '0'
    }

    return String((pos / Number(videoRef.current.duration)) * 100)
  }, [])

  const onEnded = useCallback(() => {
    onEnd()
  }, [onEnd])

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

      if (videoRef.current?.paused) {
        return
      }

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
    },
    [],
  )

  return {
    videoRef,
    sliderRef,
    player,
    contentInteractive,
    onLoadedMetadata,
    onTimeUpdate,
    onVolumeChange,
    onPlay,
    onPause,
    onEnded,
    onMarkerBar,
    handleTogglePlay,
    handleChangeProgress,
    handleChangeVolume,
  }
}

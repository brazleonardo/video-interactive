import { useContext, createContext, useMemo, useState } from 'react'
import fscreen from 'fscreen'

interface Props {
  fullscreen: boolean
  onToggleFullscreen(): void
  onExitFullscreen(): void
}

export const ThemeContext = createContext({} as Props)

export function useTheme() {
  const context = useContext(ThemeContext)
  return context
}

export function useThemeProvider() {
  const [fullscreen, setFullscreen] = useState(false)

  const onToggleFullscreen = () => {
    setFullscreen((oldFullscreen) => {
      if (oldFullscreen) {
        fscreen.exitFullscreen()
      }
      fscreen.requestFullscreen(document.documentElement)

      return !oldFullscreen
    })
  }

  const onExitFullscreen = () => {
    fscreen.exitFullscreen()
    setFullscreen(false)
  }

  fscreen.onfullscreenchange = () => {
    if (!fscreen.fullscreenElement) {
      setFullscreen(false)
    }
  }

  const values = useMemo(
    () => ({
      fullscreen,
      onToggleFullscreen,
      onExitFullscreen,
    }),
    [fullscreen],
  )

  return { values }
}

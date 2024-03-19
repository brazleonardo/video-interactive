import { useTheme } from '@/contexts/theme'

export default function useButtonFullscreen() {
  const { fullscreen, onToggleFullscreen } = useTheme()
  return { fullscreen, onToggleFullscreen }
}

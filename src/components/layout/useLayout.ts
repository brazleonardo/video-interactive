import { useTheme } from '@/contexts/theme'

export default function useLayout() {
  const { fullscreen } = useTheme()

  return {
    fullscreen,
  }
}

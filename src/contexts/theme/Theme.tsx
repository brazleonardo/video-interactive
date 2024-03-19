import { ReactNode } from 'react'
import { useThemeProvider, ThemeContext } from './useTheme'

interface Props {
  children?: ReactNode
}

const ThemeProvider = ({ children }: Props) => {
  const { values } = useThemeProvider()

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider

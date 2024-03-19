import { ReactNode } from 'react'

import ThemeProvider from '@/contexts/theme'
import InteractiveVideoProvider from '@/contexts/interactiveVideo'

interface Props {
  children: ReactNode
}

const MainProvider = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <InteractiveVideoProvider>{children}</InteractiveVideoProvider>
    </ThemeProvider>
  )
}

export default MainProvider

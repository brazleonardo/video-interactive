import { RouterProvider } from 'react-router-dom'

import Router from '@/router'
import MainProvider from '@/contexts/main'
import GlobalTheme from '@/Theme'

function App() {
  return (
    <GlobalTheme>
      <MainProvider>
        <RouterProvider router={Router} />
      </MainProvider>
    </GlobalTheme>
  )
}

export default App

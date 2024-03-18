import { RouterProvider } from 'react-router-dom'
import InteractiveVideoProvider from '@/contexts/interactiveVideo'
import Theme from '@/Theme'
import Router from '@/router'

function App() {
  return (
    <Theme>
      <InteractiveVideoProvider>
        <RouterProvider router={Router} />
      </InteractiveVideoProvider>
    </Theme>
  )
}

export default App

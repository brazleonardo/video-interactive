import { RouterProvider } from 'react-router-dom'
import Theme from '@/Theme'
import Router from '@/router'

function App() {
  return (
    <Theme>
      <RouterProvider router={Router} />
    </Theme>
  )
}

export default App

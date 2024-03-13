import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'

import Home from '@/pages/home'
import Register from '@/pages/register'

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </>,
  ),
)

export default Router

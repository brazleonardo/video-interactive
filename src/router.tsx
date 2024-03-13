import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'

import Home from '@/pages/home'

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </>,
  ),
)

export default Router

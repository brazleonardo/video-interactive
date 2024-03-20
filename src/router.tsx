import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import Layout from '@/components/layout'
import Home from '@/pages/home'
import Register from '@/pages/register'

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="register" element={<Register />} />
    </Route>,
  ),
)

export default Router

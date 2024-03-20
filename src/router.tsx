import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import router from '@/constants/route'

import Layout from '@/components/layout'
import Home from '@/pages/home'
import Register from '@/pages/register'

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={router.initial} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={router.register} element={<Register />} />
    </Route>,
  ),
)

export default Router

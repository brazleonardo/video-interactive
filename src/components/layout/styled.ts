import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

import Navbar from '@/components/navbar'

export { Outlet, Navbar }

interface PropsMain {
  $fullscreen: boolean
}

export const Main = styled.div.attrs<PropsMain>((props) => ({
  className: props.$fullscreen ? 'main main--fullscreen' : 'main',
}))`
  width: 100%;
  min-height: calc(100vh - var(--navbarHeight));
  padding-top: var(--navbarHeight);
`

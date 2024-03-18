import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

import Navbar from '@/components/navbar'

export { Outlet, Navbar }

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0 15px;
  display: flex;
  align-items: center;
`

import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { darken } from '@/utils'

interface PropsLink {
  $actived?: boolean
}

export const Container = styled.div`
  width: 100%;
  height: var(--navbarHeight);
  background-color: ${(props) => props.theme.colors.primary};
  position: fixed;
  display: flex;
`

export const Inner = styled.div`
  width: 100%;
  max-width: var(--containerWidth);
  height: 100%;
  display: flex;
  align-items: center;
  margin: auto;
`

export const ItemLink = styled(Link)<PropsLink>`
  height: 100%;
  font-size: 0.9rem;
  font-weight: bold;
  background-color: ${(props) =>
    props.$actived ? darken(props.theme.colors.primary, 20) : 'transparent'};
  color: ${(props) => props.theme.colors.textPrimaryContrast};
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  transition: all 0.4s ease-in-out;
`

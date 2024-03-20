import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MdOutlineOndemandVideo } from 'react-icons/md'
import { FaHome } from 'react-icons/fa'
import { RiVideoAddFill } from 'react-icons/ri'

import { darken } from '@/utils'

export { MdOutlineOndemandVideo, FaHome, RiVideoAddFill }

interface PropsLink {
  $actived?: boolean
}

export const Container = styled.nav`
  width: 100%;
  height: var(--navbarHeight);
  background-color: ${(props) => props.theme.colors.primary};
  position: fixed;
  top: 0;
  display: flex;
  z-index: 100;
`

export const Inner = styled.div`
  width: 100%;
  max-width: var(--containerWidth);
  height: 100%;
  display: flex;
  align-items: center;
  margin: auto;

  @media (max-width: 540px) {
    max-width: calc(100% - 30px);
  }
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
  gap: 0.5rem;
  padding: 0 1.5rem;
  transition: all 0.4s ease-in-out;

  @media (max-width: 460px) {
    font-size: 0.8rem;
    padding: 0 1rem;
  }

  &[aria-disabled='true'] {
    cursor: default;
  }

  &[aria-disabled='false']:hover {
    opacity: 0.7;
  }
`

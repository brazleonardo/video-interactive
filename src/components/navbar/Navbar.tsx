import * as Component from './styled'

import useNavbar from './useNavbar'

export default function Navbar() {
  const { pathname } = useNavbar()
  return (
    <Component.Container>
      <Component.Inner>
        <Component.ItemLink to="/" aria-disabled={pathname === '/'}>
          <Component.MdOutlineOndemandVideo size={32} />
        </Component.ItemLink>
        <Component.ItemLink
          to="/"
          $actived={pathname === '/'}
          aria-disabled={pathname === '/'}
        >
          <Component.FaHome size={18} />
          Home
        </Component.ItemLink>
        <Component.ItemLink
          to="/register"
          $actived={pathname === '/register'}
          aria-disabled={pathname === '/register'}
        >
          <Component.RiVideoAddFill size={18} />
          Cadastro de vídeo
        </Component.ItemLink>
      </Component.Inner>
    </Component.Container>
  )
}

import * as Component from './styled'

import useNavbar from './useNavbar'

export default function Navbar() {
  const { pathname } = useNavbar()
  return (
    <Component.Container>
      <Component.Inner>
        <Component.ItemLink $actived={pathname === '/'} to="/">
          Home
        </Component.ItemLink>
        <Component.ItemLink $actived={pathname === '/register'} to="/register">
          Cadastro de vídeo
        </Component.ItemLink>
      </Component.Inner>
    </Component.Container>
  )
}

import * as Component from './styled'

import router from '@/constants/route'

import useNavbar from './useNavbar'

export default function Navbar() {
  const { pathname } = useNavbar()
  return (
    <Component.Container>
      <Component.Inner>
        <Component.ItemLink
          to={router.initial}
          aria-disabled={pathname === router.initial}
        >
          <Component.MdOutlineOndemandVideo size={32} />
        </Component.ItemLink>
        <Component.ItemLink
          to={router.initial}
          $actived={pathname === router.initial}
          aria-disabled={pathname === router.initial}
        >
          <Component.FaHome size={18} />
          Home
        </Component.ItemLink>
        <Component.ItemLink
          to={router.register}
          $actived={pathname === router.register}
          aria-disabled={pathname === router.register}
        >
          <Component.RiVideoAddFill size={18} />
          Cadastro de vídeo
        </Component.ItemLink>
      </Component.Inner>
    </Component.Container>
  )
}

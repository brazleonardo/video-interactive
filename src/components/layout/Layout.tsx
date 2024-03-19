import * as Component from './styled'

import useLayout from './useLayout'

export default function Layout() {
  const { fullscreen } = useLayout()
  return (
    <Component.Main $fullscreen={fullscreen}>
      <Component.Navbar />
      <Component.Outlet />
    </Component.Main>
  )
}

import * as Component from './styled'

export default function Layout() {
  return (
    <>
      <Component.Navbar />
      <Component.Outlet />
    </>
  )
}

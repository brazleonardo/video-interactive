import * as Component from './styled'

export default function Layout() {
  return (
    <Component.Theme>
      <Component.InteractiveVideoProvider>
        <Component.Navbar />
        <Component.Outlet />
      </Component.InteractiveVideoProvider>
    </Component.Theme>
  )
}

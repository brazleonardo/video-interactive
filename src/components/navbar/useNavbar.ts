import { useLocation } from 'react-router-dom'

export default function useNavbar() {
  const { pathname } = useLocation()

  return { pathname }
}

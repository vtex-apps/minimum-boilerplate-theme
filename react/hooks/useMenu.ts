import { useContext } from 'react'
import { MenuContext } from '../components/Menu/context'

export const useMenu = () => {
  const departments = useContext(MenuContext)

  return { departments }
}

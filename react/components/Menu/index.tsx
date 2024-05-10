// Dependencies
import React from 'react'

// Components
// @ts-ignore
import { useRuntime } from 'vtex.render-runtime'

// Hooks
import MenuMobile from './components/MenuMobile'
import MenuDesktop from './components/MenuDesktop'

// Schema
import { MENU_SCHEMA } from './schema'
import { MenuProvider } from './context'

// Types
import { MenuRoot } from './typing'

interface MenuProps {
  departments: MenuRoot
}

const Menu = ({ departments }: MenuProps) => {
  const {
    deviceInfo: { isMobile },
  } = useRuntime()

  return (
    <MenuProvider value={departments}>
      {isMobile ? <MenuMobile /> : <MenuDesktop />}
    </MenuProvider>
  )
}

Menu.schema = MENU_SCHEMA

export default Menu

// Dependencies
import React from 'react'

// Components
import MenuContent from './components/MenuContent'

// Schema
import { MENU_SCHEMA } from './schema'
import { MenuProvider } from './context'

// Types
import type { MenuRoot } from './typing'

interface MenuProps {
  departments: MenuRoot
  staticLink: any
}

const Menu = ({ departments, staticLink }: MenuProps) => {
  return (
    <MenuProvider value={departments}>
      <MenuContent staticLink={staticLink} />
    </MenuProvider>
  )
}

Menu.schema = MENU_SCHEMA

export default Menu

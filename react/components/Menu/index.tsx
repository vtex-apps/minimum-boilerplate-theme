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
}

const Menu = ({ departments }: MenuProps) => {
  return (
    <MenuProvider value={departments}>
      <MenuContent />
    </MenuProvider>
  )
}

Menu.schema = MENU_SCHEMA

export default Menu

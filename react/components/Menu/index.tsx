// Dependencies
import React from 'react'

// Components
import MenuContent from './components/MenuContent'

// Schema
import { MENU_SCHEMA } from './schema'
import { MenuProvider } from './context'

// Types
import type { MenuRoot } from './typing'
import type { ReactNode } from 'react'

interface MenuProps {
  departments: MenuRoot
  children: ReactNode
  staticLink: any
}

const Menu = ({ departments, children, staticLink }: MenuProps) => {
  return (
    <MenuProvider value={departments}>
      <MenuContent staticLink={staticLink}>{children}</MenuContent>
    </MenuProvider>
  )
}

Menu.schema = MENU_SCHEMA

export default Menu

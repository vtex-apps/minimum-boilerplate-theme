// Dependencies
import React, { createContext } from 'react'

// Types
import type { FC, ReactNode } from 'react'
import type { MenuRoot } from '../typing'

interface MenuContextProps {
  children: ReactNode
  value: MenuRoot
}

const MenuContext = createContext<Partial<MenuRoot>>({})

const MenuProvider: FC<MenuContextProps> = ({ children, value }) => {
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

export { MenuContext, MenuProvider }

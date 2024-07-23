export interface MenuRoot {
  departments: MenuDepartment[]
}

export interface MenuDepartment {
  departmentImageDesktop: MenuImage
  departmentThumbImageMobile: MenuImage
  departmentImageMobile: MenuImage
  __editorItemTitle: string
  name: string
  link: string
  categories?: MenuCategory[]
}

export interface MenuImage {
  src?: string
}

export interface MenuCategory {
  __editorItemTitle: string
  name: string
  link: string
}

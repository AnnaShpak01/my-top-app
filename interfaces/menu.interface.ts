//import { TopLevelCategory } from './page.interface'

export interface MenuItem {
  first: {
    route: string
    name: string
    icon: string
    id: string
  }
  under: UnderItem[]
}

export interface UnderItem {
  _id: { secondCategory: string }
  pages: PageMenuInterface[]
}

export interface PageMenuInterface {
  alias: string
  title: string
  _id: string
  category: string
}

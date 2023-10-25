import data from '../public/data/menu.json'

export function getMenu(firstCategory: number) {
  return Promise.resolve(data.menu)
}

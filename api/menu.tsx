import data from '../app/(site)/data/menu.json'

export function getMenu(firstCategory: number) {
  return Promise.resolve(data.menu)
}

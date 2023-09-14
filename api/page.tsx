import { API } from '@/app/api'
import { MenuItem } from '@/interfaces/menu.interface'
import { TopPageModel } from '@/interfaces/page.interface'

export async function getPage(alias: string): Promise<TopPageModel | null> {
  const res = await fetch(API.topPage.byAlias + alias, {
    next: { revalidate: 10 },
  })
  console.log('revalidating getPage')
  if (!res.ok) {
    return null
  }
  return res.json()
}

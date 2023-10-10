'use client'
//import { getMenu } from '@/api/menu';
//import { getPage } from '@/api/page'
import { TopLevelCategory } from '@/interfaces/page.interface'
import { Metadata } from 'next'
import { notFound, usePathname } from 'next/navigation'
import data from '../../../data/data.json'

export const metadata: Metadata = {
  title: 'Страница',
}

// export async function generateStaticParams() {
// 	const menu = await getMenu(0);
// 	return menu.flatMap(item => item.pages.map(page => ({ alias: page.alias })));
// }

export default function PageProducts() {
  const pages = data.pages
  const pathname = usePathname()
  const alias = pathname.split('/')
  const page = pages.filter((p) => p.alias == alias[alias.length - 1])[0]
  if (!page) {
    notFound()
  }
  return (
    <>
      <div>{page.title}</div>
      <div>{page.description}</div>
    </>
  )
}

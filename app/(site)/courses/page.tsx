import { getMenu } from '@/api/menu'
import { getPage } from '@/api/page'
import { TopLevelCategory } from '@/interfaces/page.interface'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Page',
}

export async function generateStaticParams() {
  const menu = await getMenu(0)
  return menu.flatMap((item) => item.pages.map((page) => ({ alias: page.alias })))
}

export default async function PageCourses({ params }: { params: { alias: string } }) {
  return <div>Courses</div>
}

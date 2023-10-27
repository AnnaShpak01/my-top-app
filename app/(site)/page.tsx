import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next'
import { getMenu } from '@/api/menu'
import Link from 'next/link'
// import { Menu } from './components/Menu/Menu'
// import { Sidebar } from './components/Sidebar/Sidebar'
// import data from '../data/data.json'

// export const metadata: Metadata = {
// 	title: 'Исправленные данные',
// }

export async function generateMetadata(): Promise<Metadata> {
  // ...
  return {
    title: 'ComputedMeta',
  }
}

// const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
// 	firstCategory: 0
// });

export default async function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Welcome to our website!</h1>
        <div>With us you can improve your skills by reading our courses and books</div>

        <div className={styles.links}>
          <Link href={`/courses/`} key="courses" className={styles.linked}>
            Courses
          </Link>
          <Link href={`/books/`} key="books" className={styles.linked}>
            Books
          </Link>
        </div>
      </div>
    </main>
  )
}

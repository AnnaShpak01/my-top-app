import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next'
import { withLayout } from './layout'
import { Menu } from './components/menu'

// export const metadata: Metadata = {
// 	title: 'Исправленные данные',
// }

export async function generateMetadata(): Promise<Metadata> {
  // ...
  return {
    title: 'ComputedMeta',
  }
}

export async function Home() {
  return (
    <main className={styles.main}>
      Main Page
      <Menu />
    </main>
  )
}

export default withLayout(Home)

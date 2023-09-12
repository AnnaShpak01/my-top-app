import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next'
import Logo from '../public/vercel.svg'
import { withLayout } from './layout'

// export const metadata: Metadata = {
// 	title: 'Исправленные данные',
// }

export async function generateMetadata(): Promise<Metadata> {
  // ...
  return {
    title: 'ComputedMeta',
  }
}

export function Home() {
  return <main className={styles.main}>Main page</main>
}

export default withLayout(Home)

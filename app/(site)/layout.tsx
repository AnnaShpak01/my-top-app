import { Metadata } from 'next'
import styles from './page.module.css'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Наш проект',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href={'/'}>Main</Link>
            </li>
            <li>Courses</li>
            <li>For Children</li>
            <li>
              <Link href={'/about'}>About us</Link>
            </li>
            <li>
              <a href={'/products/typescript'}>Product 1</a>
            </li>
            <li>
              <Link href={'/aboutsdfsdf'}>About us 3</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}

// title: 'Наш проект'
// title: 'Исправленные данные',

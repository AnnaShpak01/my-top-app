import './globals.css'
import type { Metadata } from 'next'
import styles from './page.module.css'
import { Open_Sans, Noto_Sans_KR } from 'next/font/google'
import Link from 'next/link'
import Script from 'next/script'

const inter = Open_Sans({ subsets: ['latin'] })
const notosans = Noto_Sans_KR({weight: ['300', '400', '500', '700' ], display: 'swap', subsets: ['latin']   })

export const metadata: Metadata = {
  title: 'My top-app project',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notosans.className}>{children}</body>
    </html>
  )
}
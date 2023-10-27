'use client'

import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.css'
import Logo from '../../../../public/images/logo.svg'
import Menu from '../Menu/Menu'
import Link from 'next/link'

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      <Link href={'/'}>
        <Logo className={styles.logo} />
      </Link>
      <Menu />
    </div>
  )
}

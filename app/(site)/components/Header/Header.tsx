'use client'

import { HeaderProps } from './Header.props'
import styles from './Header.module.css'
import Logo from '../../../../public/images/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import menuData from '../../../../public/data/menu.json'
import { usePathname } from 'next/navigation'

import cn from 'classnames'

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  const pathname = usePathname()

  return (
    <div className={styles.header}>
      <Link href={'/'}>
        <Logo className={styles.logo} />
      </Link>
      {menuData.menu.map((menuItem, index) => (
        <div key={index} className={styles.headerrow}>
          <Link href={`/${menuItem.first.route}`} className={styles.firstLevel}>
            <Image src={menuItem.first.icon} alt={menuItem.first.name} width={24} height={24} />
            <div
              className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: pathname?.startsWith(`/${menuItem.first.route}`),
              })}>
              {menuItem.first.name}
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

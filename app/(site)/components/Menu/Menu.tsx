'use client'
import styles from './Menu.module.css'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import menuData from '../../../../public/data/menu.json'
import { usePathname } from 'next/navigation'

export default function Menu() {
  const pathname = usePathname()

  return (
    <>
      {menuData.menu.map((menuItem, index) => (
        <div key={index}>
          <Link href={`/${menuItem.first.route}`} className={styles.firstLevel}>
            <Image src={menuItem.first.icon} alt={menuItem.first.name} width={24} height={24} />
            <div
              className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: pathname?.startsWith(`/${menuItem.first.route}`),
              })}>
              {menuItem.first.name}
            </div>
          </Link>
          {menuItem.under.length > 0 && pathname?.startsWith(`/${menuItem.first.route}`) && (
            <div className={styles.secondBlock}>
              {menuItem.under.map((secondCategoryItem, secondCategoryIndex) => (
                <div key={secondCategoryIndex}>
                  <div className={styles.secondLevel}>{secondCategoryItem._id.secondCategory}</div>
                  {secondCategoryItem.pages.length > 0 && (
                    <div className={cn(styles.thirdLevelGroup)}>
                      {secondCategoryItem.pages.map((pageItem, pageIndex) => (
                        <div key={pageIndex}>
                          <Link
                            href={`/${menuItem.first.route}/${pageItem.alias}`}
                            className={cn(styles.thirdLevel, {
                              [styles.thirdLevelActive]: pathname.startsWith(
                                `/${menuItem.first.route}/${pageItem.alias}`
                              ),
                            })}>
                            {pageItem.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  )
}

'use client'

import styles from './Menu.module.css'
import cn from 'classnames'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../context/app.сontext'
import { FirstLevelMenuItem, PageItem } from '../../../../interfaces/menu.interface'
import CoursesIcon from './icons/courses.svg'
import ServicesIcon from './icons/services.svg'
import BooksIcon from './icons/books.svg'
import ProductsIcon from './icons/products.svg'
import { TopLevelCategory } from '../../../../interfaces/page.interface'
import { firstLevelMenu } from '../../helpers/helpers'
import Link from 'next/link'

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext)

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menu) => (
          <div key={menu.route}>
            <Link href={`/${menu.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: menu.id == firstCategory,
                })}>
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </Link>
            {menu.id == firstCategory && buildSecondLevel(menu)}
          </div>
        ))}
      </>
    )
  }

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}>
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    )
  }

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p, i) => (
      <Link href={`/${route}/${p.alias}`} key={i}>
        <div
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: false,
          })}>
          {p.category}
        </div>
      </Link>
    ))
  }

  return <div className={styles.menu}>{buildFirstLevel()}</div>
}

'use client'
import styles from './Menu.module.css'
import cn from 'classnames'
//import { useContext } from 'react'
//import { AppContext } from '../../context/app.сontext'
//import { FirstLevelMenuItem, MenuItem, PageItem } from '../../../../interfaces/menu.interface'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
//import { firstLevelMenu } from '../../helpers/helpers'
//import { getMenu } from '@/api/menu'
import menuData from '../../../data/menu.json'
import { useState } from 'react'

export default function Menu() {
  const menu = menuData.menu
  const pathThird = usePathname().split('/')
  const [activeFirstLevel, setActiveFirstLevel] = useState('courses')
  const [activeThirdLevel, setActiveThirdLevel] = useState(pathThird[pathThird.length - 1])

  return (
    <>
      {menu.map((menuItem, index) => (
        <div key={index}>
          <Link href={`/${menuItem.first.route}`}>
            <div
              className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: menuItem.first.route === activeFirstLevel,
              })}
              onClick={() => {
                setActiveFirstLevel(menuItem.first.route)
                setActiveThirdLevel('')
              }}>
              {menuItem.first.name}
            </div>
          </Link>
          {menuItem.under.length > 0 && menuItem.first.route === activeFirstLevel && (
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
                              [styles.thirdLevelActive]: pageItem.alias === activeThirdLevel,
                            })}
                            onClick={() => setActiveThirdLevel(pageItem.alias)}>
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

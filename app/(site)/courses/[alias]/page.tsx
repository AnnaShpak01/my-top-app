'use client'
import styles from '../courses.module.css'
//import { getMenu } from '@/api/menu';
//import { getPage } from '@/api/page'
import { TopLevelCategory } from '@/interfaces/page.interface'
import { Metadata } from 'next'
import { notFound, usePathname } from 'next/navigation'
import data from '../../data/data.json'
import Image from 'next/image'
import CheckIcon from '../check.svg'
import { Rating } from '../../components/Rating/Rating'
import { P } from '@/app/components/P/P'
export const metadata: Metadata = {
  title: 'Страница',
}

export default function PageProducts() {
  const pages = data.pages
  const pathname = usePathname()
  const alias = pathname.split('/')
  const page = pages.filter((p) => p.alias == alias[alias.length - 1])[0]
  if (!page) {
    notFound()
  }
  return (
    <>
      <div className={styles.wrappercontainer}>
        <div className={styles.wrappertop}>
          <div className={styles.logo}>
            <Image src={page.image} alt={page.alias} width={120} height={120} />
          </div>
          <div className={styles.title}>{page.title}</div>
          <div className={styles.description}>{page.description}</div>
          <div className={styles.rating}>
            <div className={styles.labelrating}>Rating:</div>
            <Rating rating={page.initialRating} />
          </div>
          <div className={styles.price}>
            <div className={styles.labeltop}>Price:</div>
            <span>{page.price} $</span>
          </div>
        </div>
        <div className={styles.learn}>
          <div className={styles.labeltop}>What you will learn:</div>
          <ul className={styles.points}>
            {page.learn.map((point, index) => (
              <li className={styles.point} key={index}>
                <CheckIcon className={styles.check} />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.requirements}>
          <div className={styles.labeltop}>Main requirements:</div>
          <ul>
            {page.requirements.map((req, index) => (
              <li className={styles.req} key={index}>
                {req}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.about}>
          <div className={styles.labeltop}>Description:</div>
          {page.about.map((ab, index) => (
            <P className={styles.ab} key={index}>
              {ab}
            </P>
          ))}
        </div>
      </div>
    </>
  )
}

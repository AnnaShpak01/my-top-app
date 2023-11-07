'use client'
import styles from '../courses.module.css'
import { Metadata } from 'next'
import { notFound, usePathname } from 'next/navigation'
import data from '../../../../public/data/data.json'
import Image from 'next/image'
import CheckIcon from '../check.svg'
import Rating from '../../components/Rating/Rating'
import { P } from '@/app/(site)/components/P/P'
import { Review } from '../../components/Review/Review'
import { ReviewForm } from '../../components/ReviewForm/ReviewForm'
import { useState } from 'react'
import { Button } from '../../components/Button/Button'
import { Card } from '../../components/Card/Card'
import { motion } from 'framer-motion'
import { Divider } from '../../components/Divider/Divider'

export const metadata: Metadata = {
  title: 'Courses',
}

const PageCourses = () => {
  const pages = data.pages
  const pathname = usePathname()
  const alias = pathname ? pathname.split('/') : []
  const page = pages.filter((p) => p.alias == alias[alias.length - 1])[0]
  if (!page) {
    notFound()
  }

  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false)

  const variants = {
    visible: { opacity: 1, height: 'auto' },
    hidden: { opacity: 0, height: 0 },
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

        <div className={styles.actions}>
          <Button
            appearance="ghost"
            arrow={isReviewOpened ? 'down' : 'right'}
            className={styles.reviewButton}
            onClick={() => setIsReviewOpened(!isReviewOpened)}
            aria-expanded={isReviewOpened}>
            Read reviews
          </Button>
        </div>
        {isReviewOpened && (
          <motion.div
            animate={isReviewOpened ? 'visible' : 'hidden'}
            variants={variants}
            initial="hidden">
            <Card color="blue" className={styles.reviews} tabIndex={isReviewOpened ? 0 : -1}>
              {' '}
              {page.reviews.map((r, i) => (
                <div key={i}>
                  <Review review={r} />
                  <Divider />
                </div>
              ))}
              <ReviewForm
                productId={page.alias}
                isOpened={isReviewOpened}
                setIsReviewOpened={setIsReviewOpened}
              />
            </Card>
          </motion.div>
        )}
      </div>
    </>
  )
}

export default PageCourses

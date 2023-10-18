'use client'
import React, { useEffect, useReducer } from 'react'
import { Metadata } from 'next'
import data from '../data/data.json'
import Image from 'next/image'
import { Rating } from '../components/Rating/Rating'
import styles from './courses.module.css'
import { Sort } from '../components/Sort/Sort'
import { SortEnum } from '../components/Sort/Sort.props'
import { sortReducer } from './sort.reducer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
}

export default function Courses(): JSX.Element {
  const pages = data.pages
  const [{ pages: sortedPages, sort }, dispatchSort] = useReducer(sortReducer, {
    pages,
    sort: SortEnum.Rating,
  })

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort })
  }

  useEffect(() => {
    dispatchSort({ type: 'reset', initialState: pages })
  }, [pages])

  useEffect(() => {
    dispatchSort({ type: SortEnum.Rating })
  }, [])

  return (
    <>
      <h1 className={styles.h1}>Courses</h1>
      <Sort sort={sort} setSort={setSort} />
      {sortedPages &&
        sortedPages.map((page, index) => (
          <Link href={`/courses/${page.alias}`} key={index}>
            <div className={styles.wrapperpage}>
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
            </div>
          </Link>
        ))}
    </>
  )
}

'use client'
import React, { useState } from 'react'
import classNames from 'classnames'
import { Metadata } from 'next'
import data from '../data/data.json'
import Image from 'next/image'
import { Rating } from '../components/Rating/Rating'
import styles from './courses.module.css'
export const metadata: Metadata = {
  title: 'About',
}

export default function Courses(): JSX.Element {
  const pages = data.pages

  return (
    <>
      {/* <div className={styles.wrappercontainer}> */}
      <h1 className={styles.h1}>Courses</h1>
      {pages.map((page, index) => (
        <div className={styles.wrapperpage} key={index}>
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
          </div>
        </div>
      ))}
      {/* </div> */}
    </>
  )
}

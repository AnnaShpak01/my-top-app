'use client'
import React from 'react'
import { Metadata } from 'next'
import styles from './books.module.css'
import data from '../../../public/data/books.json'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Books',
}

export default function Home(): JSX.Element {
  const books = data.books
  return (
    <div className={styles.wrappercontainer}>
      <div className={styles.h1}>Books</div>
      <div className={styles.undertitle}>
        We bring to your attention a list of books that will help improve your skills
      </div>
      {books.map((book) => (
        <div key={book.id}>
          <div className={styles.wrapperbook}>
            <div className={styles.logo}>
              <Image src={book.image} alt={book.title} width={140} height={140} />
            </div>
            <div className={styles.title}>{book.title}</div>
            <div className={styles.author}>{book.author}</div>
            <div className={styles.description}>{book.description}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

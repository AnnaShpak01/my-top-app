/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next'
import Link from 'next/link'
import cn from 'classnames'
import { Card } from './components/Card/Card'
import { Button } from './components/Button/Button'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Education platform',
  }
}

export default async function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Welcome to our educational platform!</h1>

        <div>
          You firmly decided to study the IT profession, went through career guidance, learned
          everything about the IT field and decided on the direction. The question that faces every
          beginner on this path is how to learn? There are two options: either study a new specialty
          on your own, or take courses. We have collected the pros and cons of the courses.
        </div>
        <div className={styles.compare}>
          <Card className={cn(styles.compareblock, styles.pros)}>
            <div className={styles.title}>Benefits of the courses:</div>
            <ul>
              <li>Verified program</li>
              <li>Mentor's help</li>
              <li>Clear deadlines</li>
              <li>Community of like-minded people</li>
            </ul>
          </Card>
          <Card className={cn(styles.compareblock, styles.cons)}>
            <div className={styles.title}>Disadvantages of courses:</div>
            <ul>
              <li>Cost of education</li>
              <li>Level is not taken into account</li>
              <li>Unscrupulous lecturers (you won’t find them on our website)</li>
            </ul>
          </Card>
        </div>
        <div>With us you can improve your skills by reading our courses and books</div>
        <div className={styles.links}>
          <Button appearance="primary">
            <Link href={`/courses/`} key="courses" className={styles.linked}>
              Courses
            </Link>
          </Button>
          <Button appearance="primary">
            <Link href={`/books/`} key="books" className={styles.linked}>
              Books
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next'
import { Button, Htag } from './components';

// export const metadata: Metadata = {
//   title: 'Main Page',
//   description: 'Generated by create next app',
// }

export async function generateMetadata(): Promise<Metadata>{
  return{
    title: 'ComputedMeta'
  }
}

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance='primary' className="dghj">Button</Button>
      <Button appearance='ghost'>Button</Button>
    </>
  )
}

import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next'
import { Button, Htag, P, Tag } from './components';
import Logo from '../public/vercel.svg';

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
    <Logo/>
      <Htag tag="h1">Text</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='down'>Button</Button>
      <P size='l'>Large</P>
			<P>Medium</P>
			<P size='s'>Small</P>
      <Tag size='s'>Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='s' color='green'>Green</Tag>
			<Tag color='primary'>Green</Tag>
    </>
  )
}

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page',
}

export default function PageProducts({ params }: { params: { alias: string } }) {
  return <div>Page with alias {params.alias}</div>
}

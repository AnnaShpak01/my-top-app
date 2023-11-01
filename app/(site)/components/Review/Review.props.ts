import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ReviewInterface } from './Review'

export interface ReviewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  review: ReviewInterface
}

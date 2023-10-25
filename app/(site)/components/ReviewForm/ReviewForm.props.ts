import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react'

export interface ReviewFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  productId: string
  isOpened: boolean
  setIsReviewOpened: Dispatch<SetStateAction<boolean>>
}

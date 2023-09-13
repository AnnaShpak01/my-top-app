'use client'
import React, { useState } from 'react'
import { Button, Htag, P, Rating, Tag } from '../components'

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4)

  return (
    <>
      <Htag tag="h1">HeadLine</Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
      <P size="l">Large</P>
      <P>Medium</P>
      <P size="s">Small</P>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag size="s" color="green">
        Green
      </Tag>
      <Tag color="primary">Green</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  )
}

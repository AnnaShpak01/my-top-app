'use client'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <>
      <div>Something coming wrong - Product</div>
      <div>{JSON.stringify(error)}</div>
      <button onClick={() => reset()}>Try again</button>
    </>
  )
}

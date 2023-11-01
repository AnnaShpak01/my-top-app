'use client'

export default function Error({ error }: { error: Error }) {
  return (
    <>
      <div>Something go wrong...</div>
      <div>{JSON.stringify(error)}</div>
    </>
  )
}

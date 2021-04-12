import React from 'react'

interface Props{
  className: string
  text: string
}

export const Title = (props: Props) => {
  const { className, text } = props

  return (
    <h1 className={className}>
      {text}
    </h1>
  )
}

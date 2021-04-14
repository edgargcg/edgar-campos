import React from 'react'

interface Props {
  className: string
}

export const Picture = (props: Props) => {
  const { className } = props

  return (
    <div className={`${className}`}>
    </div>
  )
}

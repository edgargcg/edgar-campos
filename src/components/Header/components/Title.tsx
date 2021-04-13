import React from 'react'

interface Props {
  className: string
  description: string
  name: string
}

export const Title = (props: Props) => {
  const { className, description, name } = props

  return (
    <div className={className}>
      <h1 className={`${className}-name`}>
        {name}
      </h1>
      <h5 className={`${className}-description`}>
        {description}
      </h5>
    </div>
  )
}

import React from 'react'

interface Props {
  className: string
  resume:  React.ReactNode;
}

export const Resume = (props: Props) => {
  const { className, resume } = props

  return (
    <div className={className}>
      <p>
        {resume}
      </p>
    </div>
  )
}

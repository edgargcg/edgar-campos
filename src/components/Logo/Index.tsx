import React from 'react'

interface Props {
  className?: string
}

export const Logo = (props: Props) => {
  const { className } = props
  const blockEl = 'edg__logo'

  return (
    <div className={`${blockEl} ${className}`}></div>
  )
}

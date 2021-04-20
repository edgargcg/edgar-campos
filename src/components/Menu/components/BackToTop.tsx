import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface Props {
  className: string,
  onClick: () => void
}

export const BackToTop = (props: Props) => {
  const { className, onClick } = props

  return (
    <a
      className={className}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={["fas", "sort-up"]} />
    </a>
  )
}

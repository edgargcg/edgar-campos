import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from 'classnames';

interface Props {
  className: string
  active: boolean
  handleClick: () => void
}

export const BurguerButton = (props: Props) => {
  const { active, className, handleClick } = props

  const activeClassname = classNames({
    [`${className}-icon--active`]: active
  })

  const icon = active ? 'times' : 'bars';

  return (
    <div className={className}>
      <FontAwesomeIcon
        className={`${className}-icon ${activeClassname}`}
        icon={['fas', icon]}
        onClick={handleClick}
      />
    </div>
  )
}

import classNames from 'classnames';
import React from 'react'
import { MenuOption } from '../../../interfaces/MenuOption';

interface Props {
  active: boolean
  className: string
  options: MenuOption[]
}

export const Options = (props: Props) => {
  const { active, className, options } = props;

  const activeClassName = classNames({
    [`${className}__container--active`]: active
  })

  const renderOptions = options.map(
    ({ id, name }: MenuOption) => (
      <li
        key={`menu-option-${id}`}
        className={`${className}__container-item`}
      >
        <a href={`#${id}`}>
          {name}
        </a>
      </li>
    )
  )

  return (
    <ul className={`${className}__container ${activeClassName}`}>
      {renderOptions}
    </ul>
  )
}

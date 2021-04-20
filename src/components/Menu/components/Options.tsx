import React from 'react'
import classNames from 'classnames';
import { Link } from "react-scroll";

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
        <Link to={id}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {name}
        </Link>
      </li>
    )
  )

  return (
    <ul className={`${className}__container ${activeClassName}`}>
      {renderOptions}
    </ul>
  )
}

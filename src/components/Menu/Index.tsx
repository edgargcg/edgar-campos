import React, { useEffect, useState } from 'react'
import useScreenSize from 'use-screen-size'
import { Options } from './components/Options'
import { BurguerButton } from './components/BurguerButton';

import { getMenuOptions } from '../../getters/getMenuOptions'

interface Props {
  className?: string
}

export const Menu = (props: Props) => {
  const { className } = props

  const [showMenu, setShowMenu] = useState(false);

  const size = useScreenSize()
  const blockEl = 'edg__menu'
  const options = getMenuOptions();

  const onClickMenuMobile = () => {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    const { screen } = size;

    if (screen !== 's' && screen !== 'xs')
      setShowMenu(false);

  }, [size])

  return (
    <nav className={`${blockEl} ${className}`}>
      <BurguerButton
        className={`${blockEl}__burguer`}
        active={showMenu}
        handleClick={onClickMenuMobile}
      />
      <Options
        className={blockEl}
        active={showMenu}
        options={options}
      />
    </nav>
  )
}

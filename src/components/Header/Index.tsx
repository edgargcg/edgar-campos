import React from 'react'
import { Logo } from '../Logo/Index'
import { Menu } from '../Menu/Index'

export const Header = () => {
  const blockEl = 'edg__header'

  return (
    <header className={blockEl}>
      <div className={`${blockEl}__container wrapper`}>
        <Logo className={`${blockEl}__container-logo`} />
        <Menu />
      </div>
    </header>
  )
}

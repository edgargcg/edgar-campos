import React from 'react'

import { Menu } from '../Menu/Index'
import { Title } from './components/Title'

export const Header = () => {
  const blockEl = 'edg__header'

  return (
    <header id="intro" className={blockEl}>
      <section className={`${blockEl}__container`}>
        <Menu className={`${blockEl}__menu`} />
        <div className={`${blockEl}__background`}></div>
        <div className={`${blockEl}__content wrapper`}>
          <Title
            className={`${blockEl}-title`}
            description='.NET FullStack Dev'
            name='Edgar Campos'
          />
        </div>
      </section>
    </header>
  )
}

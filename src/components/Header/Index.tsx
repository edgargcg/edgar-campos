import React from 'react'

import { Menu } from '../Menu/Index'
import { Title } from './components/Title'

export const Header = () => {
  const blockEl = 'edg__header'

  return (
    <header className={blockEl}>
      <section className={`${blockEl}__container`}>
        <div className={`${blockEl}__background`}></div>
        <div className={`${blockEl}__content wrapper`}>
          <Menu className={`${blockEl}__menu`} />
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

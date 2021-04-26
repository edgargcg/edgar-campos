import React from 'react'
import { MenuOption } from '../../interfaces/MenuOption'

import { Menu } from '../Menu'
import { Title } from './components/Title'

interface Props {
  title: string
  description: string
  options: MenuOption[]
}

export const Header = (props: Props) => {
  const blockEl = 'edg__header'
  const { title, description, options } = props

  return (
    <header id="intro" className={blockEl}>
      <section className={`${blockEl}__container`}>
        <Menu className={`${blockEl}__menu`} options={options} />
        <div className={`${blockEl}__background`}></div>
        <div className={`${blockEl}__content wrapper`}>
          <Title
            className={`${blockEl}-title`}
            description={description}
            name={title}
          />
        </div>
      </section>
    </header>
  )
}

import React, { useEffect, useState } from 'react'
import useScreenSize from 'use-screen-size'
import { animateScroll as scroll } from "react-scroll";

import { Options } from './components/Options'
import { BurguerButton } from './components/BurguerButton';
import { BackToTop } from './components/BackToTop';

import { getMenuOptions } from '../../getters/getMenuOptions'

interface Props {
  className?: string
}

export const Menu = (props: Props) => {
  const { className } = props

  const [showMenu, setShowMenu] = useState(false);
  const [classNameMenu, setClassNameMenu] = useState('')

  const size = useScreenSize()
  const blockEl = 'edg__menu'
  const options = getMenuOptions();

  const onClickMenuMobile = () => {
    setShowMenu(!showMenu);
  }

  const onClickBackTop = () => {
    scroll.scrollToTop();
  }

  const onScroll = () => {
    const scrollPosition =
      document.body.scrollTop || document.documentElement.scrollTop

    setClassNameMenu(
      scrollPosition > 190
        ? `${blockEl}--fixed`
        : ''
    );
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const { screen } = size;

    if (screen !== 's' && screen !== 'xs')
      setShowMenu(false);

  }, [size])

  return (
    <>
      <nav className={`${blockEl} ${className} ${classNameMenu}`}>
        <h2 className={`${blockEl}__title ${classNameMenu}__title`}>
          Edgar Campos
          <small>
            .NET Fullsatck Dev
          </small>
        </h2>
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
      <BackToTop
        className={`${blockEl}__back`}
        onClick={onClickBackTop}
      />
    </>
  )
}

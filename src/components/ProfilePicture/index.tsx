import React from 'react'
import { Picture } from './components/Picture'
import { Resume } from './components/Resume'

export const ProfilePicture = () => {
  const blockEl = 'edg__profile'
  return (
    <div id="intro" className={blockEl}>
      <div className={`${blockEl}__container`}>
        <Picture className={`${blockEl}__picture`} />
        <Resume className={`${blockEl}__resume wrapper`} />
      </div>
    </div>
  )
}

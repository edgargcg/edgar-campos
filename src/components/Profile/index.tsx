import React from 'react'
import { Picture } from './components/Picture'
import { Resume } from './components/Resume'

export const Profile = () => {
  const blockEl = 'edg__profile'
  return (
    <div className={blockEl}>
      <div className={`${blockEl}__container`}>
        <Picture className={`${blockEl}__picture`} />
        <Resume className={`${blockEl}__resume wrapper`} />
      </div>
    </div>
  )
}

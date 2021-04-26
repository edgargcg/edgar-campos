import React from 'react'
import { Picture } from './components/Picture'
import { Resume } from './components/Resume'

interface Props{
  resume:  React.ReactNode;
}

export const Profile = (props: Props) => {
  const { resume } = props
  const blockEl = 'edg__profile'

  return (
    <div className={blockEl}>
      <div className={`${blockEl}__container`}>
        <Picture className={`${blockEl}__picture`} />
        <Resume 
          className={`${blockEl}__resume wrapper`} 
          resume={resume}
        />
      </div>
    </div>
  )
}

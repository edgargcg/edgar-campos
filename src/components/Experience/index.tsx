import React from 'react'
import { Experience as ExperienceInterface } from '../../interfaces/Experience'

interface Props{
  experience: ExperienceInterface[]
}

export const Experience = (props: Props) => {
  const { experience } = props
  const blockEl = 'edg__experience'

  const renderExperience = experience.map(
    ({ name, position }, index) => (
      <li key={`experience-item-${index}`} className={`${blockEl}__list-item`}>
        {name}
        <span className={`${blockEl}__list-item-position`}>
          {position}
        </span>
      </li>
    )
  )

  return (
    <div id="exp" className={blockEl}>
      <h3 className={`${blockEl}-title`}>I've worked as</h3>
      <ul className={`${blockEl}__list`}>
        {renderExperience}
      </ul>
    </div>
  )
}

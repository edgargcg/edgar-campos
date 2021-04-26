import React from 'react'
import { Repository } from '../../interfaces/Repository'
import { StretchedLink } from '../StretchedLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface Props {
  className?: string
  data: Repository
}

export const RepositoryCard = (props: Props) => {
  const { className, data: { icon, name, url, description, technologies } } = props
  const blockEl = 'edg__repository-card'

  const renderTechnologies = technologies.map(
    (tech, index) => (
      <li
        key={`repo-tech-${index}`}
        className={`${blockEl}__content__information-technologies-item`}
      >
        {tech}
      </li>
    )
  )

  return (
    <div className={`${className} ${blockEl}`}>
      <div className={`${blockEl}__content`}>
        <StretchedLink className={`${blockEl}__link`} title={name} url={url} />
        <div className={`${blockEl}__content__image`}>
          <FontAwesomeIcon icon={icon as IconProp} />
        </div>
        <div className={`${blockEl}__content__information`}>
          <h5 className={`${blockEl}__content__information-name`}>
            {name}
          </h5>
          <p className={`${blockEl}__content__information-description`}>
            {description}
          </p>
          <ul className={`${blockEl}__content__information-technologies`}>
            {renderTechnologies}
          </ul>
        </div>
      </div>
    </div>
  )
}

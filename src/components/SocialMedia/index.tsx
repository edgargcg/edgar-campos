import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { SocialMedia as SocialMediaInterface} from '../../interfaces/SocialMedia';

interface Props{
  socialMedia: SocialMediaInterface[]
}

export const SocialMedia = (props: Props) => {
  const { socialMedia } = props
  const blockEl = 'edg__social-media';
  
  const renderSocialMediaItems = socialMedia.map(
    ({ name, icon, url }) => (
      <li key={`social-media-icon-${icon}`} className={`${blockEl}__list-item`}>
        <a
          href={url}
          title={name}
        >
          <FontAwesomeIcon icon={icon as IconProp} />
        </a>
      </li>
    )
  )

  return (
    <div className={`${blockEl}`}>
      <ul className={`${blockEl}__list wrapper`}>
        {renderSocialMediaItems}
      </ul>
    </div>
  )
}

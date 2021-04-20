import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getSocialMedia } from '../../getters/getSocialMedia';
import { IconName, IconProp } from '@fortawesome/fontawesome-svg-core';

export const SocialMedia = () => {
  const blockEl = 'edg__social-media';
  const socialMedia = getSocialMedia();

  const renderSocialMediaItems = socialMedia.map(
    ({ name, icon, url }) => (
      <li className={`${blockEl}__list-item`}>
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

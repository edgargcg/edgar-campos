import classNames from 'classnames';
import React from 'react'

interface Props {
  className: string
  show: boolean
  technologies: {
    name: string,
    logo: string,
    experience?: string,
    text?: string
  }[]
}

export const Section = (props: Props) => {
  const { className, show, technologies } = props

  const classNameShow = classNames({
    [`${className}--hide`]: !show
  })

  const renderTechnologies = technologies.map(
    ({ name, logo, experience, text }, index) => {
      const image = require(`assets/images/ilustrations/${logo}.png`);

      return (
        <div key={`list-technology-${index}`} className={`${className}__list-item`}>
          <div className={`${className}__list-item__image`}>
            <img src={image.default} alt={name} />
          </div>
          <div className={`${className}__list-item__description`}>
            <h4 className={`${className}__list-item__description-title`}>
              {name}
            </h4>
            <span className={`${className}__list-item__description-experience`}>
              {experience}
            </span>
            <p className={`${className}__list-item__description-paragraph`}>
              {text}
            </p>
          </div>
        </div>
      )
    }
  )

  return (
    <div className={`${className} ${classNameShow}`}>
      <div className={`${className}__list`}>
        {renderTechnologies}
      </div>
    </div>
  )
}

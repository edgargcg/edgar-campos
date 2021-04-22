import React, { useEffect, useState } from 'react'
import { Tabs } from '../Tabs'
import { Section } from './components/Section'
import { getTechnologies } from '../../getters/getTechnologies'

export const Technologies = () => {
  const [tab, setTab] = useState('')

  let tabs: { id: string, name: string }[] = [];
  const blockEl = 'edg__technologies'
  const technologies = getTechnologies()

  useEffect(() => {
    const { type } = technologies[0]
    setTab(type)
  }, [])

  const renderTechnologies = technologies.map(
    ({ name, technologies, type }) => {
      tabs.push({
        id: type,
        name
      })

      const show = type === tab

      return (
        <Section
          key={`tech-section-${type}`}
          className={`${blockEl}__container`}
          show={show}
          technologies={technologies}
        />
      )
    }
  )

  const onTabChange = (id: string) => {
    setTab(id)
  }

  return (
    <div id="tech" className={blockEl}>
      <div className="wrapper">
        <Tabs onClickTab={onTabChange} selected={tab} tabs={tabs} />
        {renderTechnologies}
      </div>
    </div>
  )
}

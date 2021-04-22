import React from 'react'

interface Props {
  onClickTab: (id: string) => void
  tabs: {
    id: string
    name: string
  }[],
  selected: string
}

export const Tabs = (props: Props) => {
  const { onClickTab, tabs, selected } = props
  const blockEl = 'edg__tabs'

  const renderItems = tabs.map(
    ({ id, name }) => {
      const classNameSelected =
        id === selected
          ? `${blockEl}__list-item--active`
          : ''
      return (
        <li
          key={`tech-item-${id}`}
          className={`${blockEl}__list-item ${classNameSelected}`}
          onClick={() => onClickTab(id)}
        >
          {name}
        </li>
      )
    }
  )

  return (
    <div className={blockEl}>
      <ul className={`${blockEl}__list`}>
        {renderItems}
      </ul>
    </div>
  )
}

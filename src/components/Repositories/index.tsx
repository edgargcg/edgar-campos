import React from 'react'
import { getRepositories } from '../../getters/getRepositories'
import { RepositoryCard } from '../RepositoryCard'

export const Repositories = () => {
  const blockEl = 'edg__repositories'
  const repositories = getRepositories()

  const renderRepositories = repositories.map(
    (repository, index) => (
      <RepositoryCard
        key={`repository-item-${index}`}
        className={`${blockEl}__container-item`}
        data={repository}
      />
    )
  )

  return (
    <div id="repos" className={`${blockEl} wrapper`}>
      <h1 className={`${blockEl}__title`}>
        Repositories
      </h1>
      <div className={`${blockEl}__container`}>
        {renderRepositories}
      </div>
      <a 
        className={`${blockEl}__more`} 
        href="https://github.com/edgargcg" 
        target="_blank"
      >
        ...
      </a>
    </div>
  )
}

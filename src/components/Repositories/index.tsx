import React from 'react'
import { Repository } from '../../interfaces/Repository'
import { RepositoryCard } from '../RepositoryCard'

interface Props{
  repositories: Repository[]
}

export const Repositories = (props: Props) => {
  const { repositories } = props
  const blockEl = 'edg__repositories'

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

import React from 'react'

interface Props{
  title: string
  url: string
  target?: string
  className?: string
}

export const StretchedLink = (props: Props) => {
  const { className = '', title, url, target = 'blank '} = props
  
  return (
    <a 
      href={url} 
      title={title} 
      className={`stretch-link ${className}`}
      target={target}
    ></a>
  )
}

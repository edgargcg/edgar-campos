import React from 'react'

interface Props {
  className: string
}

export const Resume = (props: Props) => {
  const { className } = props

  return (
    <div className={className}>
      <p>
        Desarrollador con más de <strong>5 años de experiencia en tecnologías .NET</strong>, principalmente enfocado en desarrollo web, con amplia experiencia en el manejo de bases de datos relacionales como SQL SERVER.
      </p>
      <p>
        Me considero una persona <strong>responsable, perfeccionista y entusiasta</strong> por el diseño de software eficiente y moderno.
      </p>
    </div>
  )
}

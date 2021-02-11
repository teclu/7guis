import React from 'react'

interface CardProps {
  title: string
  guiComponent: JSX.Element
}

const Card = ({ title, guiComponent }: CardProps): JSX.Element => {
  return (
    <div className="card mb-4">
      <div className="card-body m-2 mb-4">
        <h3 className="card-title mb-4">{title}</h3>
        <div>{guiComponent}</div>
      </div>
    </div>
  )
}

export default Card

/* eslint-disable react/prop-types */
import React from 'react'

import { Container } from '../styles/components/cardGeneralInformation'

export interface PokemonDisplayProps {
  children: any,
  positive: boolean,
  numberPercent: number
  bigNumber: number,
  description: string,
}

const CardGeneralInformation: React.FC<PokemonDisplayProps> = ({
  children, positive, numberPercent, bigNumber, description,
}) => (
  <Container>
    <div className="card-back" />
    <div className="card-front">
      <div className="status">
        {children}
        {(positive && (
          <span className="positive">
            <strong>
              +
              {numberPercent}
              %
            </strong>
          </span>
        ))}
        {(!positive && (
          <span className="negative">
            <strong>
              -
              {numberPercent}
              %
            </strong>
          </span>
        ))}
      </div>
      <strong className="record-number">{bigNumber}</strong>
      <br />
      <span className="card-description">{description}</span>
    </div>
  </Container>
)

export default CardGeneralInformation

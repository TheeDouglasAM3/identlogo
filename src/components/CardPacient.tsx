/* eslint-disable react/prop-types */
import React from 'react'

import { Card } from '../styles/components/cardPacient'

interface CardPacientProps {
  urlImg: string,
  namePacient: string,
  nameTest: string,
  isTestComplete: boolean,
  date: string,
}

const CardPacient: React.FC<CardPacientProps> = ({
  urlImg, namePacient, nameTest, isTestComplete, date,
}) => (
  <Card>
    <img src={urlImg} alt="person" />
    <div className="pacient-info">
      <span className="small-text">PACIENTE</span>
      <strong className="medium-text">{namePacient}</strong>
      <span className="test-text">
        {isTestComplete && (
          <span className="green-text">
            COMPLETOU O TESTE:
            <strong>
              {' '}
              {nameTest}
            </strong>
          </span>
        )}
        {!isTestComplete && (
          <span className="red-text">
            CANCELOU O TESTE:
            <strong>
              {' '}
              {nameTest}
            </strong>
          </span>
        )}
      </span>
      <span className="small-text">
        REALIZADO EM:
        {date}
      </span>
    </div>
  </Card>
)

export default CardPacient

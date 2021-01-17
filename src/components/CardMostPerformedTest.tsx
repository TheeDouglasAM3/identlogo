/* eslint-disable react/prop-types */
import React from 'react'

import { Card } from '../styles/components/cardMostPerformedTest'
import ButtonDefault from './ButtonDefault'

interface CardMostPerformedTestProps {
  children: any,
  nameTest: string,
  numberTests: number,
}

const CardMostPerformedTest: React.FC<CardMostPerformedTestProps> = ({
  children, nameTest, numberTests,
}) => (
  <Card>
    <div className="card-half" id="card-half-top">
      {children}
    </div>
    <div className="card-half" id="card-half-bottom">
      <strong>{nameTest}</strong>
      <span>LICENÇAS DISPONÍVEIS</span>
      <div className="title-and-button">
        <h2>{numberTests}</h2>
        <ButtonDefault text="COMPRAR MAIS" />
      </div>
    </div>
  </Card>
)

export default CardMostPerformedTest

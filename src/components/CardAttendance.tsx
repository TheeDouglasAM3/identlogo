/* eslint-disable react/prop-types */
import React from 'react'

import { Card } from '../styles/components/cardAttendance'

interface CardAttendanceProps {
  children: any,
  namePerson: string,
  nameTest: string,
  date: string
}

const CardAttendance: React.FC<CardAttendanceProps> = ({
  children, namePerson, nameTest, date,
}) => (
  <Card>
    <div className="card-image">
      {children}
    </div>
    <div className="card-info">
      <strong>{namePerson}</strong>
      <span className="small-text">TESTE REALIZADO</span>
      <span className="medium-text">{nameTest}</span>
      <span className="small-text">REALIZADO EM:</span>
      <span className="medium-text">{date}</span>
    </div>
  </Card>
)

export default CardAttendance

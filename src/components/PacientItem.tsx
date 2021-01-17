/* eslint-disable react/prop-types */
import React from 'react'
import { AiFillEdit } from 'react-icons/ai'

import { Item } from '../styles/components/pacientItem'
import ButtonDefault from './ButtonDefault'
import ButtonDefaultPink from './ButtonDefaultPink'

interface PacientItemProps {
  urlImg: string,
  namePacient: string,
  description: string,
  testsApproved: number,
  testsCancelled: number,
  testsPending: number,
}

const PacientItem: React.FC<PacientItemProps> = ({
  urlImg, namePacient, description, testsApproved, testsCancelled, testsPending,
}) => (
  <Item>
    <div className="left">
      <div className="pacient-item-info">
        <img src={urlImg} alt="pacient" />
        <div className="pacient-data">
          <strong>{namePacient}</strong>
          <small>DIAGNÓSTICO</small>
          <span>{description}</span>
        </div>
      </div>
      <div className="pacient-tests tests-approved">
        <strong>{testsApproved}</strong>
        <span>Testes realizados</span>
      </div>
      <div className="pacient-tests tests-canceled">
        <strong>{testsCancelled}</strong>
        <span>Testes cancelados</span>
      </div>
      <div className="pacient-tests tests-pending">
        <strong>{testsPending}</strong>
        <span>Testes pendentes</span>
      </div>
    </div>
    <div className="pacient-action">
      <div className="svg-area">
        <AiFillEdit size={22} />
      </div>
      <ButtonDefaultPink text="ENVIAR NOVO TESTE" />
      <ButtonDefault text="ALTERAR CADASTRO" />
    </div>
  </Item>
)

export default PacientItem

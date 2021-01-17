import React from 'react'

import { FiHome, FiArrowDownCircle } from 'react-icons/fi'
import { Container } from '../styles/components/navbar'

import logoImg from '../images/completeLogo.png'

export default function Navbar() {
  return (
    <Container>
      <img src={logoImg} alt="logo" />
      <hr />
      <div className="nav-item-active">
        <FiHome size={32} className="nav-icon" />
        Dashboard
      </div>
      <div>
        <FiArrowDownCircle size={32} className="nav-icon" />
        Pacientes
      </div>
      <div>
        <FiArrowDownCircle size={32} className="nav-icon" />
        Testes
      </div>
      <div>
        <FiArrowDownCircle size={32} className="nav-icon" />
        Configurações
      </div>
    </Container>
  )
}

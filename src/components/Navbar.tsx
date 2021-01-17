/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react'

import { FiHome, FiArrowDownCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Container } from '../styles/components/navbar'

import logoImg from '../images/completeLogo.png'

interface NavbarProps {
  navItemActiveNumber: number,
}

const Navbar: React.FC<NavbarProps> = ({
  navItemActiveNumber,
}) => (
  <Container>
    <img src={logoImg} alt="logo" />
    <hr />
    <Link to="/">
      <div className={navItemActiveNumber === 1 ? 'nav-item-active' : ''}>
        <FiHome size={32} className="nav-icon" />
        Dashboard
      </div>
    </Link>
    <Link to="/pacients">
      <div className={navItemActiveNumber === 2 ? 'nav-item-active' : ''}>
        <FiArrowDownCircle size={32} className="nav-icon" />
        Pacientes
      </div>
    </Link>
    <Link to="#">
      <div className={navItemActiveNumber === 3 ? 'nav-item-active' : ''}>
        <FiArrowDownCircle size={32} className="nav-icon" />
        Testes
      </div>
    </Link>
    <Link to="#">
      <div className={navItemActiveNumber === 4 ? 'nav-item-active' : ''}>
        <FiArrowDownCircle size={32} className="nav-icon" />
        Configurações
      </div>
    </Link>
  </Container>
)

export default Navbar

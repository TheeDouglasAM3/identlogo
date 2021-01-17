import React from 'react'
import { IoApps, IoNotifications } from 'react-icons/io5'
import { BiCog } from 'react-icons/bi'
import SearchBar from './SearchBar'
import imgPerson from '../images/person1.jpg'

import { Container } from '../styles/components/userMenu'

export default function UserMenu() {
  return (
    <Container>
      <SearchBar />
      <div className="user-area">
        <BiCog color="#2C2E3D" size="1.5rem" />
        <IoNotifications color="#2C2E3D" size="1.5rem" />
        <div>
          <span>Olá, </span>
          <strong>Doug</strong>
          <img src={imgPerson} alt="you" />
        </div>
        <IoApps color="#2C2E3D" size="1.8rem" />
      </div>
    </Container>
  )
}

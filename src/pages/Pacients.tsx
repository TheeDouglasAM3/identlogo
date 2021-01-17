import React, { ReactElement } from 'react'

import { BsThreeDots } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { Container } from '../styles/pages/pacients'
import Navbar from '../components/Navbar'
import UserMenu from '../components/UserMenu'
import CardAttendance from '../components/CardAttendance'
import PacientItem from '../components/PacientItem'

import uilBrain from '../images/uilBrain.png'
import uilCell from '../images/uilCell.png'
import SearchBar from '../components/SearchBar'
import personA from '../images/person2.png'
import personB from '../images/person3.png'
import personC from '../images/person4.png'
import personD from '../images/person5.png'
import personE from '../images/person6.png'

const Pacients = (): ReactElement => (
  <Container>
    <div id="page-pacients">
      <Navbar
        navItemActiveNumber={2}
      />
      <div className="dashboard-area">
        <UserMenu />
        <div className="work-session">
          <div className="atualizacoes-pacientes">

            <h3>Atualizações Pacientes</h3>

            <div className="content-tests">
              <CardAttendance
                namePerson="Renata Augusto Ferreira"
                nameTest="TDAH CAB ADHD"
                date="20/10/2023"
              >
                <img src={uilBrain} alt="icon" />
              </CardAttendance>

              <CardAttendance
                namePerson="Renata Augusto Ferreira"
                nameTest="Autismo"
                date="20/09/2023"
              >
                <img src={uilCell} alt="icon" />
              </CardAttendance>

              <CardAttendance
                namePerson="Renata Augusto Ferreira"
                nameTest="TDAH CAB ADHD"
                date="20/10/2023"
              >
                <img src={uilBrain} alt="icon" />
              </CardAttendance>

              <CardAttendance
                namePerson="Renata Augusto Ferreira"
                nameTest="Autismo"
                date="20/09/2023"
              >
                <img src={uilCell} alt="icon" />
              </CardAttendance>

              <CardAttendance
                namePerson="Renata Augusto Ferreira"
                nameTest="TDAH CAB ADHD"
                date="20/10/2023"
              >
                <img src={uilBrain} alt="icon" />
              </CardAttendance>

              <CardAttendance
                namePerson="Renata Augusto Ferreira"
                nameTest="Autismo"
                date="20/09/2023"
              >
                <img src={uilCell} alt="icon" />
              </CardAttendance>

              <CardAttendance
                namePerson="Renata Augusto Ferreira"
                nameTest="TDAH CAB ADHD"
                date="20/10/2023"
              >
                <img src={uilBrain} alt="icon" />
              </CardAttendance>

              <CardAttendance
                namePerson="Renata Augusto Ferreira"
                nameTest="Autismo"
                date="20/09/2023"
              >
                <img src={uilCell} alt="icon" />
              </CardAttendance>
            </div>
          </div>
        </div>

        <div className="todos-pacientes">

          <h3>Todos os pacientes</h3>
          <div className="nav-pacients">
            <div className="pacients-area">
              <strong>Lista de pacientes(5)</strong>
              <SearchBar />
            </div>
            <BsThreeDots color="#2C2E3D" size="2rem" />
          </div>
          <div className="list-pacients">

            <div className="pacient-item">
              <PacientItem
                urlImg={personA}
                namePacient="Renata Augusto Ferreira"
                description="TDAH CAB ADHD, Autismo"
                testsApproved={3}
                testsCancelled={1}
                testsPending={1}
              />

              <PacientItem
                urlImg={personD}
                namePacient="Leandro Motta Braga"
                description="TDAH CAB ADHD, Autismo"
                testsApproved={6}
                testsCancelled={0}
                testsPending={50}
              />

              <PacientItem
                urlImg={personE}
                namePacient="Kuromi Naori Kagasawa"
                description="TDAH CAB ADHD, Autismo"
                testsApproved={22}
                testsCancelled={0}
                testsPending={2}
              />

              <PacientItem
                urlImg={personB}
                namePacient="Carlos Nobrega Baccio"
                description="TDAH CAB ADHD, Autismo"
                testsApproved={16}
                testsCancelled={1}
                testsPending={50}
              />

              <PacientItem
                urlImg={personC}
                namePacient="Suelton A. Mellis"
                description="TDAH CAB ADHD, Autismo"
                testsApproved={15}
                testsCancelled={2}
                testsPending={2}
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  </Container>
)

export default Pacients

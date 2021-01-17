import React, { ReactElement } from 'react'

import { Container } from '../styles/pages/main'
import Navbar from '../components/Navbar'
import UserMenu from '../components/UserMenu'
import CardGeneralInformation from '../components/CardGeneralInformation'
import ButtonDefault from '../components/ButtonDefault'
import CardAttendance from '../components/CardAttendance'
import CardMostPerformedTest from '../components/CardMostPerformedTest'

import userIcon from '../images/userIcon.png'
import testTubeIcon from '../images/testTube.png'
import testTubeCorrectIcon from '../images/testTubeCorrect.png'
import testTubeWrongIcon from '../images/testTubeWrong.png'
import uilBrain from '../images/uilBrain.png'
import uilCell from '../images/uilCell.png'

const Main = (): ReactElement => (
  <Container>
    <div id="page-main">
      <Navbar />
      <div className="dashboard-area">
        <UserMenu />
        <div className="informacoes-gerais">
          <h3>Informações Gerais</h3>
          <div className="info-row">
            <CardGeneralInformation
              positive
              numberPercent={30}
              bigNumber={26}
              description="Pacientes Ativos"
            >
              <img src={userIcon} alt="user-icon" />
            </CardGeneralInformation>
            <CardGeneralInformation
              positive={false}
              numberPercent={10}
              bigNumber={306}
              description="Testes realizados"
            >
              <img src={testTubeIcon} alt="tube-icon" />
            </CardGeneralInformation>
            <CardGeneralInformation
              positive
              numberPercent={30}
              bigNumber={139}
              description="Testes concluídos"
            >
              <img src={testTubeCorrectIcon} alt="tube-pos-icon" />
            </CardGeneralInformation>
            <CardGeneralInformation
              positive={false}
              numberPercent={3}
              bigNumber={11}
              description="Testes cancelados"
            >
              <img src={testTubeWrongIcon} alt="tube-neg-icon" />
            </CardGeneralInformation>
          </div>
        </div>
        <div className="work-session">
          <div className="historico-atendimento">
            <div className="title-and-button">
              <h3>Histórico de atendimentos</h3>
              <ButtonDefault text="VER TODOS" />
            </div>
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

            </div>
          </div>
          <div className="teste-mais-realizado">
            <h3>Teste mais realizado</h3>

            <CardMostPerformedTest
              nameTest="Autismo"
              numberTests={13}
            >
              <img src={uilCell} alt="icon" />
            </CardMostPerformedTest>

          </div>
        </div>
        <div className="atualizacoes-importantes">
          <h3>Atualizações Importantes</h3>
        </div>
      </div>
    </div>
  </Container>
)

export default Main

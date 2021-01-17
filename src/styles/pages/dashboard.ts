import styled from 'styled-components'

import imgBackground from '../../images/background.png'

export const Container = styled.div`
  #page-main {
    width: 100vw;
    height: 100vh;
    background-image: url('${imgBackground}'), linear-gradient(90deg, #0859d1, #00d689 90%);
    display: flex;
    justify-content: space-between;
  }

  .dashboard-area {
    width: 82%;
    background: #EFF2F9;
    margin: 1% 1% 1% 0rem;
    border-radius: 2.0rem;
  }

  .informacoes-gerais,
  .historico-atendimento,
  .atualizacoes-importantes,
  .updates-row {
    width: 100%;    
    padding: 0.6rem 0rem 0rem 2rem;
  }

  .informacoes-gerais .info-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 10rem;
  }

  .content-tests {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .work-session {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .work-session .historico-atendimento {
    width: 76%;
    margin-right: 1.4rem;
  }

  .work-session .historico-atendimento .title-and-button {
    display: flex;
    align-items: flex-start;
  }

  .work-session .historico-atendimento .title-and-button h3 {
    margin-right: 0.8rem;
  }

  .work-session .teste-mais-realizado {
    width: 24%;
    margin-right: 1.4rem;
  }

  .work-session .teste-mais-realizado h3 {
    margin-top: 0.6rem;
  }

  .content-tests {
    width: 100%;
    height: 15rem;
    margin-top: 0.6rem;
    background: #FFFFFF;
  }

  .atualizacoes-importantes .updates-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 1.2rem 0rem 0rem;
  }

`

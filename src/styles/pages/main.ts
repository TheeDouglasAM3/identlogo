import styled from 'styled-components'

import imgBackground from '../../images/background.png'

export const Container = styled.div`
  #page-main {
    width: 100vw;
    height: 100vh;
    background-image: url('${imgBackground}'), linear-gradient(90deg, #0094FF, #00d689 90%);
    display: flex;
    justify-content: space-between;
  }

  .dashboard-area {
    width: 100%;
    background: #EFF2F9;
    margin: 1.2rem 1.2rem 1.2rem 0rem;
    border-radius: 2.0rem;
  }

  .informacoes-gerais,
  .historico-atendimento {
    width: 100%;    
    padding: 0.6rem 0rem 0rem 2rem;
  }

  .informacoes-gerais .info-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 10rem;
  }
  .work-session {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .work-session .historico-atendimento {
    width: 76%;
  }

  .work-session .historico-atendimento .title-and-button {
    display: flex;
    align-items: center;
  }

  .work-session .historico-atendimento .title-and-button h3 {
    margin-right: 0.8rem;
  }

  .button-default {
    background: linear-gradient(93.05deg, #00A3FF 0%, #0057FF 100%);
    border-radius: 20px;
    color: #FFFFFF;
    padding: 0.2rem 1.2rem 0.2rem 1.2rem;
    cursor: pointer;
    font-size: 16px;
  }

`

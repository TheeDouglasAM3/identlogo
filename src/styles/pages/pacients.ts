import styled from 'styled-components'

import imgBackground from '../../images/background.png'

export const Container = styled.div`
  #page-pacients {
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

  .atualizacoes-pacientes,
  .todos-pacientes {  
    padding: 0.6rem 0rem 0rem 2rem;
  }

  .content-tests {
    display: flex;
    justify-content: space-between;
    max-width: 98.2%;
    width: 100%!important;
    overflow:hidden; 
    overflow-x:scroll;
    margin-top: 0.6rem;
    background: #FFFFFF;
    height: 18rem;
  }

  .work-session {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .work-session .atualizacoes-pacientes {
    width: 100%;
    margin-right: 1.4rem;
  }

  .work-session .atualizacoes-pacientes h3 {
    margin-right: 0.8rem;
  }

  .content-tests {
    display: flex;
    justify-content: space-between;
    max-width: 98.2%;
    width: 100%!important;
    overflow:hidden; 
    overflow-x:scroll;
    margin-top: 0.6rem;
    background: #FFFFFF;
    height: 18rem;
  }
  
  .todos-pacientes .nav-pacients {
    background: #FFFFFF;
    margin-right: 1.4rem;
    height: 3.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .todos-pacientes .nav-pacients svg {
    cursor: pointer;
    margin-right: 0.6rem;
  }

  .todos-pacientes .nav-pacients .pacients-area {
    display: flex;
    align-items: center;
    margin-left: 0.6rem;
  }

  .todos-pacientes .nav-pacients .pacients-area strong {
    color: rgba(86, 84, 104, 0.6);
  }

  .todos-pacientes .list-pacients {
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    overflow:hidden; 
    overflow-y:scroll;
    height: 14rem;
    margin-right: 1.4rem;
  }

`

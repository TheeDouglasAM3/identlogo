import styled from 'styled-components'

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  width:15%;
  margin: 2rem;
  height: 90%;
  max-width: 220px;

  > img {
    width: 14rem;
    margin-bottom: 1rem;
  }

  > hr {
    border-color: rgba(255, 255, 255, 0.1);
  }

  a > div {
    color: #FFF; 
    padding: 1.0rem 0.4rem 1.0rem 0.4rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    fill: #FFF;
    border-radius: 0.8rem;
    width: 240px;
  }

  .nav-icon {
    margin-right: 0.6rem;
  }

  a > .nav-item-active {
    background-color: #EFF2F9;
    color: #303B5B;
    fill: #303B5B;
  }
`

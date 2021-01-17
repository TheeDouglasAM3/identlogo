import styled from 'styled-components'

export const Container = styled.div`

  height: 4.0rem;
  width: 100%;
  background: #FFFFFF;
  border-top-left-radius: 2.0rem;
  border-top-right-radius: 2.0rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  > .user-area {
    width: 25%;
    height: 100%;
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  > .user-area div {
    height: 100%;
    width: 10.0rem;
    padding: 0.1rem 0.3rem 0.1rem 0.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 50px;
    background: rgba(47, 68, 134, 0.05);
  }

  > .user-area div img {
    height: 80%;
    border-radius: 10rem;
  }
`

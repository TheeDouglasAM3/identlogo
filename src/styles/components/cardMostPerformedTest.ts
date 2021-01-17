import styled from 'styled-components'

import imgCardBackground from '../../images/retangular.png'

export const Card = styled.div`

  width: 100%;
  height: 15rem;
  margin-top: 0.6rem;
  background: url('${imgCardBackground}') #ffffff no-repeat;
  background-size: cover;

  border: 1px solid #EDF1F8;
  box-sizing: border-box;
  border-radius: 6px;


  > .card-half {
    height: 50%;
  }

  > #card-half-top {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > #card-half-top > img {
    height: 70%;
  }

  > #card-half-bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0.6rem;
  }

  > #card-half-bottom > .title-and-button {
    display: flex;
    align-items: center;
  }

  > #card-half-bottom > .title-and-button > h2 {
    margin-right: 0.6rem;
  }

  > #card-half-bottom > strong {
    font-size: 22px;
  }

  > #card-half-bottom > span {
    font-size: 12px;
    color: rgba(48, 59, 91, 0.3);
    font-weight: 700;
  }

`

export default Card

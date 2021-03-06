import styled from 'styled-components'

import imgCardBackground from '../../images/retangular.png'

export const Card = styled.div`

    display: flex;
    flex-direction: column;
    margin: 0.6rem;
    width: 100%;
    min-width: 14.4rem;

    border: 1px solid #EDF1F8;
    box-sizing: border-box;
    border-radius: 6px;

    transition: box-shadow 1s;

    :hover {
      box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.3);
    }

  .card-image {
    background-image: url('${imgCardBackground}');
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > .card-info { 
    display: flex;
    flex-direction: column;
    padding: 0.4rem;
  }

  > .card-info > strong {
    font-size: 16px;
  }

  > .card-info > .small-text {
    font-size: 12px;
    color: rgba(48, 59, 91, 0.3);
    font-weight: 700;
  }

  > .card-info > .medium-text {
    font-size: 14px;
  }
`

export default Card

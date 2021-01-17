import styled from 'styled-components'

export const Container = styled.div`

  width: 100%;

  > .card-front {
    height: 8rem;
    width: 94%;
    background: #FFFFFF;
    position: relative;
    top: -90px;
    box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
    border-radius: 6px;
  }

  > .card-back {
    height: 6.4rem;
    width: 80%;
    background: #FFFFFF;
    position: relative;
    left: 8%;
    bottom: -46px;
    box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.08);
    border-radius: 6px;
  }

  > .card-front .status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem 0.6rem 0.2rem 0.6rem;
    color: #FFFFFF
  }

  > .card-front .status img {
    height: 2.2rem;
  }

  > .card-front .status span {
    background: #1CBF84;
    border-radius: 20px;
    font-size: 14px;
    padding: 0.2rem 0.4rem 0.2rem 0.4rem;
  }

  > .card-front .status .positive {
    background: #1CBF84;
  }

  > .card-front .status .negative {
    background: #EF0C35;
  }

  > .card-front .record-number {
    margin-left: 0.8rem;
    font-size: 2.0rem;
  }

  > .card-front .card-description {
    margin-left: 0.8rem;
    font-size: 1.2rem;
  }

`

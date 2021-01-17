import styled from 'styled-components'

export const Item = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem;
  margin-left: 0.6rem;
  border: 1px solid #EFF2F9;
  box-sizing: border-box;
  border-radius: 6px;

  > .left {
    display: flex;
    align-items: center;
  }

  > .left .pacient-item-info{
    display: flex;
    align-items: center;
  }

  > .left .pacient-item-info img{
    width: 4.8rem;
  }

  > .left .pacient-item-info .pacient-data{
    display: flex;
    flex-direction: column;
    margin-left: 0.6rem;
    row-gap: 0.4rem;
    min-width: 14rem;
  }

  > .left .pacient-item-info .pacient-data strong{
    font-size: 16px;
  }

  > .left .pacient-item-info .pacient-data small{
    color: rgba(48, 59, 91, 0.3);
    font-weight: 700;
    font-size: 12px;
  }

  > .left .pacient-item-info .pacient-data span{
    color: #1EAC79;
    font-weight: 700;
    font-size: 14px;
  }

  > .left .pacient-tests{
    display: flex;
    flex-direction: column;
    margin-left: 1.6rem;
  }

  > .left .pacient-tests strong{
    font-size: 34px;
  }

  > .left .tests-approved {
    color: #1EAC79;
  }

  > .left .tests-canceled {
    color: #EF0C35;
  }

  > .left .tests-pending {
    color: #FF6B00;
  }

  > .pacient-action {
    display: flex;
    align-items: center;
    column-gap: 0.6rem;
  }

  > .pacient-action .svg-area {
    background: #FFFFFF;
    border: 1px solid #EFF2F9;
    border-radius: 50px;
    box-sizing: border-box;
    padding: 0.4rem 0.6rem 0.4rem 0.6rem;
    cursor: pointer;
  }

  > .pacient-action .svg-area svg {
    fill: #145AD2;
  }

`

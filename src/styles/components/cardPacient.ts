import styled from 'styled-components'

export const Card = styled.div`

  display: flex;
  align-items: center;

  background: #FFFFFF;
  box-shadow: 0px 1px 26px rgba(71, 87, 122, 0.08);
  border-radius: 6px;

  padding: 0.6rem;
  width: 100%;
  margin-right: 0.6rem;

  transition: box-shadow 1s;
  
  :hover {
    box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.3);
  }

  > img{
    margin-left: 0.4rem;
  }

  > .pacient-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 0.6rem;  
  }

  > .pacient-info > .small-text {
    font-size: 12px;
    color: rgba(48, 59, 91, 0.3);
    font-weight: 700;
  }

  > .pacient-info > .medium-text {
    font-size: 18px;
  }

  > .pacient-info > .test-text {
    font-size: 16px;
  }

  > .pacient-info > .test-text > .green-text{
    color: #1EAC79;
  }

  > .pacient-info > .test-text > .red-text{
    color: #EF0C35;
  }

`

export default Card

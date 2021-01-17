import styled from 'styled-components'

export const Button = styled.span`
  background: linear-gradient(93.05deg, #00A3FF 0%, #0057FF 100%);
  border-radius: 20px;
  color: #FFFFFF;
  padding: 0.2rem 1.2rem 0.2rem 1.2rem;
  cursor: pointer;
  font-size: 14px;
  transition: box-shadow 1s;
  
  :hover {
    box-shadow: 0px 8px 26px rgba(71, 87, 122, 0.3);
  }
`

export default Button

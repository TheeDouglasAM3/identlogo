import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    color: #2e2e2e;
    background: #f0f0f0;
  }
  body, input, button, textarea {
    font: 400 18px Poppins, sans-serif;
  }
  a { 
    text-decoration: none;
  }
`

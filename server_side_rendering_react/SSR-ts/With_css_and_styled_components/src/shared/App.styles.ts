import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
/*!!! those rules will override the rules set in server site markup html template !!!*/
  
  #app {
    border: 1px dotted green;
  }
`

export default GlobalStyle

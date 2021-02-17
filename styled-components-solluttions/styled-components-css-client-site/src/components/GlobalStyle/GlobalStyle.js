import { createGlobalStyle } from "styled-components";

/*
    Global style have access to:
    1) its own props as <GlobalStyle main> main is prop
    2) to the theme therfore you can use theme properties witthing the stylesheet

    Imporant <GlobalStyle> has to be wrapped by theme;

    <ThemeProvider theme={theme}>
      <GlobalStyle/>
    </ThemeProvider>

*/
const GlobalStyle = createGlobalStyle`
  body {
    background-color: pink;
  }

  ${props => (props.main ? ".main" : "")}-container{
    background-color: lightyellow;
    padding:10px;
  }

  button {
    background-color: ${props =>
      props.theme.primary ? props.theme.primary : "black"};
  }
`;

export default GlobalStyle;

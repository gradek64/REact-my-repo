import React from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";

import Button from "./components/presentational/Button/TypicalStyledComponentSyntax";
import ButtonInjectCSSProperty from "./components/presentational/ButtonInjectCSSProperty";
import ButtonStyleAttached from "./components/presentational/Button/ButtonStyleAttached";
import OverriddenButton from "./components/presentational/Button/OverriddenButton";
import SectionContainer from "./components/containers/SectionContainer";
import AsComponentAttribute from "./components/presentational/AsComponentAttribute";
import { theme } from "./components/Theming/ThemeButton";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import ResposiveMediaQueryBttn from "./components/presentational/Button/ResposiveMediaQueryBttn.js";
//import ThemeHOC from "./components/Theming/WithThemeHOC";
console.log("GlobalStyle", GlobalStyle);
const Index = () => (
  <div className="helloworld">
    {/* 
    U can still make your CSS global file and then 
    use it in your theme 
    
    */}
    <ThemeProvider theme={theme}>
      <GlobalStyle main />
      <Button primary className="typical">
        TypicalStyledComponentSyntax
      </Button>
      <div className="main-container">
        <Button primary className="typical">
          TypicalStyledComponentSyntax2
        </Button>
      </div>
      <ButtonStyleAttached />
      <OverriddenButton>I am OverriddenButton style</OverriddenButton>
      <SectionContainer>
        <AsComponentAttribute />
      </SectionContainer>
      <h2>media query button implementation</h2>
      <ResposiveMediaQueryBttn>ResposiveMediaQueryBttn</ResposiveMediaQueryBttn>
      <h2>inject css line/property in the styled method like </h2>
      <ButtonInjectCSSProperty green-font complex>
        inject CSS property
      </ButtonInjectCSSProperty>
      <h2>theme send in props no ThemeProvider needed</h2>
      <Button theme={theme}>Themed</Button>
      <h2>usage of themes</h2>
      <ThemeProvider theme={theme}>
        <Button>Themed</Button>
      </ThemeProvider>
    </ThemeProvider>
  </div>
);

ReactDOM.render(<Index />, document.querySelector("#root"));

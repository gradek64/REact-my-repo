import React from "react";
import { withTheme } from "styled-components";
import { theme } from "./components/Theming/ThemeButton";

/*
    U can aslo provide the theme but wrapping in with HiherorderComponent 
    insted of 
    import  { ThemeProvider } from "styled-components";
    just an alternative to obove;


*/

const ThemeHOC = (props, { theme }) => <>{props.children}</>;
export default withTheme(ThemeHOC);

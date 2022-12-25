import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,body {
    min-width: 100%;
    min-height: 100%;
    max-width: 100vw;
    width: 100%;
    height: 100%;
    overflow-x: clip;

    font-family:  'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;

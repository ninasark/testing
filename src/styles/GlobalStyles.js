import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   * {
       padding: 0;
       margin: 0;
       box-sizing: border-box;
   }

   body {
       overflow-x: hidden;
       width : 100vw;
       background: ${(props) => props.theme.body};
   }
`
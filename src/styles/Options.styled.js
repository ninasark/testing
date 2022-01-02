import styled from "styled-components";

export const OptionsContainer = styled.div`
    display: grid;
    grid-template-columns: 24px 1fr;
    gap : 1.2em 0.7em;
    margin-top: 2.2em;

    & > button {
        grid-column-start: 2;
    }

    @media screen and (max-width : 775px) {
       display: none;
   }

   @media screen and (min-width : 775px) and (max-width : 1400px) {
       width : 100%;
   }
`
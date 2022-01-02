import styled from "styled-components";

export const OrderSectionContainer = styled.div`
   background : #353535;
   border-radius: 25px;
   display: grid;
   grid-template-columns: 1fr 1fr;
   column-gap : 3em;
   padding : 1.8em 2.2em;
   margin-top : 6em;

   
   @media screen and (max-width : 775px) {
       grid-template-columns: 1fr;
       padding : 0em;
       margin-top : 1em;
      background: transparent;
   }

   @media screen and (min-width : 775px) and (max-width : 1150px) {
    grid-template-columns: 1fr;
       padding : 1em;
   }
`
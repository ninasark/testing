import styled from "styled-components";

export const SubTitle = styled.p`
   width : 600px;
   color : #fff;
   font-size : 20px;

   @media screen and (max-width : 775px) {
       width : 95%;
       font-size: 17px;
       margin-top : 0.5em;
       font-weight: 400;
   }

   @media screen and (min-width : 775px) and (max-width : 1280px) {
       width : 100%;
       font-size : 18px;
   }
`
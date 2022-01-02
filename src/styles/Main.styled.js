import styled from "styled-components";

export const Container = styled.div`
   color : #fff;
   display: grid;
   grid-template-columns: ${(props) => props.width ? props.width : "65%"} 450px;
   box-sizing: border-box;
   column-gap: ${(props) => props.gap ? props.gap : 0};

   @media screen and (max-width : 775px) {
       grid-template-columns: 100%;
   }

   @media screen and (min-width : 775px) and (max-width : 1250px) {
       grid-template-columns: ${(props) => props.responsiveWidth ? props.responsiveWidth : "1fr"};
       //column-gap: ${(props) => props.gap && "0"};
       column-gap: ${(props) => props.responsiveGap ? props.responsiveGap : "12em"};
   }

   @media screen and (min-width : 775px) and (max-width : 1450px) {
      column-gap : ${(props) => props.responsiveGap ? props.responsiveGap : "12em"};
   }
`
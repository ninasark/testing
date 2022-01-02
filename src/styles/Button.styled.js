import styled from "styled-components";

export const Button = styled.button`
   width : ${(props) => props.width};
   padding : 10px 15px;
   border-radius: 10px;
   cursor: pointer;
   border: none;
   font-size: 18px;
   outline: none;
   background: ${(props) => props.theme.secondary};
   color : #000;
   font-weight: 700;
   height : 55px;
   box-sizing: border-box;

   
   @media screen and (max-width : 775px) {
       width : ${(props) => props.responsiveWidth};
       font-size : 17px;
       height: 50px;
   }

   @media screen and (min-width : 775px) and (max-width : 1450px) {
      width : ${(props) => props.expand ? props.width : "100%"};
   }
`

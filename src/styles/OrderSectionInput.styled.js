import styled from "styled-components";

export const OrderSectioninput = styled.input`
   width : 460px;
   padding : 10px 15px 10px 15px;
   border-radius: 16px;
   border : 1px solid ${(props) => props.theme.secondary};
   background: transparent;
   color : #fff;
   outline: none;
   box-sizing: border-box;
   margin-bottom: 0.8em;

   
   @media screen and (max-width : 775px) {
       width : 100%;
       margin-top : 1.7em;
   }

   @media screen and (min-width : 775px) and (max-width : 1450px) {
    width : 100%;
       margin-top : 1.7em;
   }
`
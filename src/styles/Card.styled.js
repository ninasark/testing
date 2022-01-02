import styled from "styled-components";

export const CardContainer = styled.div`
   width : 350px;
   padding : 1em 1.4em;
   border : 1px solid #ffffffd8;
   border-radius: 0.8em;

   @media screen and (max-width : 800px) {
      width : 95%;  
      height: max-content;
      padding : 0.8em;
      margin-bottom: 1em;
    }

    @media screen and (min-width : 800px) and (max-width : 1250px) {
      width : 330px;  
      padding : 1em;
      margin-bottom: 1em;
    }
`
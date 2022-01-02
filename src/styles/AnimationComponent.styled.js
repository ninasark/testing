import styled from "styled-components";

export const AnimationComponent = styled.div`
  display: flex;
  align-items: center;
  gap : 4em;
  margin: 6em 0;
  cursor: pointer;
  z-index: 100000;
  position: relative;
  height : 50px;
  box-sizing: border-box;

  @media screen and (max-width : 1450px) {
    gap : 1em;
  }

  @media screen and (max-width : 1280px) {
      //display: none;
  }

  @media screen and (min-width : 1600px) {
    gap : 7em;
  }

  @media screen and (min-width : 800px) and (max-width : 1250px) {
    justify-content: center;
  }

  @media screen and (min-width : 800px) and (max-width : 1400px) {
    margin-bottom: 11em;;
  }

  @media screen and (max-width: 800px) {
     justify-content: center;
     margin : 4em  0;
     z-index: 1;
  }
`
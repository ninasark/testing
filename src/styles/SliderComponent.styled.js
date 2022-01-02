import styled from "styled-components";

export const SliderComponent = styled.div`
  height: 450px;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5em;
  margin-top: 10em;
  z-index: 10000;

  & > #slider {
    display: flex;
    align-items: center;
    gap: 1.2em;
    justify-content: center;

    @media screen and (max-width: 1450px) {
      gap: 1em;
    }

    @media screen and (max-width: 600px) {
      margin-top: 0;
      gap: 0.8em;
    }
  }

  & > #arrows {
    display: flex;
    align-items: center;
    gap: 1.5em;
    justify-content: center;
  }

  @media screen and (max-width: 1450px) {
    margin-top: 9em;
    gap: 1.5em;
  }

  @media screen and (max-width: 600px) {
    margin-top: 2.7em;
    gap: 1.5em;
    height : max-content;
  }

`;

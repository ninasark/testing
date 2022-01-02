import styled from "styled-components";
import { CardContainer } from "../styles/Card.styled";
import CircleComponent from "./Circle";
import elipse from "../assets/Elipse.svg";

function Card({title, options}) {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
     {options?.map(option => (
          <CardOption>
          <div style={{
              display: "flex",
              alignItems : "center",
              height : "20px"
          }}>
          <img src={elipse}/>
          </div>
          <OptionText>{option}</OptionText>
        </CardOption>
     ))}
    </CardContainer>
  );
}

const CardTitle = styled.div`
  width: 311px;
  font-size: 17px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 0.9em;

  @media screen and (max-width : 775px) {
       width : 100%;
    }

    @media screen and (min-width : 775px) and (max-width : 1450px) {
        width : 100%;
    }
`;

const OptionText = styled.div`
  width : 311px;

  @media screen and (max-width : 775px) {
       width : 100%;
    }
`

const CardOption = styled.div`
    display : flex;
    align-items: flex-start;
    gap : 0.4em;
    color : #ffffffce;
    font-weight: 400;;
    font-size: 17px;
    margin-bottom: 0.7em;

    @media screen and (max-width : 775px) {
      width : 100%;
      gap : 0.26em;
    }
       
`

export default Card;

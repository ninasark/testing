import { Link } from "react-router-dom"
import styled from "styled-components"
import { Button } from "../styles/Button.styled"
import { OrderSectionContainer } from "../styles/OrderSectionContainer.styled"
import { OrderSectioninput } from "../styles/OrderSectionInput.styled"

function OrderSection() {
    return (
        <OrderSectionContainer>
            <div>
                <OrderSectionTitle>Чтобы забрать понравившееся резюме посмотрите <StyledLink to="#">видео инструкцию</StyledLink></OrderSectionTitle>
                <OrderSectionSubtitle>Все резюме включают в себя мобильную и десктопную версии. Для просмотра десктопной версии введите email и мы отправим линк</OrderSectionSubtitle>
            </div>
            <div>
                <OrderSectioninput placeholder="E-mail"/>
                <Button expand={false} width="460px" responsiveWidth="100%">Отправьте мне линк</Button>
            </div>
        </OrderSectionContainer>
    )
}

const OrderSectionTitle = styled.div`
    color : #ffffffda;
    font-size : 24px;
    font-weight: 400;
    width : 600px;

    
   @media screen and (max-width : 775px) {
       font-size : 17px;
       text-align: center;
       padding : 1em;
       box-sizing: border-box;
       border-bottom: 1px solid #ebe9e9ae;
       width : 100%;
       color : #fff;
   }
`

const StyledLink = styled(Link)`
     color : ${(props) => props.theme.main}
`

const OrderSectionSubtitle = styled.div`
    color : rgba(255, 255, 255, 0.63);
    font-size : 17px;
    font-weight : 400;
    margin-top : 1em;
    width : 550px;

    
   @media screen and (max-width : 775px) {
       width : 95%;
       font-size : 15px;
       color : #fff;
   }
   `

export default OrderSection

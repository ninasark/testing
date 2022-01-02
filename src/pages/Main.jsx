import { Link } from "react-router-dom"
import Options from "../components/Options"
import { Container } from "../styles/Main.styled"
import { SecondColumn } from "../styles/SecondColumn.styled"
import { SubTitle } from "../styles/SubTitle.styled"
import { Title } from "../styles/Title.styled";
import brain from "../assets/Brain.svg";
import { useContext, useState } from "react"
import arrow from "../assets/Arrow.svg";
import frame1 from "../assets/Frame1.svg";
import styled from "styled-components"
import telegram from "../assets/telegram.svg";
import frame2 from "../assets/Frame2.svg";
import MobileOptions from "../components/MobileOptions"
import OrderSection from "../components/OrderSection"
import { PageContainer } from "../styles/Container.styled"
import AnimationContainer from "../components/AnimationContainer"
import { Context } from "../Context/Context"
import SliderContainer from "../components/SliderContainer"
import { isMobile } from "react-device-detect";

function Main() {

    const messages = [
        "Мы собрали 10 лучших резюме на GitHub. Всего за 10 долларов вы получите видео с подробной пошаговой инструкцией о том, как развернуть то, которое вам нравится на GitHub, Netlify или Cloudflare.",
        "Грамматика, киворды, расставим акценты, добавим модные обороты, уберем ненужное, постараемся вложиться в 2 страницы",
        "Что на рынке скиллов вас привлекает и что продается? Где плюсы и минусы? Как упаковать и продать? Что может быть завтра? Короче, во что вложиться чтобы не проиграть по времени и деньгам?",
        "Что на рынке скиллов вас привлекает и что продается? Где плюсы и минусы? Как упаковать и продать? Что может быть завтра? Короче, во что вложиться чтобы не проиграть по времени и деньгам?"
    ]

    const [isMouseOver, setIsMouseOver] = useState(false);
    const { index, setIndex } = useContext(Context);
 
    const handleHide = () => {
        setTimeout(() => {
           setIndex(0)
        }, 400)
    }

    return (
        <PageContainer>
        <Container responsiveGap="0em" responsiveWidth="70%" onMouseLeave={handleHide}>
            {/* First Column */}
            <div>
            <div onMouseOver={handleHide}>
            <StyledLink style={{ color : "#fff" }} to="/about-me">Обо мне</StyledLink>
              <Title>
              Career boosting for <span>modern professionals</span>
              </Title>
              <SubTitle>
               {!isMobile ? 
               "Сервис, который поможет вам пройти успешно собеседование, попасть на работу своей мечты всего за пару консультаций" 
               : "Поможем успешно выделиться при поиске работы"}
              </SubTitle>
            </div>
              <Options/>
              <MobileOptions/>
            </div>
            {/* Second Column */}
            <SecondColumn>
                <LinkContainer>
                   <Link style={{ color : "#fff", fontSize : "30px" }} to="/about-me">Обо мне</Link>
                </LinkContainer>
                <MainHoverContainer>
                <ArrowImage
                 src={arrow}/>
                {index == 0 ? (
                     <div
                     style={{ position : "relative" }}>
                     <img src={brain}/>
                   </div>
                ) : (
                    <div 
                    style={{ height : "200px", marginLeft : "1%", textAlign : "center",width : "328px", position : "relative" }}
                    >
                    <img
                style={{
                    position: "absolute",
                    top : "-90%",
                    right : "-30%"
                }}
            src={frame1}/>
                    <span style={{
                        fontSize : "18px",
                        fontWeight : 400,
                        width : "100%",
                        textAlign : "center"
                    }}/>

               <img
                style={{
                    position: "absolute",
                   bottom : "-30%",
                   left : "-20%"
                }}
                 src={frame2}/>
                    <TextContainer>
                      {messages[index - 1]}
                    </TextContainer>
                    <div style={{
                        display : "flex",
                        justifyContent : "flex-end",
                        width : "100%",
                        marginTop : "3em"
                    }}>
                    <Button>Вопросы? <img src={telegram}/></Button>
                    </div>
                </div>
                )}
                </MainHoverContainer>
            </SecondColumn>
           
        </Container>
          <Content>
          <AnimationContainer/>
          </Content>
           {/* Slider */}
     
           <Content>
           <SliderContainer/>
           </Content>
       
          <Content>
            <OrderSection/>
          </Content>
        </PageContainer>
    )
}

const Content = styled.div`
    display : block;

    @media screen and (max-width : 775px) {
       display: none;
   }
`

const Button = styled.button`
    width : 177px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap : 0.5em;
    height : 55px;
    border: none;
    outline: none;
    background-color: ${(props) => props.theme.main};
    cursor: pointer;
    border-radius: 10px;
    color : #000;
    font-size : 20px;
    font-weight: 500;
    padding : 10px 15px 10px 15px;

    @media screen and (max-width : 775px) {
       height : 50px;
    }
`

const LinkContainer = styled.div`
   width : 95%;
  text-align: right;
 margin-top: 1.2em;

   @media screen and (max-width : 775px) {
       display: none;
    }

    @media screen and (min-width : 775px) and (max-width : 1450px) {
        display : none;
    }
`


const MainHoverContainer = styled.div`
    cursor: pointer;
    width : 100%;
    height: 100%;
    display: grid;
    place-items: center;
    position: relative;
    margin-top: 2em;

    @media screen and (max-width : 775px) {
        display: none;
    }

    @media screen and (min-width : 775px) and (max-width : 1400px) {
        display : none;
    }
`

const ArrowImage = styled.img`
   position: absolute;
   top : 60%;
   right : -12%;

   @media screen and (min-width : 775px) and (max-width : 1450px) {
        display : none;
    }

`

const StyledLink = styled(Link)`
    color : #fff;
    display: none;

    @media screen and (max-width : 775px) {
       display: block;
       font-size : 17px;
       margin-bottom: 0.3em;
       padding : 0.1em 0;
    }

    @media screen and (min-width : 775px) and (max-width : 1450px) {
        display: block;
       font-size : 17px;
       margin-bottom: 0.8em;
    }
`

const TextContainer = styled.div`
    font-size : 18px;
    font-weight: 400;
    display : grid;
    place-items: center;
    height : max-content;
    width : 328px;
    min-height: 144px;
    text-align : center;
    margin-left : -1em;
`

export default Main

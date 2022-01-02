import AnimationContainer from "../components/AnimationContainer"
import OrderSection from "../components/OrderSection"
import SliderContainer from "../components/SliderContainer"
import { PageContainer } from "../styles/Container.styled"
import { SubTitle } from "../styles/SubTitle.styled"
import { Title } from "../styles/Title.styled"

function Galary() {
    return (
        <PageContainer>
            <Title>The best resumes from the <span>GitHub</span></Title>
            <SubTitle>Мы собрали лучшие шаблоны резюме, чтобы вы потратили меньше усилий на трудоустройство.</SubTitle>
            <SliderContainer/>
            <AnimationContainer/>
            <OrderSection/>
        </PageContainer>
    )
}

export default Galary

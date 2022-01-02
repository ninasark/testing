import styled from "styled-components";
import CircleComponent from "./Circle";
import CustomCheckbox from "./CustomCheckbox";
import smallVector from "../assets/SmallVector.svg";
import MobileOptionContainer from "./MobileOption";
import { Button } from "../styles/Button.styled";

function MobileOptions() {
  return (
    <MobileOptionsContainer
    >
      <MobileOptionContainer
        title="Instruction video по установке Creative online resumef"
        subtitle="$10 за инструкцию"
        details="Видео с подробными инструкциями по build and deploy вашего резюме в онлайн формате"
        details2="Мы собрали 10 лучших резюме на GitHub. Всего за 10 долларов вы получите видео с подробной пошаговой инструкцией о том, как развернуть то, которое вам нравится на GitHub, Netlify или Cloudflare."
      />

      <MobileOptionContainer
        title="Проверка вашего резюме (word/pdf)"
        subtitle="$25 за страницу"
        details="Проверим все пункты, на которые обращают внимание при приеме на работу. Раскрою все секреты грамотного и продающего резюме"
        details2="Грамматика, киворды, расставим акценты, добавим модные обороты, уберем ненужное, постараемся вложиться в 2 страницы"
   />

      <MobileOptionContainer
        title="Консультация по востребованным скиллам"
        subtitle="$20 за 30 минут"
        details="Отвечу на любые вопросы. Поделюсь своим экспертным мнением"
        details2="Что на рынке скиллов вас привлекает и что продается? Где плюсы и минусы? Как упаковать и продать? Что может быть завтра? Короче, во что вложиться чтобы не проиграть по времени и деньгам?"
      />

    <MobileOptionContainer
        highlighted={true}
        title="Разбор собеседования в аудио формате"
        subtitle="$15 за собеседование"
        details="Скачивайте приложение, используйте его чтобы записать собеседование и поделиться со мной. Мы обсудим и найдем моменты где улучшить результат"
        details2="Что на рынке скиллов вас привлекает и что продается? Где плюсы и минусы? Как упаковать и продать? Что может быть завтра? Короче, во что вложиться чтобы не проиграть по времени и деньгам?"
      />
 
 <Button 
 style={{
     marginTop : "0.6em"
 }}
 width="100%">
 Заказать
 </Button>

    </MobileOptionsContainer>


  );
}


const MobileOptionsContainer = styled.div`
    margin-top : 1.5em;
    display: none;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width : 775px) {
       display: flex;
    }
`

export default MobileOptions;

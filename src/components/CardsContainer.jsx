import styled from "styled-components";
import Card from "./Card";

const data = [
  {
    title: "Проверка вашего резюме",
    options: [
      "Английская грамматика, правильное использование технических оборотов",
      "Using hot keywords for your specialty",
    ],
  },
  {
    title: "Фокус на ваших сильных сторонах",
    options: [
      "Какие быстрорастущие отрасли вам дадут максимум возможности карьерного роста",
      "В каких инструментах и областях ожидается наибольшая нехватка специалистов",
      "Как сопоставить ваши скилы и сильные стороны с рынком труда",
    ],
  },
  {
    title: "Где лучше всего искать",
    options: [
      "Отрасли и типы компаний",
      "Работа на рускоговорящем рынке и за рубежом",
      "Удаленка или нет",
      "Мы постараемся создать общий целостный взгляд на вашу карьеру",
    ],
  },
];

function CardsContainer() {
  return (
    <Cards>
      {data.map(({ title, options }) => (
        <Card title={title} options={options} />
      ))}
    </Cards>
  );
}

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 350px);

  column-gap: 2em;
  margin-top: 1.5em;

  @media screen and (max-width: 800px) {
     margin-top : 1.4em;
    grid-template-columns: repeat(1, 100%);
    place-items: center;
  }

  @media screen and (min-width: 801px) and (max-width: 1250px) {
    grid-template-columns: repeat(2, 250px);
    column-gap: 7em;
    row-gap: 2em;
    align-content: center;
    margin-top: 1.3em;
  }
`;

export default CardsContainer;

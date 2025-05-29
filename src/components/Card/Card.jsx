import CardItem from "./CardItem";
import CardList from "../CardList";
import styled from "styled-components";

const Cards = styled.div`
  .cards {
    width: 100%;
    display: block;
    position: relative;
  }
`;

const Card = () => {
  return (
    <Cards>
      {CardList.map((card) => (
        <CardItem
          key={card.id}
          theme={card.theme}
          title={card.title}
          date={card.date}
          status={card.status}
        />
      ))}
    </Cards>
  );
};

export default Card;

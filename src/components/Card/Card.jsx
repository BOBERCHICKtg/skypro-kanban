import CardItem from "./CardItem";
import CardList from "../CardList";
import { Cards } from "./Card.styles";



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

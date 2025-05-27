import CardItem from "./CardItem";
import CardList from "../CardList";

const Card = () => {
  return (
    <div className="cards">
      {CardList.map((card) => (
        <CardItem
          key={card.id}
          theme={card.theme}
          title={card.title}
          date={card.date}
          status={card.status}
        />
      ))}
    </div>
  );
};

export default Card;

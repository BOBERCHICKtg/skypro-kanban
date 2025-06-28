import {
  Cards,
  CardItem,
  CardWrapper,
  CardGroup,
  CardTheme,
  CardButton,
  CardContent,
  CardTitle,
  CardDate,
} from "./Card.styles";

const Card = ({ tasks, onStatusChange, onDelete, loading }) => {
  if (loading) {
    return <div>Загрузка задач...</div>;
  }

  return (
    <Cards>
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => (
          <CardItem key={task._id}>
            <CardWrapper>
              <CardGroup>
                <CardTheme
                  color={
                    task.topic === "Web Design"
                      ? "orange"
                      : task.topic === "Research"
                      ? "green"
                      : "purple"
                  }
                >
                  <p>{task.topic}</p>
                </CardTheme>
                <CardButton>
                  <div></div>
                  <div></div>
                  <div></div>
                </CardButton>
              </CardGroup>

              <CardContent>
                <CardTitle>{task.title}</CardTitle>
                <CardDate>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 14.4C4.472 14.4 1.6 11.528 1.6 8C1.6 4.472 4.472 1.6 8 1.6C11.528 1.6 14.4 4.472 14.4 8C14.4 11.528 11.528 14.4 8 14.4Z"
                      fill="#94A6BE"
                    />
                    <path
                      d="M8.8 4H7.2V8.8L11.2 11.6L12 10.4L8.8 8V4Z"
                      fill="#94A6BE"
                    />
                  </svg>
                  <p>{new Date(task.date).toLocaleDateString()}</p>
                </CardDate>
              </CardContent>
            </CardWrapper>
          </CardItem>
        ))
      ) : (
        <div>Нет задач для отображения</div>
      )}
    </Cards>
  );
};

export default Card;

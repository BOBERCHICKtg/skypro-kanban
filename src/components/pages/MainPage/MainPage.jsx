import Card from "../../Card/Card";
import {
  MainContainer,
  LoadingMessage,
  Container,
  MainBlock,
  MainContent,
  MainColumn,
  ColumnTitle,
  CardsContainer,
} from "./Main.styles";
import { useTasks } from "../../../hooks/useTasks"; // Импортируем наш хук для задач
import Header from "../../Header/Header";

const Main = () => {
  const { tasks, loading, error } = useTasks();

  // Группируем задачи по статусам
  const tasksByStatus = {
    "Без статуса": tasks.filter((task) => task.status === "Без статуса"),
    "Нужно сделать": tasks.filter((task) => task.status === "Нужно сделать"),
    "В работе": tasks.filter((task) => task.status === "В работе"),
    Тестирование: tasks.filter((task) => task.status === "Тестирование"),
    Готово: tasks.filter((task) => task.status === "Готово"),
  };

  if (error) {
    return (
      <MainContainer>
        <LoadingMessage>
          <p>Ошибка при загрузке задач: {error}</p>
        </LoadingMessage>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      {loading ? (
        <LoadingMessage>
          <p>Загружаю задачи...</p>
        </LoadingMessage>
      ) : (
        <Container>
          <MainBlock>
            <MainContent>
              {/* Колонка "Без статуса" */}
              <MainColumn className="column">
                <ColumnTitle>
                  <p>Без статуса</p>
                </ColumnTitle>
                <CardsContainer>
                  {tasksByStatus["Без статуса"].map((task) => (
                    <Card
                      key={task._id}
                      id={task._id}
                      loading={loading}
                      title={task.title}
                      topic={task.topic}
                      date={task.date}
                      status={task.status}
                    />
                  ))}
                </CardsContainer>
              </MainColumn>

              {/* Колонка "Нужно сделать" */}
              <MainColumn>
                <ColumnTitle>
                  <p>Нужно сделать</p>
                </ColumnTitle>
                <CardsContainer>
                  {tasksByStatus["Нужно сделать"].map((task) => (
                    <Card
                      key={task._id}
                      id={task._id}
                      loading={loading}
                      title={task.title}
                      topic={task.topic}
                      date={task.date}
                      status={task.status}
                    />
                  ))}
                </CardsContainer>
              </MainColumn>

              {/* Колонка "В работе" */}
              <MainColumn>
                <ColumnTitle>
                  <p>В работе</p>
                </ColumnTitle>
                <CardsContainer>
                  {tasksByStatus["В работе"].map((task) => (
                    <Card
                      key={task._id}
                      id={task._id}
                      loading={loading}
                      title={task.title}
                      topic={task.topic}
                      date={task.date}
                      status={task.status}
                    />
                  ))}
                </CardsContainer>
              </MainColumn>

              {/* Колонка "Тестирование" */}
              <MainColumn>
                <ColumnTitle>
                  <p>Тестирование</p>
                </ColumnTitle>
                <CardsContainer>
                  {tasksByStatus["Тестирование"].map((task) => (
                    <Card
                      key={task._id}
                      id={task._id}
                      loading={loading}
                      title={task.title}
                      topic={task.topic}
                      date={task.date}
                      status={task.status}
                    />
                  ))}
                </CardsContainer>
              </MainColumn>

              {/* Колонка "Готово" */}
              <MainColumn>
                <ColumnTitle>
                  <p>Готово</p>
                </ColumnTitle>
                <CardsContainer>
                  {tasksByStatus["Готово"].map((task) => (
                    <Card
                      key={task._id}
                      id={task._id}
                      loading={loading}
                      title={task.title}
                      topic={task.topic}
                      date={task.date}
                      status={task.status}
                    />
                  ))}
                </CardsContainer>
              </MainColumn>
            </MainContent>
          </MainBlock>
        </Container>
      )}
    </MainContainer>
  );
};

export default Main;

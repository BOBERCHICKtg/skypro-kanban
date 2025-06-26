import { useState, useEffect } from "react";
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
import { fetchKanbanTasks } from "../../../services/api";

const Main = ({ loading: parentLoading, user }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem("authToken");

      if (!token) {
        throw new Error("Требуется авторизация. Токен не найден.");
      }

      const tasksData = await fetchKanbanTasks({ token });
      setTasks(tasksData || []);
    } catch (err) {
      setError(err.message);
      console.error("Ошибка загрузки задач:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

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
          <button onClick={loadTasks}>Повторить попытку</button>
        </LoadingMessage>
      </MainContainer>
    );
  }

  const isLoading = parentLoading || loading;

  return (
    <MainContainer>
      {isLoading ? (
        <LoadingMessage>
          <p>Загружаю задачи...</p>
        </LoadingMessage>
      ) : (
        <Container>
          <MainBlock>
            <MainContent>
              {Object.entries(tasksByStatus).map(([status, tasks]) => (
                <MainColumn key={status}>
                  <ColumnTitle>
                    <p>{status}</p>
                  </ColumnTitle>
                  <CardsContainer>
                    {tasks.map((task) => (
                      <Card
                        key={task._id}
                        id={task._id}
                        title={task.title}
                        topic={task.topic}
                        date={task.date}
                        status={task.status}
                        description={task.description}
                        onTaskUpdated={loadTasks}
                      />
                    ))}
                  </CardsContainer>
                </MainColumn>
              ))}
            </MainContent>
          </MainBlock>
        </Container>
      )}
    </MainContainer>
  );
};

export default Main;

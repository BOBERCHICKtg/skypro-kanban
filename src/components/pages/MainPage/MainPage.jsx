import { useState, useEffect } from "react";
import Card from "../../Card/Card";
import { fetchKanbanTasks } from "../../../services/api";
import {
  MainContainer,
  LoadingMessage,
  Container,
  MainBlock,
  MainContent,
  MainColumn,
  ColumnTitle,
  CardsContainer,
  EmptyState,
} from "./Main.styles";

const Main = ({ newTask }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("authToken");
      const tasksData = await fetchKanbanTasks({ token });
      setTasks(tasksData || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, [newTask]); // Обновляем при изменении newTask

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
        <LoadingMessage>Ошибка: {error}</LoadingMessage>
      </MainContainer>
    );
  }

  if (loading) {
    return (
      <MainContainer>
        <LoadingMessage>Загрузка задач...</LoadingMessage>
      </MainContainer>
    );
  }

  if (tasks.length === 0) {
    return (
      <MainContainer>
        <EmptyState>Нет задач. Создайте первую!</EmptyState>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <Container>
        <MainBlock>
          <MainContent>
            {Object.entries(tasksByStatus).map(([status, tasks]) => (
              <MainColumn key={status}>
                <ColumnTitle>
                  <p>{status}</p>
                </ColumnTitle>
                <CardsContainer>
                  <Card tasks={tasks} />
                </CardsContainer>
              </MainColumn>
            ))}
          </MainContent>
        </MainBlock>
      </Container>
    </MainContainer>
  );
};

export default Main;

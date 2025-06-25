import CardItem from "./CardItem";
import { Cards } from "./Card.styles";

const Card = ({ tasks, onStatusChange, onDelete, loading }) => {
  // Функция для обработки изменения статуса
  const handleStatusChange = (taskId, newStatus) => {
    if (onStatusChange) {
      onStatusChange(taskId, newStatus);
    }
  };

  // Функция для обработки удаления задачи
  const handleDelete = (taskId) => {
    if (onDelete) {
      onDelete(taskId);
    }
  };

  if (loading) {
    return <div>Загрузка задач...</div>;
  }

  return (
    <Cards>
      {tasks.map((task) => (
        <CardItem
          key={task._id}
          id={task._id}
          theme={task.topic}
          title={task.title}
          date={task.date}
          status={task.status}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
        />
      ))}
    </Cards>
  );
};

export default Card;

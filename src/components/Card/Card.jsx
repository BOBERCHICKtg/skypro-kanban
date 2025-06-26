import CardItem from "./CardItem";
import { Cards } from "./Card.styles";

const Card = ({
  tasks = [], // Значение по умолчанию для tasks
  onStatusChange,
  onDelete,
  loading,
}) => {
  // Функция для обработки изменения статуса
  const handleStatusChange = (taskId, newStatus) => {
    onStatusChange?.(taskId, newStatus);
  };

  // Функция для обработки удаления задачи
  const handleDelete = (taskId) => {
    onDelete?.(taskId);
  };

  if (loading) {
    return <div>Загрузка задач...</div>;
  }

  return (
    <Cards>
      {tasks.map((task) => (
        <CardItem
          key={task._id || Math.random()} // Запасной ключ если нет _id
          id={task._id}
          theme={task.topic || "Web Design"} // Значение по умолчанию
          title={task.title || "Новая задача"} // Значение по умолчанию
          date={task.date || new Date().toISOString()} // Значение по умолчанию
          status={task.status || "Без статуса"} // Значение по умолчанию
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
        />
      ))}
    </Cards>
  );
};

export default Card;

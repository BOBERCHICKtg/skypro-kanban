import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import {
  PopBrowseContainer,
  PopBrowseWrapper,
  PopBrowseBlock,
  PopBrowseContent,
  PopBrowseTopBlock,
  PopBrowseTitle,
  CategoryTheme,
  PopBrowseStatus,
  StatusTitle,
  StatusThemes,
  StatusTheme,
  PopBrowseWrap,
  PopBrowseForm,
  FormBrowseBlock,
  FormBrowseArea,
  ButtonGroup,
  Button,
  ThemeDown,
  Subtitle,
} from "./PopBrowse.styles";
import { kanbanAPI } from "../../../services/api";

const PopBrowse = ({ tasks, onClose }) => {
  const { id } = useParams();
  const task = tasks?.find((task) => task._id === id);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [editedTask, setEditedTask] = useState({
    title: task?.title || "",
    description: task?.description || "",
    status: task?.status || "Без статуса",
    topic: task?.topic || "Research",
    date: task?.date ? new Date(task.date) : new Date(),
  });

  useEffect(() => {
    const getTokenDirectly = () => {
      try {
        const userToken = localStorage.getItem("userToken");
        console.log("Токен из localStorage:", userToken);
        setToken(userToken);
      } catch (error) {
        console.error("Ошибка при получении токена:", error);
      }
    };

    getTokenDirectly();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => {
    if (!token) {
      alert(
        "Для редактирования需要 авторизация. Пожалуйста, войдите в систему."
      );
      return;
    }
    setIsEditMode(true);
  };

  const handleSave = async () => {
    try {
      if (!token) {
        alert("Ошибка авторизации. Токен не найден.");
        return;
      }

      setIsLoading(true);
      console.log("Используемый токен:", token);

      const dateToSend =
        editedTask.date instanceof Date
          ? editedTask.date.toISOString()
          : new Date(editedTask.date).toISOString();

      const taskData = {
        title: editedTask.title,
        description: editedTask.description,
        status: editedTask.status,
        topic: editedTask.topic,
        date: dateToSend,
      };

      await kanbanAPI.updateTask({
        token,
        id: task._id,
        task: taskData,
      });

      console.log("Задача успешно сохранена!");
      setIsEditMode(false);

      if (onClose) onClose();
    } catch (error) {
      console.error("Ошибка при сохранении:", error);
      alert("Ошибка: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setEditedTask({
      title: task.title,
      description: task.description,
      status: task.status,
      topic: task.topic,
      date: task.date ? new Date(task.date) : new Date(),
    });
  };

  const handleStatusChange = (status) => {
    console.log("Выбран статус:", status);
    setEditedTask((prev) => ({ ...prev, status }));
  };

  const handleDateChange = (date) => {
    setEditedTask((prev) => ({ ...prev, date }));
  };

  const handleDelete = async () => {
    if (!token) {
      alert("Для удаления需要 авторизация");
      return;
    }

    if (window.confirm("Вы уверены, что хотите удалить эту задачу?")) {
      try {
        await kanbanAPI.deleteTask({ token, id: task._id });
        if (onClose) onClose();
      } catch (error) {
        console.error("Ошибка при удалении:", error);
        alert("Не удалось удалить задачу: " + error.message);
      }
    }
  };

  // Получаем категории из задач
  const categoryOptions =
    tasks && tasks.length > 0
      ? [...new Set(tasks.map((task) => task.topic))]
      : ["Web Design", "Research", "Copywriting"];

  if (!task) return null;

  const statusOptions = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <PopBrowseContainer id="popBrowse">
      <PopBrowseWrapper>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              {isEditMode ? (
                <input
                  type="text"
                  name="title"
                  value={editedTask.title}
                  onChange={handleChange} // Теперь handleChange определена
                  className="edit-title-input"
                  placeholder="Название задачи"
                />
              ) : (
                <PopBrowseTitle>{task.title}</PopBrowseTitle>
              )}
              <CategoryTheme $orange className="_active-category">
                <p>
                  {isEditMode ? (
                    <select
                      name="topic"
                      value={editedTask.topic}
                      onChange={handleChange} // И здесь тоже
                    >
                      {categoryOptions.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  ) : (
                    task.topic
                  )}
                </p>
              </CategoryTheme>
            </PopBrowseTopBlock>

            <PopBrowseStatus>
              <StatusTitle>Статус</StatusTitle>
              <StatusThemes>
                {statusOptions.map((status) => (
                  <StatusTheme
                    key={status}
                    className={`
                      ${status === editedTask.status ? "_active" : ""}
                      ${status === "Нужно сделать" ? "_gray" : ""}
                    `}
                    onClick={() =>
                      isEditMode && token && handleStatusChange(status)
                    }
                    style={{
                      cursor: isEditMode && token ? "pointer" : "default",
                      opacity: isEditMode && token ? 1 : 0.6,
                    }}
                  >
                    <p>{status}</p>
                  </StatusTheme>
                ))}
              </StatusThemes>
            </PopBrowseStatus>

            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard">
                <FormBrowseBlock>
                  <Subtitle htmlFor="textArea01">Описание задачи</Subtitle>
                  <FormBrowseArea
                    name="description"
                    id="textArea01"
                    readOnly={!isEditMode || !token}
                    value={
                      isEditMode ? editedTask.description : task.description
                    }
                    onChange={handleChange} // И здесь
                    placeholder="Введите описание задачи..."
                    style={{
                      opacity: !token ? 0.6 : 1,
                    }}
                  />
                </FormBrowseBlock>
              </PopBrowseForm>
              <Calendar
                selectedDate={editedTask.date}
                onDateChange={isEditMode && token ? handleDateChange : null}
              />
            </PopBrowseWrap>

            <ThemeDown>
              <Subtitle>Категория</Subtitle>
              <CategoryTheme $orange className="_active-category">
                <p>{task.topic}</p>
              </CategoryTheme>
            </ThemeDown>

            <ButtonGroup>
              {!token ? (
                <div style={{ textAlign: "center", width: "100%" }}>
                  <p style={{ color: "#666", marginBottom: "10px" }}>
                    Для редактирования需要 авторизация
                  </p>
                  <Button
                    $background
                    onClick={() => (window.location.href = "/sign-in")}
                  >
                    Войти в систему
                  </Button>
                </div>
              ) : !isEditMode ? (
                <>
                  <Button $border onClick={handleEdit}>
                    Редактировать задачу
                  </Button>
                  <Button $border onClick={handleDelete}>
                    Удалить задачу
                  </Button>
                  <Button $background onClick={onClose}>
                    Закрыть
                  </Button>
                </>
              ) : (
                <>
                  <Button $background onClick={handleSave} disabled={isLoading}>
                    {isLoading ? "Сохранение..." : "Сохранить"}
                  </Button>
                  <Button $border onClick={handleCancel}>
                    Отменить
                  </Button>
                  <Button $border onClick={handleDelete}>
                    Удалить задачу
                  </Button>
                  <Button $background onClick={onClose}>
                    Закрыть
                  </Button>
                </>
              )}
            </ButtonGroup>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseWrapper>
    </PopBrowseContainer>
  );
};

export default PopBrowse;

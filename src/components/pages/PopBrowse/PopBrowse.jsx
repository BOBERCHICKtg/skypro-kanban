import { useState } from "react";
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

const PopBrowse = ({ tasks, onClose }) => {
  const { id } = useParams();
  const task = tasks?.find((task) => task._id === id);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: task?.title || "",
    description: task?.description || "",
    status: task?.status || "Без статуса",
    category: task?.category || "Web Design",
    date: task?.date || new Date(),
  });

  const handleEdit = () => setIsEditMode(true);

  const handleSave = () => setIsEditMode(false);

  const handleCancel = () => {
    setIsEditMode(false);
    setEditedTask({
      title: task.title,
      description: task.description,
      status: task.status,
      category: task.category,
      date: task.date,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (status) => {
    setEditedTask((prev) => ({ ...prev, status }));
  };

  const handleDateChange = (date) => {
    setEditedTask((prev) => ({ ...prev, date }));
  };

  const categoryOptions = [...new Set(tasks.map((task) => task.topic))];

  /*   ДОДЕЛАТЬ

const handleDelete = () => {

  } */

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
                  onChange={handleChange}
                  className="edit-title-input"
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
                      onChange={handleChange}
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
                    onClick={() => isEditMode && handleStatusChange(status)}
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
                    readOnly={!isEditMode}
                    value={
                      isEditMode ? editedTask.description : task.description
                    }
                    onChange={handleChange}
                    placeholder="Введите описание задачи..."
                  />
                </FormBrowseBlock>
              </PopBrowseForm>
              <Calendar
                selectedDate={editedTask.date}
                onDateChange={isEditMode ? handleDateChange : null}
              />
            </PopBrowseWrap>

            <ThemeDown>
              <Subtitle>Категория</Subtitle>
              <CategoryTheme $orange className="_active-category">
                <p>{task.category}</p>
              </CategoryTheme>
            </ThemeDown>

            <ButtonGroup>
              {!isEditMode ? (
                <>
                  <Button $border onClick={handleEdit}>
                    Редактировать задачу
                  </Button>
                  <Button $border>Удалить задачу</Button>
                  <Button $background onClick={onClose}>
                    Закрыть
                  </Button>
                </>
              ) : (
                <>
                  <Button $background onClick={handleSave}>
                    Сохранить
                  </Button>
                  <Button $border onClick={handleCancel}>
                    Отменить
                  </Button>
                  <Button $border>Удалить задачу</Button>
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

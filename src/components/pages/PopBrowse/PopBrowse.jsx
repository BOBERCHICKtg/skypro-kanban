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

const PopBrowse = ({ task, onClose }) => {
  const { id } = useParams();
  const [isEditMode, setIsEditMode] = useState(false);
  console.log(id);

  // Состояния для редактирования
  const [editedTask, setEditedTask] = useState({
    title: task?.title || "",
    description: task?.description || "",
    status: task?.status || "Без статуса",
    category: task?.category || "Web Design",
    date: task?.date || new Date(),
  });

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    // Здесь должна быть логика сохранения изменений
    setIsEditMode(false);
    // onSave(editedTask); // Можно добавить функцию сохранения
  };

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

  if (!task) return null;

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
                      name="category"
                      value={editedTask.category}
                      onChange={handleChange}
                    >
                      <option value="Web Design">Web Design</option>
                      <option value="Research">Research</option>
                      <option value="Copywriting">Copywriting</option>
                    </select>
                  ) : (
                    task.category
                  )}
                </p>
              </CategoryTheme>
            </PopBrowseTopBlock>

            <PopBrowseStatus>
              <StatusTitle>Статус</StatusTitle>
              <StatusThemes>
                {[
                  "Без статуса",
                  "Нужно сделать",
                  "В работе",
                  "Тестирование",
                  "Готово",
                ].map((status) => (
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
              <PopBrowseForm id="formBrowseCard" action="#">
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

            <ThemeDown className="theme-down">
              <Subtitle>Категория</Subtitle>
              <CategoryTheme $orange className="_active-category">
                <p>{task.category}</p>
              </CategoryTheme>
            </ThemeDown>

            {!isEditMode ? (
              <ButtonGroup className="pop-browse__btn-browse">
                <div className="btn-group">
                  <Button $border onClick={handleEdit}>
                    <a href="#">Редактировать задачу</a>
                  </Button>
                  <Button $border>
                    <a href="#">Удалить задачу</a>
                  </Button>
                </div>
                <Button $background onClick={onClose}>
                  <a href="#">Закрыть</a>
                </Button>
              </ButtonGroup>
            ) : (
              <ButtonGroup className="pop-browse__btn-edit">
                <div className="btn-group">
                  <Button $background onClick={handleSave}>
                    <a href="#">Сохранить</a>
                  </Button>
                  <Button $border onClick={handleCancel}>
                    <a href="#">Отменить</a>
                  </Button>
                  <Button $border id="btnDelete">
                    <a href="#">Удалить задачу</a>
                  </Button>
                </div>
                <Button $background onClick={onClose}>
                  <a href="#">Закрыть</a>
                </Button>
              </ButtonGroup>
            )}
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseWrapper>
    </PopBrowseContainer>
  );
};

export default PopBrowse;

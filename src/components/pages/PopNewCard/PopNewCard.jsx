import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import { createKanbanTask } from "../../../services/api";
import {
  PopNewCards,
  PopNewCardContainer,
  PopNewCardBlock,
  PopNewCardTitle,
  PopNewCardClose,
  PopNewCardWrap,
  FormNew,
  FormBlock,
  Subtitle,
  Input,
  TextArea,
  CreateButton,
  CategoriesContainer,
  CategoriesParagraph,
  CategoriesThemes,
  Theme,
} from "./PopNewCard.styles";

const PopNewCard = ({ user, onTaskCreated }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    topic: "Web Design",
    status: "Без статуса",
    date: new Date().toISOString(),
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClose = () => {
    navigate(location.state?.background || "/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTopicSelect = (topic) => {
    setFormData((prev) => ({ ...prev, topic }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, date: date.toISOString() }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error(
          "Требуется авторизация. Пожалуйста, войдите в систему."
        );
      }

      // Валидация обязательных полей
      if (!formData.title.trim()) {
        throw new Error("Название задачи обязательно");
      }

      // Подготовка данных задачи
      const taskData = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        topic: formData.topic,
        status: formData.status,
        date: formData.date,
      };

      // Отправка данных через API
      const response = await createKanbanTask({
        token,
        task: taskData,
      });

      // Уведомление родительского компонента
      if (onTaskCreated) {
        onTaskCreated(response);
      }

      // Закрытие попапа
      handleClose();
    } catch (err) {
      console.error("Ошибка создания задачи:", err);
      setError(
        err.response?.data?.message ||
          err.message ||
          "Произошла ошибка при создании задачи. Пожалуйста, проверьте введенные данные."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <PopNewCards>
      <PopNewCardContainer>
        <PopNewCardBlock>
          <div className="pop-new-card__content">
            <PopNewCardTitle>Создание задачи</PopNewCardTitle>
            <PopNewCardClose onClick={handleClose}>&#10006;</PopNewCardClose>

            <PopNewCardWrap>
              <FormNew id="formNewCard" onSubmit={handleSubmit}>
                {error && (
                  <div
                    style={{
                      color: "#ff3333",
                      backgroundColor: "#ffeeee",
                      padding: "10px",
                      borderRadius: "5px",
                      marginBottom: "15px",
                    }}
                  >
                    {error}
                  </div>
                )}

                <FormBlock>
                  <Subtitle htmlFor="formTitle">Название задачи*</Subtitle>
                  <Input
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={formData.title}
                    onChange={handleInputChange}
                    autoFocus
                    required
                    minLength="3"
                  />
                </FormBlock>

                <FormBlock>
                  <Subtitle htmlFor="textArea">Описание задачи</Subtitle>
                  <TextArea
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="4"
                  />
                </FormBlock>
              </FormNew>

              <Calendar
                onDateChange={handleDateChange}
                selectedDate={new Date(formData.date)}
              />
            </PopNewCardWrap>

            <CategoriesContainer>
              <CategoriesParagraph>Категория*</CategoriesParagraph>
              <CategoriesThemes>
                <Theme
                  color="orange"
                  $active={formData.topic === "Web Design"}
                  onClick={() => handleTopicSelect("Web Design")}
                >
                  Web Design
                </Theme>
                <Theme
                  color="green"
                  $active={formData.topic === "Research"}
                  onClick={() => handleTopicSelect("Research")}
                >
                  Research
                </Theme>
                <Theme
                  color="purple"
                  $active={formData.topic === "Copywriting"}
                  onClick={() => handleTopicSelect("Copywriting")}
                >
                  Copywriting
                </Theme>
              </CategoriesThemes>
            </CategoriesContainer>

            <CreateButton
              type="submit"
              form="formNewCard"
              disabled={loading}
              $loading={loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Создание...
                </>
              ) : (
                "Создать задачу"
              )}
            </CreateButton>
          </div>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCards>
  );
};

export default PopNewCard;

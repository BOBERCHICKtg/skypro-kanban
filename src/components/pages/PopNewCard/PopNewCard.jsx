import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
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

const PopNewCard = ({ user, addTask }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    topic: "Web Design", // Изменено с category на topic для соответствия API
    status: "Без статуса", // Добавлено поле статуса
    date: new Date().toISOString(), // Добавлено поле даты
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
      // Подготавливаем данные для отправки
      const taskData = {
        title: formData.title || "Новая задача", // Значение по умолчанию
        description: formData.description || "", // Значение по умолчанию
        topic: formData.topic,
        status: formData.status,
        date: formData.date,
      };

      // Вызываем функцию добавления задачи из props
      await addTask(taskData);

      // Закрываем попап после успешного добавления
      handleClose();
    } catch (err) {
      setError(err.message);
      console.error("Ошибка при создании задачи:", err);
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
                {error && <div style={{ color: "red" }}>{error}</div>}
                <FormBlock>
                  <Subtitle htmlFor="formTitle">Название задачи</Subtitle>
                  <Input
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={formData.title}
                    onChange={handleInputChange}
                    autoFocus
                    required
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
                  />
                </FormBlock>
              </FormNew>
              <Calendar onDateChange={handleDateChange} />
            </PopNewCardWrap>
            <CategoriesContainer>
              <CategoriesParagraph>Категория</CategoriesParagraph>
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
            <CreateButton type="submit" form="formNewCard" disabled={loading}>
              {loading ? "Создание..." : "Создать задачу"}
            </CreateButton>
          </div>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCards>
  );
};

export default PopNewCard;

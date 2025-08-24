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
  ErrorMessage,
} from "./PopNewCard.styles";

const PopNewCard = ({ setTasks }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
    const [activeDate, setActiveDate] = useState(new Date()); 
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    topic: "Web Design",
    date: new Date(),
  });

  const handleClose = () => navigate(location.state?.background || "/");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTopicSelect = (topic) => {
    setFormData((prev) => ({ ...prev, topic }));
  };

  const handleDateChange = (date) => {
    setActiveDate(date);
    setFormData((prev) => ({ ...prev, date }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("authToken");
      if (!token) throw new Error("Требуется авторизация");
      if (!formData.title.trim()) throw new Error("Введите название задачи");

      const newTask = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        topic: formData.topic,
        status: "Без статуса",
        date: formData.date,
      };

      const createdTask = await createKanbanTask({ token, task: newTask });
      setTasks?.(createdTask.tasks);
      handleClose();
    } catch (err) {
      setError(err.message || "Не удалось создать задачу");
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
                {error && <ErrorMessage>{error}</ErrorMessage>}

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
                activeDate={formData.date}
                onChange={handleDateChange}
              />
            </PopNewCardWrap>

            <CategoriesContainer>
              <CategoriesParagraph>Категория*</CategoriesParagraph>
              <CategoriesThemes>
                {["Web Design", "Research", "Copywriting"].map((topic) => (
                  <Theme
                    key={topic}
                    $active={formData.topic === topic}
                    onClick={() => handleTopicSelect(topic)}
                    color={
                      topic === "Web Design"
                        ? "orange"
                        : topic === "Research"
                        ? "green"
                        : "purple"
                    }
                  >
                    {topic}
                  </Theme>
                ))}
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

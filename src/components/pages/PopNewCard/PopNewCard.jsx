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

const PopNewCard = ({ user }) => {
  console.log("PopNewCard rendered");

  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Web Design",
  });

  const handleClose = () => {
    navigate(location.state?.background || "/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategorySelect = (category) => {
    setFormData((prev) => ({ ...prev, category }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Создана задача:", formData);
    handleClose();
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
              <Calendar />
            </PopNewCardWrap>
            <CategoriesContainer>
              <CategoriesParagraph>Категория</CategoriesParagraph>
              <CategoriesThemes>
                <Theme
                  color="orange"
                  $active={formData.category === "Web Design"}
                  onClick={() => handleCategorySelect("Web Design")}
                >
                  Web Design
                </Theme>
                <Theme
                  color="green"
                  $active={formData.category === "Research"}
                  onClick={() => handleCategorySelect("Research")}
                >
                  Research
                </Theme>
                <Theme
                  color="purple"
                  $active={formData.category === "Copywriting"}
                  onClick={() => handleCategorySelect("Copywriting")}
                >
                  Copywriting
                </Theme>
              </CategoriesThemes>
            </CategoriesContainer>
            <CreateButton type="submit" form="formNewCard">
              Создать задачу
            </CreateButton>
          </div>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCards>
  );
};

export default PopNewCard;

import styled from "styled-components";
import Calendar from "../Calendar/Calendar";
import {
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
  PopNewCards,
} from "./PopNewCard.styles";

const PopNewCard = () => {
  return (
    <PopNewCards id="popNewCard">
      <PopNewCardContainer>
        <PopNewCardBlock>
          <div className="pop-new-card__content">
            <PopNewCardTitle>Создание задачи</PopNewCardTitle>
            <PopNewCardClose href="#">&#10006;</PopNewCardClose>
            <PopNewCardWrap>
              <FormNew id="formNewCard" action="#">
                <FormBlock>
                  <Subtitle htmlFor="formTitle">Название задачи</Subtitle>
                  <Input
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </FormBlock>
                <FormBlock>
                  <Subtitle htmlFor="textArea">Описание задачи</Subtitle>
                  <TextArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></TextArea>
                </FormBlock>
              </FormNew>
              <Calendar />
            </PopNewCardWrap>
            <CategoriesContainer>
              <CategoriesParagraph className="subttl">
                Категория
              </CategoriesParagraph>
              <CategoriesThemes>
                <Theme color="orange" active>
                  <p>Web Design</p>
                </Theme>
                <Theme color="green">
                  <p>Research</p>
                </Theme>
                <Theme color="purple">
                  <p>Copywriting</p>
                </Theme>
              </CategoriesThemes>
            </CategoriesContainer>
            <CreateButton id="btnCreate">Создать задачу</CreateButton>
          </div>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCards>
  );
};

export default PopNewCard;

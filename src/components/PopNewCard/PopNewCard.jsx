import styled from "styled-components";
import Calendar from "../Calendar/Calendar";

const PopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

const PopNewCardTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

const PopNewCardClose = styled.a`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;
`;

const PopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const FormNew = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  max-width: 370px;
  margin-top: 14px;
  height: 200px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

const CreateButton = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;

  &:hover {
    background-color: #33399b;
  }
`;

const CategoriesContainer = styled.div`
  margin-bottom: 20px;
`;

const CategoriesParagraph = styled.p`
  margin-bottom: 14px;
`;

const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Theme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: ${(props) => (props.active ? "1" : "0.4")};
  background-color: ${(props) => {
    if (props.color === "orange") return "#FFE4C2";
    if (props.color === "green") return "#B4FDD1";
    if (props.color === "purple") return "#E9D4FF";
    return "transparent";
  }};
  color: ${(props) => {
    if (props.color === "orange") return "#FF6D00";
    if (props.color === "green") return "#06B16E";
    if (props.color === "purple") return "#9A48F1";
    return "inherit";
  }};
`;

const PopNewCards = styled.div`
  display: none;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  background-color: rgba(0, 0, 0, 0.4); /* Added for better visibility */

  &:target {
    display: block;
  }

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

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

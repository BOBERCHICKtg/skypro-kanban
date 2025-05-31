import styled from "styled-components";
import Calendar from "../Calendar/Calendar";

const PopBrowseContainer = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  &.target {
    display: block;
  }
`;

const PopBrowseWrapper = styled.div`
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

const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

const PopBrowseContent = styled.div`
  display: block;
  text-align: left;

  .categories__theme {
    opacity: 1;
  }

  .theme-down {
    display: none;
    margin-bottom: 20px;
  }

  .theme-top {
    display: block;
  }
`;

const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const PopBrowseTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

const CategoryTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  background-color: ${(props) =>
    props.$orange
      ? "#FFE4C2"
      : props.$green
      ? "#B4FDD1"
      : props.$purple
      ? "#E9D4FF"
      : props.$gray
      ? "#94A6BE"
      : "transparent"};
  color: ${(props) =>
    props.$orange
      ? "#FF6D00"
      : props.$green
      ? "#06B16E"
      : props.$purple
      ? "#9A48F1"
      : props.$gray
      ? "#FFFFFF"
      : "inherit"};

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }

  &._active-category {
    opacity: 1 !important;
  }
`;

const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;

const StatusTitle = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }

  &._gray {
    background: #94a6be;
    color: #ffffff;
  }

  &._hide {
    display: none;
  }
`;

const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
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

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }

  .btn-group button {
    margin-right: 8px;
  }
`;

const Button = styled.button`
  border-radius: 4px;
  outline: none;
  cursor: pointer;

  ${(props) =>
    props.$border &&
    `
    border: 0.7px solid #565EEF;
    background: transparent;
    color: #565EEF;
    
    a {
      color: #565EEF;
    }
    
    &:hover {
      background-color: #f0f1ff;
    }
  `}

  ${(props) =>
    props.$background &&
    `
    background: #565EEF;
    border: none;
    color: #FFFFFF;
    
    a {
      color: #FFFFFF;
    }
    
    &:hover {
      background-color: #454cce;
    }
  `}
`;

const ThemeDown = styled.div`
  display: none;
  margin-bottom: 20px;
`;

const Subtitle = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

const PopBrowse = () => {
  return (
    <PopBrowseContainer id="popBrowse">
      <PopBrowseWrapper>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTitle>Название задачи</PopBrowseTitle>
              <CategoryTheme $orange className="_active-category">
                <p>Web Design</p>
              </CategoryTheme>
            </PopBrowseTopBlock>
            <PopBrowseStatus>
              <StatusTitle>Статус</StatusTitle>
              <StatusThemes>
                <StatusTheme className="_hide">
                  <p>Без статуса</p>
                </StatusTheme>
                <StatusTheme className="_gray">
                  <p>Нужно сделать</p>
                </StatusTheme>
                <StatusTheme className="_hide">
                  <p>В работе</p>
                </StatusTheme>
                <StatusTheme className="_hide">
                  <p>Тестирование</p>
                </StatusTheme>
                <StatusTheme className="_hide">
                  <p>Готово</p>
                </StatusTheme>
              </StatusThemes>
            </PopBrowseStatus>
            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <FormBrowseBlock>
                  <Subtitle htmlFor="textArea01">Описание задачи</Subtitle>
                  <FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  />
                </FormBrowseBlock>
              </PopBrowseForm>
              <Calendar />
            </PopBrowseWrap>
            <ThemeDown className="theme-down">
              <Subtitle>Категория</Subtitle>
              <CategoryTheme $orange className="_active-category">
                <p>Web Design</p>
              </CategoryTheme>
            </ThemeDown>
            <ButtonGroup className="pop-browse__btn-browse">
              <div className="btn-group">
                <Button $border>
                  <a href="#">Редактировать задачу</a>
                </Button>
                <Button $border>
                  <a href="#">Удалить задачу</a>
                </Button>
              </div>
              <Button $background>
                <a href="#">Закрыть</a>
              </Button>
            </ButtonGroup>
            <ButtonGroup className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <Button $background>
                  <a href="#">Сохранить</a>
                </Button>
                <Button $border>
                  <a href="#">Отменить</a>
                </Button>
                <Button $border id="btnDelete">
                  <a href="#">Удалить задачу</a>
                </Button>
              </div>
              <Button $background>
                <a href="#">Закрыть</a>
              </Button>
            </ButtonGroup>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseWrapper>
    </PopBrowseContainer>
  );
};

export default PopBrowse;

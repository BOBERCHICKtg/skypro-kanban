import styled from "styled-components";
import Calendar from "../Calendar/Calendar";

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
  BtnGroup,
} from "./PopBrowse.styles";

const PopBrowse = () => {
  return (
    <PopBrowseContainer id="popBrowse">
      <PopBrowseWrapper>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTitle>Название задачи</PopBrowseTitle>
              <CategoryTheme $orange>
                <p>Web Design</p>
              </CategoryTheme>
            </PopBrowseTopBlock>
            <PopBrowseStatus>
              <StatusTitle>Статус</StatusTitle>
              <StatusThemes>
                <StatusTheme>
                  <p>Без статуса</p>
                </StatusTheme>
                <StatusTheme>
                  <p>Нужно сделать</p>
                </StatusTheme>
                <StatusTheme>
                  <p>В работе</p>
                </StatusTheme>
                <StatusTheme>
                  <p>Тестирование</p>
                </StatusTheme>
                <StatusTheme>
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
              <CategoryTheme $orange>
                <p>Web Design</p>
              </CategoryTheme>
            </ThemeDown>
            <ButtonGroup>
              <BtnGroup>
                <Button $border>
                  <a href="#">Редактировать задачу</a>
                </Button>
                <Button $border>
                  <a href="#">Удалить задачу</a>
                </Button>
              </BtnGroup>
              <Button $background>
                <a href="#">Закрыть</a>
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <BtnGroup>
                <Button $background>
                  <a href="#">Сохранить</a>
                </Button>
                <Button $border>
                  <a href="#">Отменить</a>
                </Button>
                <Button $border id="btnDelete">
                  <a href="#">Удалить задачу</a>
                </Button>
              </BtnGroup>
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

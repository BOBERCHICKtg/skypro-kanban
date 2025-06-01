import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Reset и базовые стили */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Псевдоэлементы */
  *:before,
  *:after {
    box-sizing: border-box;
  }

  /* Ссылки */
  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  /* Кнопки */
  button,
  ._btn {
    cursor: pointer;
    outline: none;
    background: none;
    border: none;
    font-family: inherit;
  }

  /* Списки */
  ul, ol {
    list-style: none;
  }

  /* Анимации */
  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: auto;
      opacity: 1;
    }
  }

  /* Основные HTML-элементы */
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: #000000;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Медиа-элементы */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* Формы */
  input, button, textarea, select {
    font: inherit;
  }

  /* Текст */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /* Улучшение читаемости */
  #root {
    isolation: isolate;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

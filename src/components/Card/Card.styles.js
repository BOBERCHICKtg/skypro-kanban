import { Link } from "react-router-dom";
import styled from "styled-components";

export const Cards = styled.div`
  .cards {
    width: 100%;
    display: block;
    position: relative;
  }
`;
export const CardItemWrapper = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const Card = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Theme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;

  ${(props) =>
    props.themeColor === "orange" &&
    `
    background-color: #ffe4c2;
    color: #ff6d00;
  `}

  ${(props) =>
    props.themeColor === "green" &&
    `
    background-color: #b4fdd1;
    color: #06b16e;
  `}
  
  ${(props) =>
    props.themeColor === "purple" &&
    `
    background-color: #e9d4ff;
    color: #9a48f1;
  `}
  
  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`;

export const CardButton = styled(Link)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;

export const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94a6be;
`;

export const CardTitle = styled.a`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
  }

  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
`;

export const StatusSelect = styled.select`
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #94a6be;
  background: #fff;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  margin-right: 8px;
`;

export const DeleteButton = styled.button`
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #ff4d4d;
  background: #fff;
  color: #ff4d4d;
  font-size: 14px;
  cursor: pointer;
  margin-right: 8px;
  transition: all 0.3s;

  &:hover {
    background: #ff4d4d;
    color: #fff;
  }
`;

export const CardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

// Добавьте другие необходимые стилизованные компоненты
export const CardItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${(props) =>
    props.color === "green"
      ? "#B4FDD1"
      : props.color === "purple"
      ? "#E9D4FF"
      : props.color === "orange"
      ? "#FFE4C2"
      : ""};

  p {
    color: ${(props) =>
      props.color === "green"
        ? "#06B16E"
        : props.color === "purple"
        ? "#9A48F1"
        : props.color === "orange"
        ? "#FF6D00"
        : ""};
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`;

export const CardWrapper = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

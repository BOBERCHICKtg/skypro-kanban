import styled from "styled-components";

export const PopNewCards = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

export const PopNewCardContainer = styled.div`
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const PopNewCardBlock = styled.div`
  padding: 40px 30px 48px;
`;

export const PopNewCardTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const PopNewCardClose = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;
  font-size: 24px;
  background: none;
  border: none;
  padding: 0;
  transition: color 0.3s ease;

  &:hover {
    color: #000;
  }
`;

export const PopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

export const FormNew = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Subtitle = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #565eef;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.5;
  min-height: 200px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #565eef;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const CreateButton = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  cursor: pointer;
  float: right;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #33399b;
  }

  &:disabled {
    background-color: #d4dbe5;
    cursor: not-allowed;
  }
`;

export const CategoriesContainer = styled.div`
  margin-bottom: 30px;
`;

export const CategoriesParagraph = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

export const Theme = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 0 20px;
  border-radius: 24px;
  cursor: pointer;
  opacity: ${(props) => (props.$active ? "1" : "0.4")};
  transition: opacity 0.3s ease;
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

  &:hover {
    opacity: 0.8;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin: 10px 0;
`;

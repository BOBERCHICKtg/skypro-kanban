import styled from "styled-components";

export const PopBrowseContainer = styled.div`
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

export const PopBrowseWrapper = styled.div`
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

export const PopBrowseBlock = styled.div`
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

export const PopBrowseContent = styled.div`
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

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CategoryTheme = styled.div`
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

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;

export const StatusTitle = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: pointer;
  transition: all 0.2s ease;

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }

  &._gray {
    background: #94a6be;
    color: #ffffff;
  }

  &._active {
    background: #baeaff;
    border-color: #0077cc;
    color: #005599;
    font-weight: 600;
  }

  &._hide {
    display: none;
  }

  &:hover {
    background: #e6f7ff;
    border-color: #0077cc;
  }
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseArea = styled.textarea`
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

export const ButtonGroup = styled.div`
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

export const Button = styled.button`
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

export const ThemeDown = styled.div`
  display: none;
  margin-bottom: 20px;
`;

export const Subtitle = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

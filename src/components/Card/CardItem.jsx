import React from "react";
import styled from "styled-components";

// Styled components
const CardItemWrapper = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

const Card = styled.div`
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

const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Theme = styled.div`
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

const CardButton = styled.a`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94a6be;
`;

const CardTitle = styled.a`
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

const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const CardDate = styled.div`
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

function CardItem({ theme, title, date, status }) {
  // Determine theme color class
  const getThemeColor = () => {
    switch (theme) {
      case "Web Design":
        return "orange";
      case "Research":
        return "green";
      case "Copywriting":
        return "purple";
      default:
        return "";
    }
  };

  const themeColor = getThemeColor();

  return (
    <CardItemWrapper>
      <Card>
        <CardGroup>
          <Theme themeColor={themeColor}>
            <p>{theme}</p>
          </Theme>
          <CardButton href="#popBrowse" target="_self">
            <Dot />
            <Dot />
            <Dot />
          </CardButton>
        </CardGroup>
        <CardContent>
          <CardTitle href="#" target="_blank">
            {title}
          </CardTitle>
          <CardDate>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <g clipPath="url(#clip0_1_415)">
                <path
                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_415">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>{date}</p>
          </CardDate>
        </CardContent>
      </Card>
    </CardItemWrapper>
  );
}

export default CardItem;

import styled from "styled-components";
import Card from "../Card/Card";
import Column from "../Column/Column";

const MainContainer = styled.main`
  width: 100%;
  background-color: #eaeef6;
`;

const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
  color: #333;
`;

const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

const MainContent = styled.div`
  width: 100%;
  display: flex;
`;

const MainColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;
`;

const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  p {
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

const CardsContainer = styled.div`
  width: 100%;
  display: block;
  position: relative;
`;

const CardItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

const CardWrapper = styled.div`
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

const CardTheme = styled.div`
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

const CardButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
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

const Main = ({ loading }) => {
  return (
    <MainContainer>
      {!loading && (
        <LoadingMessage>
          <p>Загружаю задачи...</p>
        </LoadingMessage>
      )}

      {loading && (
        <Container>
          <MainBlock>
            <MainContent>
              <MainColumn className="column">
                <ColumnTitle>
                  <p>Без статуса</p>
                </ColumnTitle>
                <Card loading={loading} />
              </MainColumn>
              <Column text="Нужно сделать" />
              <MainColumn>
                <ColumnTitle>
                  <p>В работе</p>
                </ColumnTitle>
                <CardsContainer>
                  <CardItem>
                    <CardWrapper>
                      <CardGroup>
                        <CardTheme color="green">
                          <p>Research</p>
                        </CardTheme>
                        <a href="#popBrowse" target="_self">
                          <CardButton>
                            <div></div>
                            <div></div>
                            <div></div>
                          </CardButton>
                        </a>
                      </CardGroup>
                      <CardContent>
                        <a href="" target="_blank">
                          <CardTitle>Название задачи</CardTitle>
                        </a>
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
                          <p>30.10.23</p>
                        </CardDate>
                      </CardContent>
                    </CardWrapper>
                  </CardItem>

                  <CardItem>
                    <CardWrapper>
                      <CardGroup>
                        <CardTheme color="purple">
                          <p>Copywriting</p>
                        </CardTheme>
                        <a href="#popBrowse" target="_self">
                          <CardButton>
                            <div></div>
                            <div></div>
                            <div></div>
                          </CardButton>
                        </a>
                      </CardGroup>
                      <CardContent>
                        <a href="" target="_blank">
                          <CardTitle>Название задачи</CardTitle>
                        </a>
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
                          <p>30.10.23</p>
                        </CardDate>
                      </CardContent>
                    </CardWrapper>
                  </CardItem>

                  <CardItem>
                    <CardWrapper>
                      <CardGroup>
                        <CardTheme color="orange">
                          <p>Web Design</p>
                        </CardTheme>
                        <a href="#popBrowse" target="_self">
                          <CardButton>
                            <div></div>
                            <div></div>
                            <div></div>
                          </CardButton>
                        </a>
                      </CardGroup>
                      <CardContent>
                        <a href="" target="_blank">
                          <CardTitle>Название задачи</CardTitle>
                        </a>
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
                          <p>30.10.23</p>
                        </CardDate>
                      </CardContent>
                    </CardWrapper>
                  </CardItem>
                </CardsContainer>
              </MainColumn>
              <MainColumn>
                <ColumnTitle>
                  <p>Тестирование</p>
                </ColumnTitle>
                <CardsContainer>
                  <CardItem>
                    <CardWrapper>
                      <CardGroup>
                        <CardTheme color="green">
                          <p>Research</p>
                        </CardTheme>
                        <a href="#popBrowse" target="_self">
                          <CardButton>
                            <div></div>
                            <div></div>
                            <div></div>
                          </CardButton>
                        </a>
                      </CardGroup>
                      <CardContent>
                        <a href="" target="_blank">
                          <CardTitle>Название задачи</CardTitle>
                        </a>
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
                          <p>30.10.23</p>
                        </CardDate>
                      </CardContent>
                    </CardWrapper>
                  </CardItem>
                </CardsContainer>
              </MainColumn>
              <MainColumn>
                <ColumnTitle>
                  <p>Готово</p>
                </ColumnTitle>
                <CardsContainer>
                  <CardItem>
                    <CardWrapper>
                      <CardGroup>
                        <CardTheme color="green">
                          <p>Research</p>
                        </CardTheme>
                        <a href="#popBrowse" target="_self">
                          <CardButton>
                            <div></div>
                            <div></div>
                            <div></div>
                          </CardButton>
                        </a>
                      </CardGroup>
                      <CardContent>
                        <a href="" target="_blank">
                          <CardTitle>Название задачи</CardTitle>
                        </a>
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
                          <p>30.10.23</p>
                        </CardDate>
                      </CardContent>
                    </CardWrapper>
                  </CardItem>
                </CardsContainer>
              </MainColumn>
            </MainContent>
          </MainBlock>
        </Container>
      )}
    </MainContainer>
  );
};

export default Main;

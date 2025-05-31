import styled from "styled-components";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  const Wraper = styled.div`
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: #f1f1f1;
  `;

  const PopExit = styled.div`
    display: none;
    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;

    &:target {
      display: block;
    }
  `;

  const PopConteiner = styled.div`
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

  const PopExitBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #ffffff;
    max-width: 370px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid #d4dbe5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
    position: relative;
    transform: translateY(-50%);

    @media only screen and (max-width: 375px) {
      padding: 50px 20px;
    }
  `;

  const PopExitFormGroup = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 375px) {
      display: block;
    }
  `;

  const BaseButton = styled.button`
    border-radius: 4px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  `;

  const PopExitYes = styled(BaseButton)`
    width: 153px;
    height: 30px;
    background-color: #565eef;
    color: #ffffff;
    margin-right: 10px;

    &:hover {
      background-color: #33399b;
    }

    a {
      color: inherit;
      text-decoration: none;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media only screen and (max-width: 375px) {
      width: 100%;
      height: 40px;
      margin-right: 0;
      margin-bottom: 10px;
    }
  `;

  const PopExitNo = styled(BaseButton)`
    background-color: transparent;
    border: 0.7px solid #565eef;
    color: #565eef;

    &:hover {
      background-color: #33399b;
      color: #ffffff;
    }
  `;

  return (
    <Wraper>
      <PopExit id="popExit">
        <PopConteiner>
          <PopExitBlock>
            <div className="pop-exit__ttl">
              <h2>Выйти из аккаунта?</h2>
            </div>
            <form className="pop-exit__form" id="formExit" action="#">
              <PopExitFormGroup>
                <PopExitYes
                  className="pop-exit__exit-yes _hover01"
                  id="exitYes"
                >
                  <a href="modal/signin.html">Да, выйти</a>{" "}
                </PopExitYes>
                <PopExitNo className="pop-exit__exit-no _hover03" id="exitNo">
                  <a href="main.html">Нет, остаться</a>{" "}
                </PopExitNo>
              </PopExitFormGroup>
            </form>
          </PopExitBlock>
        </PopConteiner>
      </PopExit>
      <PopNewCard />
      <PopBrowse />
      <Header />
      <Main loading={loading} />
    </Wraper>
  );
}

export default App;

/* upDate */

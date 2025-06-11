import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/Header/Header";
import Main from "./components/pages/MainPage/MainPage";
import PopBrowse from "./components/pages/PopBrowse/PopBrowse";
import PopNewCard from "./components/pages/PopNewCard/PopNewCard";
import { useEffect, useState } from "react";
import {
  Wraper,
  PopExit,
  PopConteiner,
  PopExitBlock,
  PopExitFormGroup,
  PopExitYes,
  PopExitNo,
} from "./App.styles";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignInPage from "./components/pages/SignInPage/SignInPage";
import SignUpPage from "./components/pages/SignUpPage/SignUpPage";
import NotFoundPage from "./components/pages/NotFound/NotFoundPage";

function App() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  const handleExitYes = () => navigate("/sign-in");
  const handleExitNo = () => navigate("/");

  return (
    <>
      <GlobalStyles />
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
                    onClick={handleExitYes}
                  >
                    Да, выйти
                  </PopExitYes>
                  <PopExitNo
                    className="pop-exit__exit-no _hover03"
                    id="exitNo"
                    onClick={handleExitNo}
                  >
                    Нет, остаться
                  </PopExitNo>
                </PopExitFormGroup>
              </form>
            </PopExitBlock>
          </PopConteiner>
        </PopExit>

        <PopNewCard />
        <PopBrowse />
        <Header />

        <Routes>
          <Route path="/" element={<Main loading={loading} />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="\*" element={<NotFoundPage />} />
        </Routes>
      </Wraper>
    </>
  );
}

export default App;

import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/Header/Header";
import Main from "./components/pages/MainPage/MainPage";
import { useState, useEffect, useCallback } from "react";
import {
  Wraper,
  PopExit,
  PopConteiner,
  PopExitBlock,
  PopExitFormGroup,
  PopExitYes,
  PopExitNo,
} from "./App.styles";
import { Routes, Route, useNavigate, Navigate, Outlet } from "react-router-dom";
import SignInPage from "./components/pages/SignInPage/SignInPage";
import PopNewCard from "./components/pages/PopNewCard/PopNewCard";

// Компонент для защищённых маршрутов
const ProtectedRoute = ({ isAllowed, redirectPath = "/sign-in", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

function App() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(() => {
    // Проверяем авторизацию при первоначальной загрузке
    return !!localStorage.getItem("authToken");
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  const handleExitYes = () => {
    localStorage.removeItem("authToken");
    setIsAuth(false);
    navigate("/sign-in");
  };

  const handleExitNo = () => navigate("/");

  const [words, setWords] = useState([]);
  const [error, setError] = useState("");
  const getWords = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchWords({
        // пока у нас не реализована авторизация, передаём токен вручную
        token: "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck",
      });
      if (data) setWords(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    getWords();
  }, [getWords]);

  return (
    <>
      <GlobalStyles />
      <Wraper>
        {/* Попап выхода */}
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

        <Header />

        <Routes>
          {/* Публичные маршруты */}
          <Route
            path="/sign-in"
            element={<SignInPage setIsAuth={setIsAuth} />}
          />
          <Route
            path="/sign-in"
            element={<SignInPage setIsAuth={setIsAuth} />}
          />
          <Route path="/PopNewCard" element={<PopNewCard />} />

          {/* Защищённые маршруты */}
          <Route element={<ProtectedRoute isAllowed={isAuth} />}>
            <Route path="/" element={<Main loading={loading} />} />
          </Route>

          {/* Перенаправление для неавторизованных */}
          <Route
            path="*"
            element={<Navigate to={isAuth ? "/" : "/sign-in"} />}
          />
        </Routes>
      </Wraper>
    </>
  );
}

export default App;

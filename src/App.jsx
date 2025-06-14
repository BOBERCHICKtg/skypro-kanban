import { useState, useEffect } from "react";
import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/Header/Header";
import Main from "./components/pages/MainPage/MainPage";
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
import SignUpPage from "./components/pages/SignUpPage/SignUpPage";

const ProtectedRoute = ({ isAllowed, redirectPath = "/sign-in", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

function App() {
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Проверка авторизации при загрузке
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setIsAuth(true);
      setUser(JSON.parse(userData));
    }
    setLoading(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setIsAuth(false);
    setUser(null);
    navigate("/sign-in");
  };

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
              <div className="pop-exit__form">
                <PopExitFormGroup>
                  <PopExitYes
                    className="pop-exit__exit-yes _hover01"
                    onClick={handleLogout}
                  >
                    Да, выйти
                  </PopExitYes>
                  <PopExitNo
                    className="pop-exit__exit-no _hover03"
                    onClick={() => navigate("/")}
                  >
                    Нет, остаться
                  </PopExitNo>
                </PopExitFormGroup>
              </div>
            </PopExitBlock>
          </PopConteiner>
        </PopExit>

        {/* Шапка с передачей данных пользователя */}
        <Header user={user} onLogout={handleLogout} />

        {/* Маршруты */}
        <Routes>
          <Route
            path="/sign-in"
            element={<SignInPage setIsAuth={setIsAuth} setUser={setUser} />}
          />
          <Route path="/sign-up" element={<SignUpPage />} />

          <Route element={<ProtectedRoute isAllowed={isAuth} />}>
            <Route path="/" element={<Main loading={loading} user={user} />} />
          </Route>

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

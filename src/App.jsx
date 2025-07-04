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
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import SignInPage from "./components/pages/SignInPage/SignInPage";
import SignUpPage from "./components/pages/SignUpPage/SignUpPage";
import PopBrowse from "./components/pages/PopBrowse/PopBrowse";
import PopNewCard from "./components/pages/PopNewCard/PopNewCard";

const ProtectedRoute = ({ isAllowed, redirectPath = "/sign-in", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

function App() {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state?.background;

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
        <PopExit id="popExit">
          <PopConteiner>
            <PopExitBlock>
              <div className="pop-exit__ttl">
                <h2>Выйти из аккаунта?</h2>
              </div>
              <div className="pop-exit__form">
                <PopExitFormGroup>
                  <PopExitYes onClick={handleLogout}>Да, выйти</PopExitYes>
                  <PopExitNo onClick={() => navigate("/")}>
                    Нет, остаться
                  </PopExitNo>
                </PopExitFormGroup>
              </div>
            </PopExitBlock>
          </PopConteiner>
        </PopExit>

        <Header user={user} onLogout={handleLogout} />

        <Routes location={background || location}>
          <Route
            path="/sign-in"
            element={<SignInPage setIsAuth={setIsAuth} setUser={setUser} />}
          />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/pop-browse/:id" element={<PopBrowse />} />

          <Route element={<ProtectedRoute isAllowed={isAuth} />}>
            <Route
              path="/"
              element={<Main tasks={tasks} setTasks={setTasks} />}
            />
          </Route>

          <Route
            path="*"
            element={<Navigate to={isAuth ? "/" : "/sign-in"} />}
          />
        </Routes>

        {background && (
          <Routes>
            <Route
              path="/pop-new-card"
              element={
                <ProtectedRoute isAllowed={isAuth}>
                  <PopNewCard user={user} setTasks={setTasks} />
                </ProtectedRoute>
              }
            />
          </Routes>
        )}
      </Wraper>
    </>
  );
}

export default App;

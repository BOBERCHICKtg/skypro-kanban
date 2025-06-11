import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Main from "./pages/MainPage/MainPage";

function AppRoutes() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Главная страница */}
        <Route path="/" element={<Main loading={loading} />} />
        {/* Страница входа */}
        <Route path="/sign-in" element={<SignInPage />} />
        {/* Страница регистрации */}
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

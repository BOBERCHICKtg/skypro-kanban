import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  // Функция для получения пользователя из localStorage
  const getInitialUser = () => {
    try {
      // Проверяем все возможные ключи
      const storedUser =
        localStorage.getItem("userInfo") ||
        localStorage.getItem("userData") ||
        localStorage.getItem("user");

      if (storedUser) {
        return JSON.parse(storedUser);
      }
      return null;
    } catch (error) {
      console.error("Ошибка парсинга данных пользователя:", error);
      // Очищаем поврежденные данные
      localStorage.removeItem("userInfo");
      localStorage.removeItem("userData");
      localStorage.removeItem("user");
      return null;
    }
  };

  const [user, setUser] = useState(getInitialUser);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Дополнительная проверка при монтировании
    const storedUser = getInitialUser();
    if (storedUser !== user) {
      setUser(storedUser);
    }
    setIsLoading(false);
  }, []);

  // Функция обновления информации пользователя
  const updateUserInfo = (userData) => {
    try {
      setUser(userData);
      if (userData) {
        // Сохраняем во все ключи для надежности
        localStorage.setItem("userInfo", JSON.stringify(userData));
        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("user", JSON.stringify(userData));
      } else {
        // Очищаем все ключи при выходе
        localStorage.removeItem("userInfo");
        localStorage.removeItem("userData");
        localStorage.removeItem("user");
        localStorage.removeItem("userToken");
      }
    } catch (error) {
      console.error("Ошибка обновления данных пользователя:", error);
    }
  };

  // Функция входа
  const login = (loginData) => {
    try {
      // loginData должен содержать { user, token }
      updateUserInfo(loginData.user);

      if (loginData.token) {
        localStorage.setItem("userToken", loginData.token);
      }

      return true;
    } catch (error) {
      console.error("Ошибка входа:", error);
      return false;
    }
  };

  // Функция выхода
  const logout = () => {
    try {
      updateUserInfo(null);
      localStorage.removeItem("userToken");
      return true;
    } catch (error) {
      console.error("Ошибка выхода:", error);
      return false;
    }
  };

  // Функция получения токена
  const getToken = () => {
    return localStorage.getItem("userToken");
  };

  // Проверка авторизации
  const isAuthenticated = !!user && !isLoading;

  const contextValue = {
    user,
    isLoading,
    isAuthenticated,
    login,
    logout,
    updateUserInfo,
    getToken,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

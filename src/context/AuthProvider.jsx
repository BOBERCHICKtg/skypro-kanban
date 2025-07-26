import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { checkLs } from "./../utils/checkLs";

// Написали обычный реакт-компонент, который принимает всё приложение
// В виде пропса children
const AuthProvider = ({ children }) => {
  // checkLs проверяет лс на наличие ключа userInfo
  const [user, setUser] = useState(checkLs()); // Здесь будет лежать инфа о юзере

  useEffect(() => {
    // А тут мы проверяем ЛС, когда приложение запускается
    try {
      const storedUser = localStorage.getItem("userInfo");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных из localStorage:", error);
    }
  }, []);

  // Обновляем данные о пользователе и сохраняем в лс
  const updateUserInfo = (userData) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem("userInfo", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userInfo");
    }
  };

  const login = (loginData) => {
    updateUserInfo(loginData);
    return true;
  };

  const logout = () => {
    updateUserInfo(null);
    return true;
  };
  // В сам провайдер нужно обязательно прокинуть те значения,
  // которые мы хотим использовать в разных частях приложения
  return (
    <AuthContext.Provider value={{ user, login, logout, updateUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

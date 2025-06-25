import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/user";

export async function signIn({ login, password }) {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      { login, password },
      {
        headers: {
          "Content-Type": "", // Явно очищаем заголовок
        },
      }
    );

    // Сохраняем токен в localStorage
    if (response.data.token) {
      localStorage.setItem("userToken", response.data.token);
      // Можно также сохранить данные пользователя, если они нужны
      localStorage.setItem("userData", JSON.stringify(response.data.user));
    }

    return response.data; // Должен содержать { user, token }
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка входа");
  }
}

export async function signUp(userData) {
  const formData = new FormData();
  formData.append("name", userData.name);
  formData.append("login", userData.login);
  formData.append("password", userData.password);

  const response = await axios.post(API_URL, formData);

  // После регистрации можно сразу сохранить токен, если API возвращает его
  if (response.data.token) {
    localStorage.setItem("userToken", response.data.token);
  }

  return response.data;
}

// Дополнительная функция для выхода (очистки токена)
export function logout() {
  localStorage.removeItem("userToken");
  localStorage.removeItem("userData");
}

// Функция для проверки авторизации
export function isAuthenticated() {
  return !!localStorage.getItem("userToken");
}

// Функция для получения токена
export function getToken() {
  return localStorage.getItem("userToken");
}

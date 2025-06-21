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
  return response.data;
}

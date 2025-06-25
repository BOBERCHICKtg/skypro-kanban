import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/user";

export async function signIn({ login, password }) {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      { login, password },
      {
        headers: {
          "Content-Type": "",
        },
      }
    );

    console.log("Ответ сервера:", response.data); // Перед сохранением токена

    if (response.data.token) {
      localStorage.setItem("userToken", response.data.token);

      localStorage.setItem("userData", JSON.stringify(response.data.user));
    }

    return response.data;
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

  if (response.data.token) {
    localStorage.setItem("userToken", response.data.token);
  }

  return response.data;
}

export function isAuthenticated() {
  return !!localStorage.getItem("userToken");
}

export function getToken() {
  return localStorage.getItem("userToken");
}



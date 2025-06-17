import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/user";

export async function signIn({ login, password }) {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      login,
      password,
    });
    return response.data.user;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка входа");
  }
}

export async function signUp(userData) {
  const response = await axios.post(API_URL, userData);
  return response.data;
}

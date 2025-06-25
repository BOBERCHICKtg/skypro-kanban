import axios from "axios";

// Базовые настройки
const WORDS_API_URL = "https://wedev-api.sky.pro/api/words";
const KANBAN_API_URL = "https://wedev-api.sky.pro/api/kanban";

// ========== Существующие функции (не изменяем!) ========== //
export async function fetchWords({ token }) {
  try {
    const { data } = await axios.get(WORDS_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || error.message);
    }
    throw error;
  }
}

export async function postWord({ token, word }) {
  try {
    const { data } = await axios.post(WORDS_API_URL, word, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data?.tasks || data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || error.message);
    }
    throw error;
  }
}

// ========== Новые функции для Kanban API ========== //
export async function fetchKanbanTasks({ token }) {
  try {
    const { data } = await axios.get(KANBAN_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.tasks; // Возвращаем только массив задач
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || error.message);
    }
    throw error;
  }
}

export async function createKanbanTask({ token, task }) {
  try {
    const { data } = await axios.post(KANBAN_API_URL, task, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || error.message);
    }
    throw error;
  }
}

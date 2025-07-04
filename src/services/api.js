import axios from "axios";

const API_BASE_URL = "https://wedev-api.sky.pro/api";
const KANBAN_API_URL = `${API_BASE_URL}/kanban`;

// Валидатор JSON с подробными ошибками
const validateJSON = (data) => {
  try {
    if (typeof data === "string") {
      const parsed = JSON.parse(data);
      if (parsed && typeof parsed === "object") {
        return parsed;
      }
      throw new Error("Parsed JSON is not an object");
    }
    return data;
  } catch (e) {
    throw new Error(`Invalid JSON: ${e.message}`);
  }
};

// Общая обработка ошибок API
const handleApiError = (error) => {
  if (error.response) {
    try {
      const errorData = validateJSON(error.response.data);
      const message =
        errorData.message ||
        errorData.error ||
        `HTTP Error ${error.response.status}`;
      throw new Error(message);
    } catch (parseError) {
      throw new Error(`Server error: ${error.response.status}`);
    }
  }
  throw error;
};

// API для Kanban
export const kanbanAPI = {
  // Получение задач
  fetchTasks: async ({ token }) => {
    try {
      const response = await axios.get(KANBAN_API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        transformResponse: [validateJSON],
      });
      return validateJSON(response.data).tasks || [];
    } catch (error) {
      throw handleApiError(error);
    }
  },

  // Создание задачи
  createTask: async ({ token, task }) => {
    try {
      const jsonData = JSON.stringify({
        title: task.title || "Новая задача",
        description: task.description || "",
        topic: task.topic || "Research",
        status: task.status || "Без статуса",
        date: task.date || new Date().toISOString(),
      });

      validateJSON(jsonData); // Валидация перед отправкой

      const response = await axios.post(KANBAN_API_URL, jsonData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "",
        },
        transformRequest: [(data) => data],
        transformResponse: [validateJSON],
      });

      return validateJSON(response.data);
    } catch (error) {
      throw handleApiError(error);
    }
  },

  // Обновление задачи
  updateTask: async ({ token, id, task }) => {
    try {
      const jsonData = JSON.stringify(task);
      validateJSON(jsonData);

      const response = await axios.put(`${KANBAN_API_URL}/${id}`, jsonData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "",
          Accept: "application/json",
        },
        transformRequest: [(data) => data],
        transformResponse: [validateJSON],
      });

      return validateJSON(response.data);
    } catch (error) {
      throw handleApiError(error);
    }
  },

  // Удаление задачи
  deleteTask: async ({ token, id }) => {
    try {
      const response = await axios.delete(`${KANBAN_API_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        transformResponse: [validateJSON],
      });
      return validateJSON(response.data);
    } catch (error) {
      throw handleApiError(error);
    }
  },

  // Изменение статуса
  moveTask: async ({ token, id, newStatus }) => {
    try {
      const jsonData = JSON.stringify({ status: newStatus });
      validateJSON(jsonData);

      const response = await axios.patch(
        `${KANBAN_API_URL}/${id}/status`,
        jsonData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "",
            Accept: "application/json",
          },
          transformRequest: [(data) => data],
          transformResponse: [validateJSON],
        }
      );

      return validateJSON(response.data);
    } catch (error) {
      throw handleApiError(error);
    }
  },
};

// Экспорт для обратной совместимости
export const fetchKanbanTasks = kanbanAPI.fetchTasks;
export const createKanbanTask = kanbanAPI.createTask;
export const updateKanbanTask = kanbanAPI.updateTask;
export const deleteKanbanTask = kanbanAPI.deleteTask;
export const moveKanbanTask = kanbanAPI.moveTask;

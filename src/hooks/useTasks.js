/* import { useState, useEffect, useCallback } from "react";

const API_URL = "https://wedev-api.sky.pro/api/kanban";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAuthToken = () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("Требуется авторизация. Токен не найден.");
    }
    return token;
  };

  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Ошибка HTTP: ${response.status}`);
      }

      const data = await response.json();
      setTasks(data.tasks || []);
    } catch (err) {
      setError(err.message);
      console.error("Ошибка при загрузке задач:", err);
      setTasks([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchTaskById = async (taskId) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_URL}/${taskId}`, {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Задача не найдена");
        }
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      const data = await response.json();
      return data.task;
    } catch (err) {
      setError(err.message);
      console.error("Ошибка при загрузке задачи:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Добавление новой задачи
  const addTask = async (taskData) => {
    try {
      setLoading(true);
      setError(null);

      // Установка значений по умолчанию
      const defaultTask = {
        title: "Новая задача",
        topic: "Research",
        status: "Без статуса",
        description: "",
        date: new Date().toISOString(),
        ...taskData,
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(defaultTask),
      });

      if (!response.ok) {
        if (response.status === 400) {
          throw new Error("Неверный формат данных");
        }
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      const data = await response.json();
      setTasks(data.tasks || []);
      return data.tasks;
    } catch (err) {
      setError(err.message);
      console.error("Ошибка при добавлении задачи:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Обновление задачи
  const updateTask = async (taskId, taskData) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_URL}/${taskId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      });

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      const data = await response.json();
      setTasks(data.tasks || []);
      return data.tasks;
    } catch (err) {
      setError(err.message);
      console.error("Ошибка при обновлении задачи:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_URL}/${taskId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      const data = await response.json();
      setTasks(data.tasks || []);
      return data.tasks;
    } catch (err) {
      setError(err.message);
      console.error("Ошибка при удалении задачи:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return {
    tasks,
    loading,
    error,
    fetchTasks,
    fetchTaskById,
    addTask,
    updateTask,
    deleteTask,
  };
};
 */
import { useState, useEffect } from "react";

const API_URL = "https://wedev-api.sky.pro/api/kanban";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem("userToken");
      console.log("Токен из localStorage:", token);

      if (!token) {
        throw new Error("Требуется авторизация. Токен не найден.");
      }

      // Делаем запрос к API
      const response = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Ответ сервера:", response); // Теперь response существует

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      const data = await response.json();
      setTasks(data.tasks);
    } catch (err) {
      setError(err.message);
      console.error("Ошибка:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return { tasks, loading, error, refetch: fetchTasks };
};

import axios from "axios";

const API_BASE_URL = "https://wedev-api.sky.pro/api";
const WORDS_API_URL = `${API_BASE_URL}/words`;
const KANBAN_API_URL = `${API_BASE_URL}/kanban`;

const handleApiError = (error) => {
  if (error.response) {
    const { status, data } = error.response;
    const errorMessage = data.message || `HTTP Error ${status}`;
    throw new Error(errorMessage);
  }
  throw error;
};

export async function fetchWords({ token }) {
  try {
    const { data } = await axios.get(WORDS_API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    handleApiError(error);
  }
}

export async function postWord({ token, word }) {
  try {
    const { data } = await axios.post(WORDS_API_URL, word, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data?.tasks || data;
  } catch (error) {
    handleApiError(error);
  }
}

export async function fetchKanbanTasks({ token }) {
  try {
    const { data } = await axios.get(KANBAN_API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data.tasks || [];
  } catch (error) {
    handleApiError(error);
  }
}

export async function getKanbanTask({ token, id }) {
  try {
    const { data } = await axios.get(`${KANBAN_API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data.task;
  } catch (error) {
    handleApiError(error);
  }
}

export async function createKanbanTask({ token, task }) {
  try {

    const completeTask = {
      title: "Новая задача",
      topic: "Research",
      status: "Без статуса",
      description: "",
      date: new Date().toISOString(),
      ...task,
    };

    const { data } = await axios.post(KANBAN_API_URL, completeTask, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return data.tasks || data;
  } catch (error) {
    handleApiError(error);
  }
}

export async function updateKanbanTask({ token, id, task }) {
  try {
    const { data } = await axios.put(`${KANBAN_API_URL}/${id}`, task, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return data.tasks || data;
  } catch (error) {
    handleApiError(error);
  }
}

export async function deleteKanbanTask({ token, id }) {
  try {
    const { data } = await axios.delete(`${KANBAN_API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data.tasks || data;
  } catch (error) {
    handleApiError(error);
  }
}


export async function moveKanbanTask({ token, id, newStatus }) {
  try {
    const { data } = await axios.patch(
      `${KANBAN_API_URL}/${id}/status`,
      { status: newStatus },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return data.tasks || data;
  } catch (error) {
    handleApiError(error);
  }
}

export async function searchKanbanTasks({ token, query }) {
  try {
    const { data } = await axios.get(`${KANBAN_API_URL}/search`, {
      params: { q: query },
      headers: { Authorization: `Bearer ${token}` },
    });
    return data.tasks || [];
  } catch (error) {
    handleApiError(error);
  }
}

import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/words/";

export async function fetchWords({ token }) {
  try {
    const { data } = await axios.get(API_URL, {
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
    const { data } = await axios.post(API_URL, word, {
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

export async function editWord({ token, id, word }) {
  try {
    const { data } = await axios.patch(`${API_URL}${id}`, word, {
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

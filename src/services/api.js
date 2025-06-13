import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/words/";
export async function fetchWords({ token }) {
  try {
    const data = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data;
    // когда работаем с axios, не забываем, что результат лежит в ключе datа
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function postWord({ token, word }) {
  try {
    const data = await axios.post(API_URL, word, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "text/html",
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function editWord({ token, id, word }) {
  try {
    const data = await axios.patch(API_URL + id, word, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "text/html",
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

import { useContext, useState, useEffect } from "react";
import { fetchWords, postWord, editWord } from "../services/api";
import { AuthContext } from "./AuthContext";

export const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const loadWords = async () => {
      try {
        const data = await fetchWords();
        setWords(data);
      } catch (error) {
        console.error("Ошибка загрузки слов", error);
      }
    };
    loadWords();
  }, []);

  const addNewWord = async ({ word }) => {
    try {
      const newWords = await postWord({ token: user?.token, word });
      setWords(newWords);
    } catch (error) {
      console.error("Ошибка добавления слова", error);
    }
  };

  const updateWord = async ({ word, id }) => {
    try {
      const newWords = await editWord({ token: user?.token, id, word });
      setWords(newWords);
    } catch (error) {
      console.error("Ошибка редактирования слова", error);
    }
  };

  return (
    <WordsContext.Provider value={{ words, setWords, loading, error }}>
      {children}
    </WordsContext.Provider>
  );
};

import { useContext, useState, useEffect } from "react";
import { fetchWords, postWord, editWord } from "../../services/api";
import { AuthContext } from "./AuthContext";

export const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const loadWords = async () => {
      setLoading(true);
      try {
        const data = await fetchWords();
        setWords(data);
      } catch (err) {
        setError("Failed to load words");
      } finally {
        setLoading(false);
      }
    };
    loadWords();
  }, []);

  const addNewWord = async (wordData) => {
    setLoading(true);
    try {
      const newWords = await postWord({ ...wordData, token: user?.token });
      setWords(newWords);
    } catch (err) {
      setError("Failed to add word");
    } finally {
      setLoading(false);
    }
  };

  const updateWord = async (wordData) => {
    setLoading(true);
    try {
      const newWords = await editWord({ ...wordData, token: user?.token });
      setWords(newWords);
    } catch (err) {
      setError("Failed to update word");
    } finally {
      setLoading(false);
    }
  };

  return (
    <WordsContext.Provider
      value={{
        words,
        loading,
        error,
        addNewWord,
        updateWord,
      }}
    >
      {children}
    </WordsContext.Provider>
  );
};

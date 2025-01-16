import React, { useState, useEffect, useRef } from "react";
import RowItem from "../../Components/RowItem/RowItem";
import { observer } from "mobx-react-lite";
import wordsStore from "../../store/wordsStore";
import style from "./table.module.scss";

const Table = observer(() => {
  const [newWord, setNewWord] = useState({
    english: "",
    transcription: "",
    russian: "",
  });

  useEffect(() => {
    const loadingWords = async () => {
      try {
        await wordsStore.getWordsServer();
      } catch (error) {
        console.error("Error loading words:", error);
      }
    };

    loadingWords();
  }, []);

  const englishInputRef = useRef(null);

  const handleAddWord = async () => {
    const newWordWithId = await wordsStore.postWordsServer(newWord);
    if (newWordWithId) {
      wordsStore.getWordsServer();
      setNewWord({ english: "", transcription: "", russian: "" });
      englishInputRef.current.focus();
    }
  };

  const handleDelete = async (id) => {
    await wordsStore.deleteWordsServer(id);
    wordsStore.getWordsServer();
  };

  const handleEdit = async (id, english, transcription, russian) => {
    const editWordResponse = await wordsStore.editWordsServer({
      id,
      english,
      transcription,
      russian,
    });

    if (editWordResponse && editWordResponse.status === "Error") {
      console.error("Error updating word:", editWordResponse.errors);
      alert(
        "Ошибка при обновлении слова: " +
          editWordResponse.errors.map((err) => err.message).join(", ")
      );
    } else {
      wordsStore.getWordsServer();
    }
  };

  return (
    <div className={style.container}>
      <input
        type="text"
        value={newWord.english}
        onChange={(e) => setNewWord({ ...newWord, english: e.target.value })}
        placeholder="English"
        ref={englishInputRef}
      />
      <input
        type="text"
        value={newWord.transcription}
        onChange={(e) =>
          setNewWord({ ...newWord, transcription: e.target.value })
        }
        placeholder="Transcription"
      />
      <input
        type="text"
        value={newWord.russian}
        onChange={(e) => setNewWord({ ...newWord, russian: e.target.value })}
        placeholder="Russian"
      />
      <button onClick={handleAddWord}>Add Word</button>
      {wordsStore.words.map((item) => (
        <RowItem
          {...item}
          key={item.id}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
});

export default Table;

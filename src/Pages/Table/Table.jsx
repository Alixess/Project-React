import React, { useContext, useState } from "react";
import RowItem from "../../Components/RowItem/RowItem";
//import { MobXProvider } from "../../store/store.jsx";
import { observer } from "mobx-react";
import wordsStore from "../../store/wordsStore";
import style from "./table.module.scss";

export default function Table() {
  /*const {
    setDataServer,
    dataServer,
    postWordsServer,
    deleteWordsServer,
    editWordsServer,
  } = useContext(myContext);

  const [newWord, setNewWord] = useState({
    english: "",
    transcription: "",
    russian: "",
    id: "",
    tags: "",
    tags_json: "",
  });

  const handleAddWord = async () => {
    const newWordWithId = await postWordsServer(newWord);
    if (newWordWithId) {
      setDataServer((prevData) => [...prevData, newWordWithId]);
      setNewWord({ english: "", transcription: "", russian: "" });
    }
  };

  const handleDelete = async (id) => {
    const deletedWord = await deleteWordsServer(id);
    if (id) {
      setDataServer(() => [...dataServer.filter((word) => word.id !== id)]);
    }
  };

  const handleEdit = async (id, english, transcription, russian) => {
    const editWordResponse = await editWordsServer(
      id,
      english,
      transcription,
      russian
    );
    console.log(editWordResponse);

    if (editWordResponse && editWordResponse.status === "Error") {
      console.error("Error updating word:", editWordResponse.errors);
      alert(
        "Ошибка при обновлении слова: " +
          editWordResponse.errors.map((err) => err.message).join(", ")
      );
    } else {
      setDataServer(
        dataServer.map((item) => {
          if (item.id === id) {
            item.english = english;
            item.transcription = transcription;
            item.russian = russian;
          }
          console.log(item);
          return item;
        })
      );
      console.log(dataServer);
    }
  };

  return (
    <div className={style.container}>
      <input
        type="text"
        value={newWord.english}
        onChange={(e) => setNewWord({ ...newWord, english: e.target.value })}
        placeholder="English"
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
      {dataServer.map((item) => (
        <RowItem
          {...item}
          key={item.id}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );*/
}

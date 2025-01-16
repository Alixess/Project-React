import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import wordsStore from "../../store/wordsStore";
import style from "./rowitem.module.scss";

const RowItem = observer(({ english, transcription, russian, id }) => {
  const [edit, setEdit] = useState(false);
  const [valueEnglish, setValueEnglish] = useState(english);
  const [valueTranscription, setValueTranscription] = useState(transcription);
  const [valueRussian, setValueRussian] = useState(russian);

  useEffect(() => {
    setValueEnglish(english);
    setValueTranscription(transcription);
    setValueRussian(russian);
  }, [english, transcription, russian]);

  const isFormValid = () => {
    return (
      valueEnglish.trim() !== "" &&
      valueTranscription.trim() !== "" &&
      valueRussian.trim() !== ""
    );
  };

  const validateForm = () => {
    let errors = [];

    if (!/^[a-z\s\-]*$/i.test(valueEnglish)) {
      errors.push("English field contains invalid characters");
    }

    if (!/^[а-я\s\,]*$/i.test(valueRussian)) {
      errors.push("Russian field contains invalid characters");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return false;
    }

    return true;
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (isFormValid() && validateForm()) {
      await wordsStore.editWordsServer({
        id,
        english: valueEnglish,
        transcription: valueTranscription,
        russian: valueRussian,
      });
      setEdit(false);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper_content}>
        {edit ? (
          <div className={style.editor}>
            <input
              type="text"
              value={valueEnglish}
              onChange={(e) => setValueEnglish(e.target.value)}
              className={valueEnglish.trim() === "" ? style.invalid : ""}
            />
            <input
              type="text"
              value={valueTranscription}
              onChange={(e) => setValueTranscription(e.target.value)}
              className={valueTranscription.trim() === "" ? style.invalid : ""}
            />
            <input
              type="text"
              value={valueRussian}
              onChange={(e) => setValueRussian(e.target.value)}
              className={valueRussian.trim() === "" ? style.invalid : ""}
            />
          </div>
        ) : (
          <div className={style.content}>
            <div>{english}</div>
            <div>{transcription}</div>
            <div>{russian}</div>
          </div>
        )}

        <div className={style.wrapper_button}>
          {!edit ? (
            <div>
              <button onClick={() => setEdit(true)}>Edit</button>
              <button onClick={() => wordsStore.deleteWordsServer(id)}>
                Delete
              </button>
            </div>
          ) : (
            <div>
              <button onClick={handleSave} disabled={!isFormValid()}>
                Save
              </button>
              <button onClick={() => setEdit(false)}>Cancel</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default RowItem;

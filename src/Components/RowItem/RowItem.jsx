import React, { useState, useEffect } from "react";
import style from "./rowitem.module.scss";

export default function RowItem({
  english,
  transcription,
  russian,
  id,
  handleDelete,
  handleEdit,
}) {
  const [edit, setEdit] = useState(false);
  const [valueEnglish, setValueEnglish] = useState("");
  const [valueTranscription, setValueTranscription] = useState("");
  const [valueRussian, setValueRussian] = useState("");

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

  return (
    <div className={style.container}>
      <div className={style.wrapper_contant}>
        {edit ? (
          <div className={style.editer}>
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
          <div className={style.contant}>
            <div>{english}</div>
            <div>{transcription}</div>
            <div>{russian}</div>
          </div>
        )}

        <div className={style.wrapper_button}>
          {!edit ? (
            <div>
              <button onClick={() => setEdit(true)}>Edite</button>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
          ) : (
            <div>
              <button
                onClick={() => {
                  if (isFormValid() && validateForm()) {
                    console.log("Form data:", {
                      english: valueEnglish,
                      transcription: valueTranscription,
                      russian: valueRussian,
                    });
                    handleEdit(
                      id,
                      valueEnglish,
                      valueTranscription,
                      valueRussian
                    );
                    setEdit(false);
                  }
                }}
                disabled={!isFormValid()}>
                Save
              </button>
              <button
                onClick={() => {
                  setEdit(false);
                }}>
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

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

  return (
    <div className={style.container}>
      <div className={style.wrapper_contant}>
        {edit ? (
          <div className={style.editer}>
            <input
              type="text"
              value={valueEnglish}
              onChange={(e) => setValueEnglish(e.target.value)}
            />
            <input
              type="text"
              value={valueTranscription}
              onChange={(e) => setValueTranscription(e.target.value)}
            />
            <input
              type="text"
              value={valueRussian}
              onChange={(e) => setValueRussian(e.target.value)}
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
                  handleEdit(
                    id,
                    valueEnglish,
                    valueTranscription,
                    valueRussian
                  );
                  setEdit(false);
                }}>
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

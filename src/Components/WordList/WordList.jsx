import React from "react";
import editSvg from "../../assets/svg/edit.svg";
import deleteSvg from "../../assets/svg/delete.svg";

import style from "./wordList.module.scss";

export default function WordList(props) {
  const {
    english,
    transcription,
    russian,
    tags,
    handleClick,
    selectWordsId,
    id,
  } = props;
  const editWordId = selectWordsId === id;
  //const deleteWordId = selectWordsId === id;

  const editableWord = () => {
    return (
      <div className={style.card_inner}>
        <div className={style.card_body}>
          <input
            className={style.card_text}
            placeholder="Введите слово"
            defaultValue={english}></input>
        </div>
        <div className={style.card_body}>
          <input
            className={style.card_text}
            placeholder="Введите транскрипцию"
            defaultValue={transcription}></input>
        </div>
        <div className={style.card_body}>
          <input
            className={style.card_text}
            placeholder="Введите перевод"
            defaultValue={russian}></input>
        </div>
        <div className={style.card_body}>
          <input
            className={style.card_text}
            placeholder="Введите категорию"
            defaultValue={tags}></input>
        </div>
      </div>
    );
  };
  const initiallyWord = () => {
    return (
      <div className={style.card_inner}>
        <div className={style.card_body}>
          <p className={style.card_text}>{english}</p>
        </div>
        <div className={style.card_body}>
          <p className={style.card_text}>{transcription}</p>
        </div>
        <div className={style.card_body}>
          <p className={style.card_text}>{russian}</p>
        </div>
        <div className={style.card_body}>
          <p className={style.card_text}>{tags}</p>
        </div>
      </div>
    );
  };

  return (
    <div className={style.card}>
      {!editWordId ? initiallyWord() : editableWord()}
      <div>
        <button onClick={() => handleClick(id)}>
          <img src={editSvg} alt="edit" />
        </button>
        <button>
          <img src={deleteSvg} alt="delete" />
        </button>
      </div>
    </div>
  );
}

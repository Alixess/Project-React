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
  const deleteWordId = selectWordsId === id;

  return (
    <div className={style.card}>
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

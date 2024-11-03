import React from "react";
//import { ReactComponent as Edit } from "../../assets/svg/edit.svg";
//import ButtonEdit from "../ButtonEdit/ButtonEdit";
import style from "./wordList.module.scss";

export default function WordList(props) {
  const { english, transcription, russian, tags, handleClick, wordsId, id } =
    props;
  const editWordId = wordsId === id;
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
        <button>
          <img
            src="../../assets/svg/edit.svg"
            alt="edit"
            onClick={() => handleClick(id)}
          />
        </button>
        <button>
          <img src="../../assets/svg/delete.svg" alt="delete" />
        </button>
      </div>
    </div>
  );
}

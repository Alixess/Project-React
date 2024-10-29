import React from "react";
import style from "./WordList.module.scss";

export default function WordList(props) {
  const { english, transcription, russian, tags } = props;

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
    </div>
  );
}

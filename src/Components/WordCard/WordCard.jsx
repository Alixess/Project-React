import React from "react";
import ButtonTranslate from "../ButtonTranslate/ButtonTranslate";
import style from "./wordcard.module.scss";

export default function WordCard(props) {
  return (
    <div className={style.wordbox}>
      <h3 className={style.word}>book{props.english}</h3>
      <h3 className={style.transcription}>
        bʊk
        {props.transcription}
      </h3>
      <ButtonTranslate
        translate={props.russian}
        pressed={props.pressed}
        setPressed={props.setPressed}
      />
    </div>
  );
}

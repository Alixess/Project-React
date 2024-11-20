import React, { useState, useEffect } from "react";
import ButtonTranslate from "../ButtonTranslate/ButtonTranslate";
import style from "./wordcard.module.scss";

export default function WordCard(props) {
  const [pressed, setPressed] = useState(false);

  function handleClick() {
    setPressed(!pressed);
  }

  useEffect(() => setPressed(false), [props.id]);

  return (
    <div className={style.wordbox}>
      <h3 className={style.word}>{props.english}</h3>
      <h3 className={style.transcription}>{props.transcription}</h3>
      <ButtonTranslate
        translate={props.russian}
        pressed={pressed}
        handleClick={handleClick}
      />
    </div>
  );
}

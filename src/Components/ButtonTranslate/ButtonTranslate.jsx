import React, { useState } from "react";
import style from "./buttontranslate.module.scss";

export default function ButtonTranslate(props) {
  const handleClick = () => {
    props.setPressed(!props.pressed);
  };

  return (
    <div className={style.button}>
      {props.pressed ? (
        <span className={style.translate}>{props.translate}</span>
      ) : (
        <button className={style.button} onClick={handleClick}>
          Показать перевод
        </button>
      )}
    </div>
  );
}

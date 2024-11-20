import React, { useState } from "react";
import style from "./buttontranslate.module.scss";

export default function ButtonTranslate({ handleClick, translate, pressed }) {
  return (
    <div onClick={handleClick}>
      {pressed ? (
        <span className={style.translate}>{translate}</span>
      ) : (
        <button className={style.button}>Показать перевод</button>
      )}
    </div>
  );
}

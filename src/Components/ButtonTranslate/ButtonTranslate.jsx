import React, { useState } from "react";
import style from "./buttontranslate.module.scss";

export default function ButtonTranslate({ handleClick, translate, pressed }) {
  return (
    <div onClick={handleClick} className={style.button}>
      {pressed && <span className={style.translate}>книга{translate}</span>}
      {!pressed && <button className={style.button}>Показать перевод</button>}
    </div>
  );
}

/*<div onClick={handleClick} className={style.button}>
      {pressed ? (
        <span className={style.translate}>книга{translate}</span>
      ) : (
        <button className={style.button}>Показать перевод</button>
      )}
    </div>*/

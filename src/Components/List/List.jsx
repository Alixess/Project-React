import React from "react";
import words from "../../data/words.json";
import WordList from "../WordList/WordList";
import style from "./List.module.scss";

export default function List() {
  return (
    <div className={style.cardholder}>
      <input className={style.input} placeholder="Введите слово"></input>
      <input className={style.input} placeholder="Введите транскрипцию"></input>
      <input className={style.input} placeholder="Введите перевод"></input>
      <input className={style.input} placeholder="Введите категорию"></input>
      <div>
        <button>Сохранить</button>
        <button>Отмена</button>
      </div>
      {words.map((item, index) => (
        <WordList key={index} {...item} />
      ))}
    </div>
  );
}

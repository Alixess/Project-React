import React from "react";
import { useState } from "react";
import words from "../../data/words.json";
import WordList from "../WordList/WordList";
import style from "./list.module.scss";

export default function List() {
  const [wordsId, setWordsId] = useState(false);

  function handleClick(id) {
    setWordsId(id);
  }
  return (
    <div className={style.cardholder}>
      <p> Добавить новое слово</p>
      <input className={style.input} placeholder="Введите слово"></input>
      <input className={style.input} placeholder="Введите транскрипцию"></input>
      <input className={style.input} placeholder="Введите перевод"></input>
      <input className={style.input} placeholder="Введите категорию"></input>
      <div>
        <button>Сохранить</button>
        <button>Отмена</button>
      </div>
      {words.map((item, index) => (
        <WordList
          key={index}
          {...item}
          wordsId={wordsId}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}
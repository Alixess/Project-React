import React, { useState } from "react";
import data from "../../data/data.json";
import WordList from "../WordList/WordList";
import style from "./list.module.scss";

export default function List() {
  const [selectWordsId, setSelectWordsId] = useState(false);

  function handleClick(id) {
    setSelectWordsId(id);
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
      {data.map((item, index) => (
        <WordList
          key={index}
          {...item}
          selectWordsId={selectWordsId}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

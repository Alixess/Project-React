import React, { useState, useContext } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import WordCard from "../../Components/WordCard/WordCard";
import { myContext } from "../../Context/MyContext";
import style from "./game.module.scss";

export default function Game() {
  const { setDataServer, dataServer } = useContext(myContext);
  const [active, setActive] = useState(0);
  const [counter, setCounter] = useState(0);

  function nextSlide() {
    if (active === dataServer.length - 1) {
      setActive(0);
      return;
    }
    setActive((prevActive) => prevActive + 1);
  }

  function prevSlide() {
    if (active === 0) {
      setActive(dataServer.length - 1);
      return;
    }
    setActive((prevActive) => prevActive - 1);
  }

  function editCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <div className={style.container}>
        <button className={style.prev} onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <div className="card">
          <WordCard {...dataServer[active]} editCounter={editCounter} />
        </div>
        <button className={style.next} onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
      <div className={style.counter}>Изучено слов: {counter}</div>
    </>
  );
}

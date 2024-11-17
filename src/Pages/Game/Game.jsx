import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import WordCard from "../../Components/WordCard/WordCard";
import style from "./game.module.scss";

export default function Game({ setData, data }) {
  const [count, setCount] = React.useState(0);

  function nextSlide() {
    if (count === data.length - 1) {
      setCount(0);
      return;
    }
    setCount(count + 1);
  }

  function prevSlide() {
    if (count === data.length - 1) {
      setCount(0);
      return;
    }
    setCount(count - 1);
  }

  return (
    <div>
      <button className={style.prev} onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <WordCard {...data[count]} />
      <button className={style.next} onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import WordCard from "../WordCard/WordCard.jsx";
import data from "../../data/data.json";
import style from "./wordcardcarusel.module.scss";

export default function WordCardCarusel() {
  const [words, setWords] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const lastIndex = words.length - 1;
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }
    if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, words]);

  return (
    <div>
      {words.map((card, cardIndex) => {
        const { id, english, russian, transcription } = card;
        let position = "nextSlide";
        if (cardIndex === currentIndex) {
          position = "activeSlide";
        }

        if (
          cardIndex === currentIndex - 1 ||
          (currentIndex === 0 && cardIndex === words.length - 1)
        ) {
          position = "lastSlide";
        }
        return (
          <WordCard
            className={position}
            key={id}
            english={english}
            russian={russian}
            transcription={transcription}
            setWords={setWords}
          />
        );
      })}
      <button
        className={style.prev}
        onClick={() => setCurrentIndex((prevIndex) => prevIndex - 1)}>
        <FiChevronLeft />
      </button>
      <button
        className={style.next}
        onClick={() => setCurrentIndex((prevIndex) => prevIndex + 1)}>
        <FiChevronRight />
      </button>
    </div>
  );
}

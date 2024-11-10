import React, { useState } from "react";
import words from "../../data/words.json";

export default function WordCardCarusel() {
  const WordCard = ({ words, currentIndex, setCurrentIndex }) => {
    return (
      <div>
        <h2>{words[currentIndex]}</h2>
        <button onClick={() => setCurrentIndex((prevIndex) => prevIndex - 1)}>
          Назад
        </button>
        <button onClick={() => setCurrentIndex((prevIndex) => prevIndex + 1)}>
          Вперед
        </button>
      </div>
    );
  };

  const WordList = ({ words }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
      <div>
        <WordCard
          words={words}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    );
  };
}

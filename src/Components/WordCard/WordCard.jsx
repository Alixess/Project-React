import React, { useState, useEffect } from "react";
import style from "./wordcard.module.scss";

export default function WordCard({
  id,
  english,
  transcription,
  russian,
  editCounter,
}) {
  const [showTranslation, setShowTranslation] = useState(false);

  useEffect(() => {
    if (showTranslation) {
      setShowTranslation(false);
    }
  }, [id]);

  function handleClick() {
    setShowTranslation(true);
    editCounter();
  }

  return (
    <div className={style.wordbox} key={id}>
      <h3 className={style.word}>{english}</h3>
      <p className={style.transcription}>{transcription}</p>
      <div>
        {showTranslation ? (
          <p className={style.word}>{russian}</p>
        ) : (
          <button onClick={handleClick}>Показать перевод</button>
        )}
      </div>
    </div>
  );
}

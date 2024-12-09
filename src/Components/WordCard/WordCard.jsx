import React, { useState, useEffect, useRef } from "react";
import style from "./wordcard.module.scss";

export default function WordCard({
  id,
  english,
  transcription,
  russian,
  editCounter,
}) {
  const [showTranslation, setShowTranslation] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (showTranslation) {
      setShowTranslation(false);
    }
  }, [id]);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  });

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
          <button onClick={handleClick} ref={buttonRef}>
            Показать перевод
          </button>
        )}
      </div>
    </div>
  );
}

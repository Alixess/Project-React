import React from "react";
import "./CardWordsItem.scss";

export default function CardWordsItem({ english, transcription, russian }) {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">{english}</p>
      </div>
      <div className="card-body">
        <p className="card-text">{transcription}</p>
      </div>
      <div className="card-body">
        <p className="card-text">{russian}</p>
      </div>
    </div>
  );
}

import React from "react";
import words from "../../data/words.json";
import CardWordsItem from "../CardWordsItem/CardWordsItem";
import "./CardWord.scss";

export default function CardWord() {
  return (
    <div className="cardholder">
      {words.map((item, index) => (
        <CardWordsItem key={index} {...item} />
      ))}
    </div>
  );
}

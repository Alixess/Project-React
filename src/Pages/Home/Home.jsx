import React, { useState } from "react";
import "./Home.scss";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [formattedText, setFormattedText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    setFormattedText(inputText.toUpperCase());
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Submit</button>
      <p style={{ color: "blue" }}>{formattedText}</p>
    </div>
  );
}

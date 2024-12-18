import React, { useState, useEffect } from "react";

export default function Words() {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((response) => {
        setWords(response);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ol>
          {words.map((word) => (
            <li key={word.id}>
              {word.english} - {word.russian}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

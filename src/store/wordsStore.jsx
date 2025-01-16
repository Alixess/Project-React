import { makeObservable, observable, action } from "mobx";

class WordsStore {
  words = [];

  constructor() {
    makeObservable(this, {
      words: observable,
      getWordsServer: action,
      postWordsServer: action,
      editWordsServer: action,
      deleteWordsServer: action,
      setWords: action,
    });
  }

  getWordsServer = async () => {
    const response = await fetch("api/words");
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    this.setWords(data);
  };

  setWords = (wordsArray) => {
    this.words = wordsArray;
  };

  postWordsServer = async (newWord) => {
    const response = await fetch("api/words/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWord),
    });
    const data = await response.json();
    this.setWords([...this.words, data]);
  };

  editWordsServer = async (updatedWord) => {
    const { id, english, transcription, russian } = updatedWord;
    const response = await fetch(`api/words/${id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        english: english,
        transcription: transcription,
        russian: russian,
        tags: "",
        tags_json: "[]",
      }),
    });
    const data = await response.json();
    this.setWords(
      this.words.map((word) => (word.id === updatedWord.id ? data : word))
    );
  };

  deleteWordsServer = async (id) => {
    await fetch(`api/words/${id}/delete`, {
      method: "POST",
    });
    this.setWords(this.words.filter((word) => word.id !== id));
  };
}

const wordsStore = new WordsStore();
export default wordsStore;

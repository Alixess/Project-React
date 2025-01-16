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
    });
  }

  getWordsServer = async () => {
    const response = await fetch("api/words");
    const data = await response.json();
    this.setWords(data);
  };

  setWords = action((wordsArray) => {
    this.words = wordsArray;
  });

  postWordsServer = async (newWord) => {
    const response = await fetch("api/word/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWord),
    });
    const data = await response.json();
    this.words.push(data);
  };

  editWordsServer = async (updatedWord) => {
    const response = await fetch(`api/words/${id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedWord),
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

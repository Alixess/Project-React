import { makeObservable, observable, action } from "mobx";
import GET from "../Services/GET";

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
    const response = await GET.getWords();
    this.words = response.data;
  };

  /*getWordsServer = async () => {
    const response = await fetch("api/words");
    const data = await response.json();
    this.words = data;
  };*/

  postWordsServer = async (newWord) => {
    const response = await fetch("/api/word/add", {
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
    this.words = this.words.map((word) =>
      word.id === updatedWord.id ? data : word
    );
  };

  deleteWordsServer = async (id) => {
    await fetch(`api/words/${id}/delete`, {
      method: "POST",
    });
    this.word = this.words.filter((word) => word.id !== id);
  };
}

const wordsStore = new WordsStore();
export default wordsStore;

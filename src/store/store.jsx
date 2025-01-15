import { makeAutoObservable } from "mobx";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Provider } from "mobx-react";
import GET from "../Services/GET";
import POST from "../Services/POST";
import DELETE from "../Services/DELETE";
import EDIT from "../Services/EDIT";
//import Loading from "../Components/Loading/Loading";
const useDataMobXContext = () => {
  const store = makeAutoObservable({
    words: [],
    error: null,
    isLoading: false,

    async fetchData() {
      this.isLoading = true;
      try {
        const response = await fetch("/api/words", { cache: "no-store" });
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data = await response.json();
        this.words = data;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.isLoading = false;
      }
    },

    async addToServer(data) {
      if (!data.english || !data.russian) return;
      this.isLoading = true;

      try {
        const res = await fetch("/api/words/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!res.ok) throw new Error(`HTTP error occurred: ${res.status}`);
        const addedWord = await res.json();

        if (addedWord) {
          console.log(addedWord);
          await this.fetchData(); // вызов метода для обновления данных
        }
      } catch (err) {
        console.log(err);
      } finally {
        this.isLoading = false;
      }
    },

    async saveText(data, id, setIsForEdit) {
      const { inputWord, inputTranslation, inputTranscription } = data;

      if (!inputWord || !inputTranslation) return;

      this.isLoading = true;

      try {
        const res = await fetch(`/api/words/${id}/update`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id,
            english: inputWord,
            transcription: inputTranscription,
            russian: inputTranslation,
            tags: "",
            tags_json: "[]",
          }),
        });

        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

        const updatedWord = await res.json();
        if (updatedWord) {
          await this.fetchData();
        }
        setIsForEdit(false);
      } catch (error) {
        console.error(`Ошибка сохранения: ${error.message}`);
      } finally {
        this.isLoading = false;
      }
    },

    async deleteWord(id) {
      try {
        const res = await fetch(`/api/words/${id}/delete`, {
          method: "POST",
        });

        if (!res.ok) throw new Error(`Ошибка при удалении: ${res.status}`);

        const updatedList = await res.json();
        if (updatedList) {
          await this.fetchData();
        }
      } catch (err) {
        console.log("Ошибка удаления:", err.message);
        this.error = err.message;
      }
    },
  });

  useEffect(() => {
    store.fetchData();
  }, []);

  return store;
};

export const MobXProvider = observer(({ children }) => {
  let store = useDataMobXContext();
  return <Provider value={store}>{children}</Provider>;
});
/*const useMobXContext = () => {
  const store = makeAutoObservable({
    words: [],
    error: null,
  });

  async function getWordsServer() {
    try {
      const data = await GET.getWords();
      if (data) {
        store.words = data;
      } else {
        store.error = "Loading error! Words loading failed.";
      }
    } catch (err) {
      store.error = err.message;
    }
  }

  store.getWordsServer = getWordsServer;

  useEffect(() => {
    store.getWordsServer();
  }, []);

  return store;
};

export const MobXProvider = observer(({ children }) => {
  const store = useMobXContext();

  return <Context.Provider value={store}>{children}</Context.Provider>;
});*/

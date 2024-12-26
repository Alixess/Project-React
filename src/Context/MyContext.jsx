import { createContext, useState, useEffect } from "react";
import GET from "../Services/GET";
import POST from "../Services/POST";
import DELETE from "../Services/DELETE";
import EDIT from "../Services/EDIT";
import Loading from "../Components/Loading/Loading";

export const myContext = createContext();
export function MyContextComponent({ children }) {
  const [dataServer, setDataServer] = useState(false);
  const value = {
    dataServer,
    setDataServer,
    postWordsServer: POST.postWords,
    deleteWordsServer: DELETE.deleteWords,
    editWordsServer,
  };

  useEffect(() => {
    getWordsServer();
  }, []);

  async function getWordsServer() {
    const wordsServer = await GET.getWords();
    setDataServer(wordsServer);
  }

  async function editWordsServer(id, english, transcription, russian) {
    const updateDataServer = await EDIT.editWords(
      id,
      english,
      transcription,
      russian
    );
    setDataServer(updateDataServer);
  }

  if (!dataServer) {
    return <Loading />;
  }

  return <myContext.Provider value={value}>{children}</myContext.Provider>;
}

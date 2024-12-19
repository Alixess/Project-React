import { createContext, useState, useEffect } from "react";
import GET from "../Services/GET";
import Loading from "../Components/Loading/Loading";

export const myContext = createContext();
export function MyContextComponent({ children }) {
  const [dataServer, setDataServer] = useState(false);
  const value = { dataServer, setDataServer };

  useEffect(() => {
    getWordsServer();
  }, []);

  async function getWordsServer() {
    const wordsServer = await GET.getWords();
    setDataServer(wordsServer);
  }

  if (!dataServer) {
    return <Loading />;
  }

  return <myContext.Provider value={value}>{children}</myContext.Provider>;
}

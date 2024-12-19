import { createContext, useState, useEffect } from "react";
import GET from "../Services/GET";

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
    return <h1>Loading...</h1>;
  }

  return <myContext.Provider value={value}>{children}</myContext.Provider>;
}

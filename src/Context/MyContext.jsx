import { createContext } from "react";

export const myContext = createContext();
export function MyContextProvider({ children }) {
  const [valueContext, setValueContext] = React.useState(null);

  return (
    <myContext.Provider value={valueContext}>{children}</myContext.Provider>
  );
}

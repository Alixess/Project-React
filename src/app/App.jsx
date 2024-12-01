import { useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Home, Game, Error, Table } from "../Pages";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import dataJSON from "../data/data.json";

function App() {
  const [data, setData] = useState(dataJSON);

  if (!data) return <h1>Loading...</h1>;

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/game"
            element={<Game setData={setData} data={data} />}
          />
          <Route
            path="/table"
            element={<Table setData={setData} data={data} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

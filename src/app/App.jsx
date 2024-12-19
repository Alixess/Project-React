import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Home, Game, Error, Table } from "../Pages";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/table" element={<Table />} />
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

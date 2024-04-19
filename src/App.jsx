import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Hero from "./screens/Hero";
import About from "./screens/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

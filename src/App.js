import { BrowserRouter, Routes, Route, Router, HashRouter } from "react-router-dom";
import Home from "./page/Home/HomePage";
import Navbar from "./components/navbar/global_navbar";
import Favorit from "./page/Favorit/FavoritPage";

function App() {
  return (
    <HashRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorit" element={<Favorit />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;

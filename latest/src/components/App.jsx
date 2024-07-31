//Début code Johan
//Contient la/les routes des pages "accueil" et "à propos" (react router)

import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./Logement";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="logements/:id" element={<Logement />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

//Fin code Johan

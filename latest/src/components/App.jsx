//Début code Johan
//Contient la/les routes des pages "accueil" et "à propos" (react router)

import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./Logement";
import Footer from "./Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="logements/:id" element={<Logement />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

//Fin code Johan

//Début code Johan
//Contient la/les routes des pages "accueil" et "à propos" (react router)

import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./Logement";
import Footer from "./Footer";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="logements/:id" element={<Logement />} />
        <Route path="error404" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

//Fin code Johan

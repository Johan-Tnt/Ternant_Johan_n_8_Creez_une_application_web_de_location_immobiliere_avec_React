//Début code Johan
//Contient le menu principal "acceuil"

import Thumb from "./Thumb";
import logements from "../../data/logements.json";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <img src="../src/assets/img/ImgHome.png" alt="Img Home" />
        <h1>Chez vous, et partout ailleurs </h1>
      </div>
      <div className="grey_banner">
        <div className="gallery">
          <Thumb logements={logements} />
        </div>
      </div>
    </div>
  );
};

export default Home;

//Fin code Johan

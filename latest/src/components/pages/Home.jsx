//Début code Johan
//Contient le menu principal "acceuil"

import Thumb from "./Thumb";
import logements from "../../data/logements.json";

const Home = () => {
  return (
    <div className="home">
      <section>
        <div className="banner">
          <img src="../src/assets/img/ImgHome.png" alt="Img Home" />
          <h1>Chez vous, et partout ailleurs </h1>
        </div>
      </section>
      <section>
        <div className="grey_banner">
          <div className="gallery">
            <Thumb logements={logements} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

//Fin code Johan

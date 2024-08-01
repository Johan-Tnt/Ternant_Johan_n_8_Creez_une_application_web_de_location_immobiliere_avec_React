/* eslint-disable react/no-unescaped-entities */
//Début code Johan
//Contient le menu "à propos"

//Contient les "icon" fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="home">
      <div className="banner">
        <img src="../src/assets/img/ImgAbout.png" alt="Img About" />
      </div>

      <div className="about_sheet">
        <div className="about_btn">
          <h2 className="about_title">
            Fiabilité
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ color: "white" }}
              size="xl"
            />
          </h2>
          <p className="about_content about_grey_banner">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toues les informations sont
            régulièrement vérifiéesd par nos équipes.
          </p>
        </div>

        <div className="about_btn ">
          <h2 className="about_title">
            Respect
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ color: "white" }}
              size="xl"
            />
          </h2>
          <p className="housing_content about_grey_banner">
            La bienviellance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de nbotre plateforme.
          </p>
        </div>

        <div className="about_btn ">
          <h2 className="about_title">
            Service
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ color: "white" }}
              size="xl"
            />
          </h2>
          <p className="housing_content about_grey_banner">
            La bienviellance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de nbotre plateforme.
          </p>
        </div>

        <div className="about_btn ">
          <h2 className="about_title">
            Sécurité
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ color: "white" }}
              size="xl"
            />
          </h2>
          <p className="housing_content about_grey_banner">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logements correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

//Fin code Johan

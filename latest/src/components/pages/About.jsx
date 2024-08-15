/* eslint-disable react/no-unescaped-entities */
//Début code Johan
//Contient le menu "à propos"

import Accordion from "../Accordion";

const About = () => {
  return (
    <section>
      <div className="home">
        <div className="banner">
          <img src="../src/assets/img/ImgAbout.png" alt="Img About" />
        </div>

        <div className="about_sheet">
          <div className="about_btn_2">
            <Accordion
              title="Fiabilité"
              content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes."
            />
          </div>

          <div className="about_btn_2">
            <Accordion
              title="Respect"
              content="Contenu La bienviellance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme."
            />
          </div>

          <div className="about_btn_2">
            <Accordion
              title="Service"
              content=" La bienviellance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme."
            />
          </div>

          <div className="about_btn_2">
            <Accordion
              title="Sécurité"
              content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logements correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

//Fin code Johan

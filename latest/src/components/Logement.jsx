//Début code Johan
//Contient le menu "à propos"

//Contient les "icon" fontawesome imports
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Contient les imports pour les logements
import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Accordion from "../components/Accordion";

const findLogementsID = (id) => {
  return logements.find((logements) => logements.id === id);
};

const Logement = () => {
  const { id } = useParams();
  const logements = findLogementsID(id);
  const pictures = logements.pictures;
  return (
    <div className="layout_logement">
      <div className="pictures">
        {pictures.map((picture, index) => {
          return (
            <img src={picture} alt={picture.title} key={(picture, index)} />
          );
        })}
      </div>

      <div>
        {/*<p>Voici le logement avec id : {id}</p>*/}
        <p className="title_housing">{logements.title}</p>
        <p className="housing_sheet">{logements.location}</p>
        <p className="owner_picture"></p>
        <p className="owner_name">Nom du propriétaire</p>
      </div>

      <div>
        <p className="housing_sheet tags_btn">Tags</p>
        <p className="housing_sheet"> {logements.tags}</p>
      </div>

      <div className="housing_sheet rate_housing">
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "#ff6060" }}
          size="2xl"
        />
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "#ff6060" }}
          size="2xl"
        />
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "#ff6060" }}
          size="2xl"
        />
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "#ff6060" }}
          size="2xl"
        />
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "#ff6060" }}
          size="2xl"
        />
        {logements.rating} étoiles
      </div>

      <div className="about_sheet">
        <div className="about_btn">
          <Accordion title="Description" content={logements.description} />
        </div>

        <div className="about_btn">
          <Accordion title="Équipements" content={logements.equipments} />
        </div>
      </div>
    </div>
  );
};

export default Logement;

//Fin code Johan

//Début code Johan
//Contient le menu "à propos"
// get our fontawesome imports
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { useParams } from "react-router-dom";
import logements from "../data/logements.json";

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

      <div className="housing_sheet_btn">
        <h2 className="housing_sheet_title">
          Description
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ color: "white" }}
            size="xl"
          />
        </h2>
        <p className="housing_sheet layout_btn">{logements.description}</p>
      </div>

      <div className="housing_sheet_btn layout_equipments">
        <h2 className="housing_sheet_title">
          Équipements
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ color: "white" }}
            size="xl"
          />
        </h2>
        <p className="housing_sheet layout_btn">{logements.equipments}</p>
      </div>
    </div>
  );
};

export default Logement;

//Fin code Johan

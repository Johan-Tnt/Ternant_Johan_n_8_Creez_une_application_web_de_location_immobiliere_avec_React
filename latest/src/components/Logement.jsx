//Début code Johan
//Contient le menu "à propos"

//Contient les "icon" fontawesome imports
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Contient les imports pour les logements
import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Accordion from "../components/Accordion";
import Slider from "./Slider";

const findLogementsID = (id) => {
  return logements.find((logements) => logements.id === id);
};

const Logement = () => {
  const { id } = useParams();
  const logements = findLogementsID(id);
  const picture = logements.host.picture;
  //const tags = logements.tags.map;
  const tags = logements.tags;
  //const star = logements.rating;

  return (
    <div className="layout_logement">
      <section>
        <div className="pictures">
          <Slider pictures={logements.pictures} />
        </div>
      </section>

      <section className="container_information_logement">
        <div className="container_logement">
          <p className="title_housing">{logements.title}</p>
          <p className="housing_sheet housing_location">{logements.location}</p>
          <ul>
            <li className="housing_sheet tags_btn">
              {tags}
              {/*{tags.map}*/}
            </li>
          </ul>
        </div>

        <div className="container_logement_2">
          <p className="owner_accommodation">
            <img
              src={picture}
              alt={picture.title}
              key={picture}
              className="img_owner"
            />
          </p>
          <p className="owner_name">{logements.host.name}</p>
          <div className="housing_sheet rate_housing">
            {/*{pictures.map((picture, index) => {
            return (
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#ff6060" }}
                size="2xl"
                alt={picture.title}
                key={(picture, index)}
              />
            );
          })}*/}
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#ff6060" }}
              size="xl"
            />
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#ff6060" }}
              size="xl"
            />
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#ff6060" }}
              size="xl"
            />
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#ff6060" }}
              size="xl"
            />
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#ff6060" }}
              size="xl"
            />
            <span> {logements.rating} sur 5</span>
          </div>
        </div>
      </section>

      <section>
        <div className="logement_sheet">
          <div className="logement_btn">
            <Accordion title="Description" content={logements.description} />
          </div>

          <div className="logement_btn">
            <Accordion title="Équipements" content={logements.equipments} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logement;

//Fin code Johan

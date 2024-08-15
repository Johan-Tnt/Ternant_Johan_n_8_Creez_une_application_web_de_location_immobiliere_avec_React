//Début code Johan

//Contient les "img des logements"
import PropsTypes from "prop-types";
import { Link } from "react-router-dom";

const Thumb = ({ logements }) => {
  return logements.map((logements) => (
    <Link
      to={`/logements/${logements.id}`}
      className="thumb"
      key={logements.id}
    >
      <img src={logements.cover} alt={logements.title} />
      <div className="thumb_title">
        <h3>{logements.title}</h3>
      </div>
    </Link>
  ));
};

Thumb.propTypes = {
  logements: PropsTypes.array.isRequired,
};

export default Thumb;

//Fin code Johan

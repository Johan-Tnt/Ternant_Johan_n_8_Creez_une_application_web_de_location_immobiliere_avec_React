//Début code Johan
//Contient les "img des logements"

import PropsTypes from "prop-types";

const Thumb = ({ logements }) => {
  return logements.map((logements) => (
    <div className="thumb" key={logements.id}>
      <img src={logements.cover} alt={logements.title} />
      <div className="thumb_title">
        <h3>{logements.title}</h3>
      </div>
    </div>
  ));
};

Thumb.propTypes = {
  logements: PropsTypes.array.isRequired,
};

export default Thumb;

//Fin code Johan

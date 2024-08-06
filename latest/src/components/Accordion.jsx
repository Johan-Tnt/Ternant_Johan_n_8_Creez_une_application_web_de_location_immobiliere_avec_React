//Début code Johan
/* eslint-disable react/prop-types */
//Contient les accordéons (collapse) d'un "logement" et de "à propos"

import { useState } from "react";

//Contient les "icon" fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Accordion({ title, content }) {
  const [active, setActive] = useState(false);

  const handleToogle = () => {
    setActive(!active);
  };
  return (
    <div className={`accordion ${active && "active"}`}>
      <div className="accordion__title">
        {title}
        <span className="accordion__icon" onClick={handleToogle}>
          <FontAwesomeIcon
            icon={faChevronUp}
            style={{ color: "white" }}
            size="xl"
          />
        </span>
      </div>
      <div className="accordion__content">{content}</div>
    </div>
  );
}

export default Accordion;

//Fin code Johan

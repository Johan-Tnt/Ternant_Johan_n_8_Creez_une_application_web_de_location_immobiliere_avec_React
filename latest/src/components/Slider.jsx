/* eslint-disable react/prop-types */
//Début code Johan
//Contient le carousel

//Contient les "icon" fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function Slider({ pictures }) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex(index + 1);
    if (index === pictures.length - 1) {
      setIndex(0);
    }
  };

  const previousSlide = () => {
    setIndex(index - 1);
    if (index === 0) {
      setIndex(pictures.length - 1);
    }
  };

  return (
    <div className="slider">
      <div
        className="slide_show"
        style={{ backgroundImage: `url(${pictures[index]})` }}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          style={{ color: "white" }}
          className="icon_arrow_carrousel icon_arrow_left arrow arrow-left"
          alt="flèche gauche"
          onClick={previousSlide}
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          style={{ color: "white" }}
          alt="flèche droite"
          className="icon_arrow_carrousel icon_arrow_right arrow arrow-right"
          onClick={nextSlide}
        />
      </div>

      <div className="show">
        <p className="number_img">1/?</p>
      </div>
    </div>
  );
}

//Fin code Johan

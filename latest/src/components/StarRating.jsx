/* eslint-disable react/prop-types */
//Début code Johan
//Contient la mise en page des icon stars d'un "logement"

//Contient les "icon" fontawesome imports
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Composant pour afficher les étoiles en fonction du rating
const StarRating = ({ rating }) => {
  const totalStars = 5;

  // Création d'un tableau de 5 éléments et remplissage en fonction de la note
  const stars = Array.from({ length: totalStars }, (_, index) => {
    // Si l'index est inférieur à la note, afficher une étoile pleine
    return index < rating ? (
      <FontAwesomeIcon
        icon={faStar}
        style={{
          color: "#ff6060",
        }}
        className="star"
      />
    ) : (
      <FontAwesomeIcon
        icon={faStar}
        style={{
          color: "#E3E3E3",
        }}
        className="star"
      />
    );
  });

  return (
    <div className="star-rating">
      {stars.map((star, index) => (
        <div key={index}>{star}</div>
      ))}
    </div>
  );
};
export default StarRating;

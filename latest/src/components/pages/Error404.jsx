/* eslint-disable react/no-unescaped-entities */
//Début code Johan
//Contient la mise en page global da la page "erreur ID"
import { useNavigate } from "react-router-dom";

function Error404() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/"); // Redirection vers la page "home"
  };

  return (
    <div className="message_error">
      <h1 className="error_title">404</h1>
      <p className="error_text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <button onClick={handleRedirect} className="error_redirection">
        Retourner sur la page d’accueil
      </button>
    </div>
  );
}

export default Error404;

//Fin code Johan

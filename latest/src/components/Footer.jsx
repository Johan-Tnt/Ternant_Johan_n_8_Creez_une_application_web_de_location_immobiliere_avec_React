//Début code Johan
//Contient la mise en page globale du "footer"

import LogoKasaWhite from "../assets/img/LogoKasaWhite.png";
import LogoKasa2020 from "../assets/img/Kasa 2020.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={LogoKasaWhite} alt="Logo Kasa White" className="footer_logo" />
      <img src={LogoKasa2020} alt="2020 Kasa. All rifghts reserved" />
    </div>
  );
};

export default Footer;

//Fin code Johan

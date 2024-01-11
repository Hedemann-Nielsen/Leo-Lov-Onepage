import "./Footer.scss";
import footerImage from "../../assets/icons/Vector-1-image.png";
import footerImage1 from "../../assets/icons/Vector-image.png";
export const Footer = () => {
  return (
    <footer>
      <div>
        <h3>Adresse</h3>
        <p>
          Find os her:
          <br />
          <br />
          Vestervænget 232, 30.sal 6574 Øster Nørup Danmark
        </p>
      </div>
      <div>
        <h3>Kontakt</h3>
        <p>
          Kontakt os her:
          <br />
          <br />
          email@mail.dk Tlf: 0192 3023
        </p>
      </div>
      <div>
        <h3>Politik</h3>

        <p>
          Vores politikker:
          <br />
          <br /> Privatlivspolitk Cookiepolitik Generalle betingelse
        </p>
      </div>
      <div>
        <h3>Sociale medier</h3>
        <div className="imgContainer">
          <img src={footerImage} alt="Footer Image" />
          <img src={footerImage1} alt="Footer Image" />
        </div>
      </div>
    </footer>
  );
};

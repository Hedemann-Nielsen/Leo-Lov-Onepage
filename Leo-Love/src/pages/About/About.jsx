import { NavLink } from 'react-router-dom';
import style from './About.module.scss';

export const About =  () => {
    return (
      <>
    <div className={style.about}>
      <h2>Velkommen til Leo<span>-Love</span> Advokatfirma</h2>
      <h4>Hvem er Leo<span>-Love</span></h4>
      <p>
        Leo-Love Advokatfirma har været en pålidelig partner inden for juridisk rådgivning i mange år.
        Vi er stolte af vores engagement, professionalisme og evne til at levere skræddersyede løsninger til vores klienter.
      </p>
      <p>
        <h4>Starten på Leo<span>-Love</span></h4>
        Firmaet blev grundlagt i 2001 og har siden da opbygget en solid erfaring inden for forskellige retsområder.
      </p>
      <p>
        Vores passion for retfærdighed og dygtige advokater gør os til det perfekte valg for enhver, der søger juridisk bistand.
      </p>
      <h4>Hvorfor vælge Leo<span>-Love</span></h4>
      <p>
        Uanset om du står over for juridiske udfordringer inden for erhvervsret, familieret, strafferet eller andet, er vi her for at hjælpe dig.
      </p>
      <p>
        Vælg Leo-Love Advokatfirma for pålidelig og effektiv juridisk rådgivning.
      </p>
      <h4>kontakt Leo<span>-Love </span><NavLink to="/kontakt" className={style.link}>HER</NavLink></h4>
      

    </div>
      </>
    );
  }
  

import { NavLink } from 'react-router-dom';
import style from './Fallback.module.scss';

export const Fallback = () => {
  return (
    <div className={style.fallbackContainer}>
      <h1 className={style.title}>404</h1>
      <p className={style.subtitle}>Ups! Siden blev ikke fundet.</p>
      <p className={style.message}>Den side, du leder efter, eksisterer ikke.</p>
      <p >Gå til <NavLink to="/" className={style.link}>Forsiden</NavLink> </p>

      
    </div>
  );
};


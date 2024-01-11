import style from './Navbar.module.scss';

export const Navbar = (props) => {
  return (
    <>
      <div className={style.navBar}>
        <ul className={style.left}>
          {props.data &&
            props.data.map((item, itemIndex) => (
              <li key={itemIndex}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
        </ul>
        <div className={style.right}>
          <h3>
            <span>Leo</span>-Love
          </h3>
        </div>
      </div>
    </>
  );
};

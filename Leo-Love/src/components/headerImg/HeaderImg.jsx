import style from './HeaderImg.module.scss';
import HeaderPicture from '../../assets/images/Header-image.jpg';

export const HeaderImg = () => {
    return (
    
        <img className={style.headerimg}
        src={HeaderPicture}
        title={`${HeaderPicture.substr(HeaderPicture.lastIndexOf('/')+1).replace('-image.jpg',"")}`}
        alt={""}
        />
 
      
    )
  }
import './HeaderImg.module.scss';
import HeaderPicture from '../../assets/images/Header-image.jpg';

export const HeaderImg = () => {
    return (
    
        <img 
        src={HeaderPicture}
        title={`${HeaderPicture.substr(HeaderPicture.lastIndexOf('/')+1).replace('-image.jpg',"")}`}
        alt={""}
        />
 
      
    )
  }
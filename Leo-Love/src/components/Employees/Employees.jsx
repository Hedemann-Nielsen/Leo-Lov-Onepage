import style from './Emplyees.module.scss';

export const Emplyee = ({ picture, navn, karierre, uddannelse }) => {
    return (
  <>
  <div className={style.emplyees}>
    <img 
        src={picture} 
        alt={navn}
        title={`${picture.substr(picture.lastIndexOf('/')+1).replace('.jpg',"")}`}
        />
    <div className={style.emplyeeInfo}>
      <h2>{navn}</h2>
      <p><strong>Karriere:</strong> {karierre}</p>
      <p><strong>Uddannelse:</strong> {uddannelse}</p>
    </div>
     
    </div>
  </>
    )
  }
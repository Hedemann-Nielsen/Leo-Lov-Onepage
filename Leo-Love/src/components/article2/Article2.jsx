import style from './Article2.module.scss';
import NoProblemPicture from '../../assets/images/street-image.jpg';

export const Article2 = () => {
    return (
    <>
    <section className={style.article2}>
        <div>
            <h2>HER BOR VI</h2>
            <p>Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.</p>
            <p> Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!</p>
        </div>
        <img 
            src={NoProblemPicture}
            title={`${NoProblemPicture.substr(NoProblemPicture.lastIndexOf('/')+1).replace('-image.jpg',"")}`}
            alt={"NoProbelm image"}/>
    </section>
    </>
           
    )
  }
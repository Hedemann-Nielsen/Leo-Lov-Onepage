import style from './Article1.module.scss';
import NoProblemPicture from '../../assets/images/NoProblem-image.jpg';

export const Article1 = () => {
    return (
    <>
    <section className={style.article1}>
        <img 
            src={NoProblemPicture}
            title={`${NoProblemPicture.substr(NoProblemPicture.lastIndexOf('/')+1).replace('-image.jpg',"")}`}
            alt={"NoProbelm image"}/>
        <div>
            <h2>INTET PROBLEM</h2>
            <p>Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen. Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!</p>
        </div>
    </section>
    </>
           
    )
  }
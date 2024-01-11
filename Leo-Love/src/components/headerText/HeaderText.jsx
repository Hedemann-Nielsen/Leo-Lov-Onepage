import style from './headerText.module.scss';

export const HeaderText = ({title, title2, subtitle}) => {
    return (
        <>
        <section className={style.HeaderText}>
            <div className={style.title}>
                <h1>{title}</h1>
                <h1>{title2}</h1>
            </div>
            <h6>{subtitle}</h6>
        </section>
        </>
      
    )
  }
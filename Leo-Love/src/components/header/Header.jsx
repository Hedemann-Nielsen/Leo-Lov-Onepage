import { Navbar } from '../navbar/navbar';
import style from './Header.module.scss';

const arrNavigation = [
    'Hjem', 'Advokaterne', 'Om LeoLove', 'Kontakt'
]

export const Header = () => {
    return(
    <header  className={style.header}>
        <Navbar data={arrNavigation}></Navbar>
    </header>
    
    )
}


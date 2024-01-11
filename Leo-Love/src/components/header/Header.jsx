import { Navbar } from '../navbar/navbar';
import { HeaderImg } from '../headerImg/HeaderImg';
import { HeaderText } from '../headerText/HeaderText';

const arrNavigation = [
    'Hjem', 'Advokaterne', 'Om LeoLove', 'Kontakt'
]

export const Header = () => {
    return(
    <header>
        <Navbar data={arrNavigation}></Navbar>
        <HeaderImg></HeaderImg>
        <HeaderText title="Leo" title2="-Love" subtitle="Lov og ret kan være et plaster! Hvis du ellers har knaster!" ></HeaderText>
    </header>
    
    )
}


import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";
import { Cards } from "../../components/Cards.Module/Cards";

export const Home = () => {
  const CardMaker = [
    {
      title: "Familieret",
      content:
        " Familieret er en ret alle har. Har du en familie har du sikkert ret til familieret. Medmindre du altid er den der tror du har ret. Så kan vi desværre ikke hjælpe dig",
    },
    {
      title: "Ejendomsret",
      content:
        "Har du købt et hus og fortrudt eller er du blevet svindlet? Fortvivl ej. Vi kan hjælpe dig med at komme af med huset, eller eventuelt sagsøge vedkommende der solgte dig det.",
    },
    {
      title: "Konkurs",
      content:
        "Er du gået konkurs ville vi rigtig gerne hjælpe, men det kan vi desværre ikke. Vi er alle advokater med fede biler her så har du ingen penge får du ingen hjælp",
    },
    {
      title: "Selskabsret",
      content:
        "Selskabsret. Ved du heller aldrig hvilken ret du skal servere til et stort selskab? Heller ikke os. Heldigvis har vi en mand i udlandet der ved en masse om dette så henvend dig i dag.",
    },
  ];
  return (
    <>
      <Header></Header> 
      <Cards cards={CardMaker} />
      <Main></Main>
    </>
  );
};

import { Home } from "./pages/Home/Home";
import { Advokaterne } from "./pages/Advokaterne/Advokaterne";
import { About } from "./pages/About/About";
import { Kontakt } from "./pages/Kontakt/Kontakt";
import { Fallback } from "./pages/Fallback/Fallback";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

import "./App.scss";

const arrNavigation = ["Hjem", "Advokaterne", "Om LeoLove", "Kontakt"];

function App() {
  return (
    <>
      <Navbar data={arrNavigation}></Navbar>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Hjem" element={<Home />} />
        <Route path="/advokaterne" element={<Advokaterne />} />
        <Route path="/Om LeoLove" element={<About />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="*" element={<Fallback />} />
      </Routes>{" "}
      ;<Footer></Footer>
    </>
  );
}

export default App;

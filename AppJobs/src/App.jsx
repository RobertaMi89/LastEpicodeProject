import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from "./components/Favourites";

function App() {
  return (
    // Utilizzo il componente BrowserRouter per abilitare il routing nell'app
    <BrowserRouter>
      {/* rotte dell'applicazione */}
      <Routes>
        {/* Rotta per la pagina principale */}
        <Route path="/" element={<MainSearch />} />

        {/* Rotta dinamica per la visualizzazione dei risultati della ricerca per una specifica società */}
        <Route path="/:company" element={<CompanySearchResults />} />

        {/* Rotta per la pagina dei preferiti */}
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import SearchBar from "../molecules/SearchBar";
import Cards from "../organisms/Cards";
import Banner from "../atoms/Banner";
import { weatherSelector } from "../../storage/WeatherSlice";
import { useAppSelector, useAppDispatch } from "../../storage/Store";
import { fetchWeather } from "../../storage/WeatherSlice";

// Definisco un componente funzionale chiamato CustomNavBar
const CustomNavBar = () => {
  // Ottiengo la funzione di dispatch dallo store
  const dispatch = useAppDispatch();

  // Definisco la funzione di gestione della ricerca
  const handleSearch = (location) => {
    // Dispaccia l'azione fetchWeather con la località
    dispatch(fetchWeather(location));
  };

  // Eseguo la ricerca iniziale con la località "Roma,IT" al caricamento del componente
  useEffect(() => handleSearch("Roma,IT"), []);

  // Ottengo i dati meteorologici correnti dallo store
  const { currentWeather } = useAppSelector(weatherSelector);

  // Il componente restituisce una Navbar contenente un Banner, una SearchBar e i Cards con i dati meteorologici correnti
  return (
    <>
      <Navbar>
        <Container fluid className="d-flex ">
          <Nav className="navBar"></Nav>
          <Container>
            <Banner />
            <SearchBar />
          </Container>
        </Container>
      </Navbar>
      <Cards cityData={currentWeather} />
    </>
  );
};

export default CustomNavBar;

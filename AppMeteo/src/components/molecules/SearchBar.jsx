import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../storage/Store";
import { fetchWeather } from "../../storage/WeatherSlice";

// Definisco un componente funzionale
const SearchForm = () => {
  // Ottengo la funzione di navigazione e il dispatch dallo store
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // Definisco uno stato locale 'location' con valore iniziale vuoto
  const [location, setLocation] = useState("");

  // Gestisco la sottomissione del modulo
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Verifico se la stringa 'location' non è vuota
    if (location.trim() !== "") {
      // Dispaccia l'azione fetchWeather con la località e naviga verso la pagina dei dettagli
      dispatch(fetchWeather(location));
      navigate("/details", { state: { location } });
    }
  };

  // Il componente restituisce un Container contenente un modulo di ricerca (Form)
  return (
    <Container>
      <Form
        // Configuro la classe CSS del Form e gestisco l'evento di sottomissione
        className="containerForm d-flex justify-content-center mt-2"
        onSubmit={(event) => handleFormSubmit(event)}
      >
        {/* Input di ricerca*/}
        <Form.Control
          type="search"
          value={location}
          placeholder="Enter Location"
          className="form me-2"
          onChange={(event) => setLocation(event.target.value)}
          aria-label="Search"
        />
        {/* Bottone di ricerca con un'icona di ricerca */}
        <Button className="btn bi bi-search text-dark" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </Button>
      </Form>
    </Container>
  );
};

export default SearchForm;

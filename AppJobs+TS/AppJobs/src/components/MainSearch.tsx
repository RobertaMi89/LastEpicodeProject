import React, { useState, ChangeEvent, FormEvent } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Job from "./Job";

// Definizione dell'interfaccia per la struttura dei dati dei lavori
interface JobData {
  _id: string;
  company_name: string;
  url: string;
  title: string;
  }

// Dichiarazione della componente principale
const MainSearch: React.FC = () => {
  // Stato per memorizzare il valore della query di ricerca
  const [query, setQuery] = useState<string>("");

  // Stato per memorizzare i dati dei lavori ottenuti dalla ricerca
  const [jobs, setJobs] = useState<JobData[]>([]);

  // Hook per la navigazione
  const navigate = useNavigate();

  // URL di base per la ricerca di lavori remoti
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  // Gestisce il cambiamento del valore nella casella di ricerca
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Gestisce la sottomissione del modulo di ricerca
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Effettua una richiesta per ottenere i dati dei lavori in base alla query
      const response = await fetch(baseEndpoint + query + "&limit=20");
      
      // Verifica se la richiesta è andata a buon fine
      if (response.ok) {
        // Estrae i dati dalla risposta
        const { data } = await response.json();
        // Aggiorna lo stato con i dati dei lavori ottenuti
        setJobs(data);
      } else {
        // Mostra un avviso in caso di errore nella richiesta
        alert("Error fetching results");
      }
    } catch (error) {
      // Gestisce eventuali errori durante la richiesta
      console.log(error);
    }
  };

   return (
    <Container>
      <Row>
        {/* Intestazione della pagina */}
        <Col xs={10} className="d-flex flex-wrap align-items-center mx-auto my-3">
          <h1 className="display-1 me-auto">Remote Jobs Search</h1>
          {/* Pulsante per navigare alla pagina dei Preferiti */}
          <Button variant="outline-primary" onClick={() => navigate("/favourites")}>
            go to Favourites
          </Button>
        </Col>
        {/* Form di ricerca */}
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        {/* Risultati della ricerca */}
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;

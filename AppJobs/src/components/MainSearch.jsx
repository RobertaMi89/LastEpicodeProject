import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Job from "./Job";

const MainSearch = () => {
  // stato locale "query" per gestire il valore dell'input di ricerca
  const [query, setQuery] = useState("");

  // stato locale "jobs" per memorizzare i risultati della ricerca
  const [jobs, setJobs] = useState([]);

  // funzione "navigate" dall'hook "useNavigate" per gestire la navigazione tra le pagine
  const navigate = useNavigate();

  // Definizione dell'endpoint di base per la ricerca di lavori
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  // Gestisco il cambiamento nell'input di ricerca e aggiorno lo stato "query"
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // Gestisco la sottomissione del modulo di ricerca e effettuo la chiamata API
  const handleSubmit = async (e) => {
    // Impedisco il comportamento predefinito del modulo
    e.preventDefault();

    try {
      // Effettuo una richiesta API usando l'endpoint e la query di ricerca
      const response = await fetch(baseEndpoint + query + "&limit=20");

      // Verifico se la risposta è positiva (status code 200)
      if (response.ok) {
        // Estraggo i dati dalla risposta JSON e aggiorno lo stato "jobs"
        const { data } = await response.json();
        setJobs(data);
      } else {
        // Mostro un avviso in caso di errore nella richiesta
        alert("Error fetching results");
      }
    } catch (error) {
      // Gestisco gli errori durante la richiesta
      console.log(error);
    }
  };

  return (
    <Container fluid className="background font">
      <Row>
        {/* Intestazione con il titolo e un pulsante per accedere ai preferiti */}
        <Col
          xs={10}
          className="d-flex flex-wrap align-items-center mx-auto my-3"
        >
          <h1 className="display-1 me-auto">Remote Jobs Search</h1>
          <Button
            variant="outline-primary"
            onClick={() => navigate("/favourites")}
          >
            go to Favourites
          </Button>
        </Col>

        {/* Form di ricerca con input di testo */}
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>

        {/* Elenco dei lavori risultati dalla ricerca */}
        <Col xs={10} className="opacityDiv mx-auto mb-5">
          {/* Mappa attraverso gli elementi nell'array "jobs" e renderizza il componente Job per ciascuno */}
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;

import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";

const CompanySearchResults = () => {
  // Dichiaro lo stato "jobs" e della funzione "setJobs" tramite useState
  const [jobs, setJobs] = useState([]);
  // Ottengo i parametri dell'URL tramite useParams()
  const params = useParams();

  // Definizione dell'endpoint di base per la richiesta API
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  // Hook dove viene eseguito il montaggio del componente
  useEffect(() => {
    // Chiamata alla funzione asincrona "getJobs"
    getJobs();
  }, []);

  // Funzione asincrona per ottenere i lavori dalla API
  const getJobs = async () => {
    try {
      // Effettuo una richiesta API usando l'endpoint e i parametri della società
      const response = await fetch(baseEndpoint + params.company);
      // Verifico se la risposta è positiva (status code 200)
      if (response.ok) {
        // Estraggo i dati dalla risposta JSON
        const { data } = await response.json();
        // Aggiorno lo stato "jobs" con i dati ottenuti dalla risposta
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

  // Renderizzo il componente con i risultati della ricerca
  return (
    <Container>
      <Row>
        <Col className="my-3">
          {/* titolo della pagina con il nome della società ottenuto dai parametri */}
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {/* Mappa attraverso gli elementi nell'array "jobs" e renderizza il componente Job per ciascuno */}
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;

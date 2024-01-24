import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Star, StarFill } from "react-bootstrap-icons";
import { useDispatch,useSelector } from "react-redux";

// Definizione dell'interfaccia per le props della componente Job
interface JobProps {
  data: {
    company_name: string;
    url: string;
    title: string;
   
  };
}

// Dichiarazione della componente Job come componente funzionale React
const Job: React.FC<JobProps> = ({ data }) => {
  // Utilizzo del selettore di Redux per ottenere la lista dei preferiti
  const favourites = useSelector((state: any) => state.favourite.list); // Nota: specifica il tipo corretto
  // Utilizzo della funzione di dispatch per inviare azioni a Redux
  const dispatch = useDispatch();

  // Verifica se il lavoro corrente è presente nei preferiti
  const isFav = favourites.includes(data.company_name);

  // Rendering della componente Job
  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs="auto" className="d-flex align-items-center">
        {/* Icona stella piena se è nei preferiti, altrimenti stella vuota */}
        {isFav ? (
          <StarFill
            color="gold"
            size={22}
            className="me-2 my-auto"
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_FAVOURITE",
                payload: data.company_name,
              })
            }
          />
        ) : (
          <Star
            color="gold"
            size={22}
            className="me-2 my-auto"
            onClick={() =>
              dispatch({
                type: "ADD_TO_FAVOURITE",
                payload: data.company_name,
              })
            }
          />
        )}

        {/* Link alla pagina della compagnia */}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col>
        {/* Link esterno al sito della compagnia */}
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

// Esportazione della componente Job per renderla disponibile ad altri moduli
export default Job;

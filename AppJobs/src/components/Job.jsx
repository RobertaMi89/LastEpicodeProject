import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Heart, HeartFill, Star, StarFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";

const Job = ({ data }) => {
  // lista dei preferiti dallo stato Redux utilizzando l'hook "useSelector"
  const favourites = useSelector((state) => state.favourite.list);

  // funzione "dispatch" da react-redux per inviare azioni allo store Redux
  const dispatch = useDispatch();

  // Verifico se l'azienda del lavoro è tra i preferiti
  const isFav = favourites.includes(data.company_name);

  return (
    <Row className="searchResult mx-0 mt-3 p-3">
      {/* Colonna per l'indicatore di preferito e il nome dell'azienda */}
      <Col xs="auto" className="d-flex align-items-center">
        {/* Icona di cuore pieno se l'azienda è tra i preferiti, altrimenti cuore vuoto */}
        {isFav ? (
          <HeartFill
            color="red"
            size={22}
            className="me-2 my-auto"
            // Azione di rimozione dai preferiti quando cliccato
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_FAVOURITE",
                payload: data.company_name,
              })
            }
          />
        ) : (
          <Heart
            color="red"
            size={22}
            className="me-2 my-auto"
            // Azione di aggiunta ai preferiti quando cliccato
            onClick={() =>
              dispatch({
                type: "ADD_TO_FAVOURITE",
                payload: data.company_name,
              })
            }
          />
        )}

        {/* Link al dettaglio della società associata a questo lavoro */}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>

      {/* Colonna per il titolo del lavoro con link esterno al sito del lavoro */}
      <Col>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;

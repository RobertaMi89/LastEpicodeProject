import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Favourites = () => {
  // lista dei preferiti dallo stato Redux utilizzando l'hook "useSelector"
  const favourites = useSelector((state) => state.favourite.list);

  // funzione "dispatch" da react-redux per inviare azioni allo store Redux
  const dispatch = useDispatch();

  // funzione "navigate" dall'hook "useNavigate" per gestire la navigazione tra le pagine
  const navigate = useNavigate();

  return (
    <Container fluid className="bgFav font">
      <Row>
        {/* Intestazione della pagina con il titolo "Favourites" e un pulsante per tornare alla Home */}
        <Col xs={10} className="d-flex align-items-center mx-auto my-3">
          <h1 className="display-4 me-auto">Favourites</h1>
          <Button variant="outline-primary" onClick={() => navigate("/")}>
            go to Home
          </Button>
        </Col>

        {/* Lista dei preferiti */}
        <Col xs={10} className="mx-auto my-3">
          {/* componente ListGroup di React Bootstrap per visualizzare la lista */}
          <ListGroup className=" mx-auto mb-5">
            {favourites.length > 0 ? (
              // Se ci sono preferiti, mappa attraverso l'array e mostra ciascun elemento nella lista
              favourites.map((fav, i) => (
                <ListGroup.Item key={i}>
                  {/* Icona "Trash" per rimuovere dai preferiti e collegamento al risultato della ricerca */}
                  <Trash
                    color="red"
                    className=" me-2"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_FAVOURITE",
                        payload: fav,
                      })
                    }
                  />
                  {/* Collegamento al risultato della ricerca associato al preferito */}
                  <Link to={"/" + fav}>{fav}</Link>
                </ListGroup.Item>
              ))
            ) : (
              // Se non ci sono preferiti, mostra un messaggio informativo
              <ListGroup.Item>
                No favourites yet, go <Link to="/">back to Homepage</Link> to
                select some
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;

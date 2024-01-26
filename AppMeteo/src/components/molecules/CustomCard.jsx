import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

// Definisco un componente funzionale chiamato CustomCard
export const CustomCard = ({ meteoProp, bgImg }) => {
  // Definisco uno stile per l'immagine di sfondo del componente Card
  const backgroundImageStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "20px",
    marginBottom: "20px",
    maxHeight: "200px",
  };

  // Il componente restituisce un Container che racchiude un componente Card
  return (
    <Container className="cardContainer">
      <Card style={bgImg ? backgroundImageStyle : {}}>
        {/* Il corpo della Card contiene un titolo e un testo */}
        <Card.Body className="cardBody ">
          <Card.Title>
            {/* Il titolo è un nome in grassetto proveniente dalla prop meteoProp */}
            <b>{meteoProp.name}</b>
          </Card.Title>
          <Card.Text className="cardText">
            {/* Il testo contiene un'immagine e un valore in grassetto proveniente dalla prop meteoProp */}
            <img src={meteoProp.icon} alt="weather icon" />
            <b>{meteoProp.value}</b>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CustomCard;

import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

export const CustomCard = ({ meteoProp, bgImg }) => {
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

  return (
    <Container className="cardContainer">
      <Card style={bgImg ? backgroundImageStyle : {}}>
        <Card.Body className="cardBody ">
          <Card.Title>
            <b>{meteoProp.name}</b>
          </Card.Title>
          <Card.Text className="cardText">
            <img src={meteoProp.icon}></img>
            <b>{meteoProp.value}</b>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default CustomCard;

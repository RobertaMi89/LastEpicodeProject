import Card from "react-bootstrap/Card";
export const CustomCard = ({ meteoProp, bgImg }) => {
  const backgroundImageStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "100px",
    marginBottom: "20px",
    maxHeight: "250px",
  };

  return (
    <div style={{ width: "500px", height: "auto" }}>
      <Card style={bgImg ? backgroundImageStyle : {}}>
        <Card.Body
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            width: "100%",
            height: "300px",
          }}
        >
          <Card.Title>
            <b>{meteoProp.name}</b>
          </Card.Title>

          <Card.Text style={{ height: "50px" }}>
            <img src={meteoProp.icon}></img>

            <b>{meteoProp.value}</b>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default CustomCard;

import CustomCard from "../molecules/CustomCard";
import { Container, Row, Col } from "react-bootstrap";
const Cards = ({ cityData }) => {
  console.log("cityData", cityData);
  const dataExists = cityData && Object.keys(cityData).length;
  return (
    <>
      {dataExists ? (
        <Container className="pt-3 ">
          <Col xs={6} md={6}>
            <h2 className="text-dark m-5">
              <b>
                {cityData.name},{cityData.sys.country}
              </b>
            </h2>
          </Col>
          <Row xs={1} md={2} className="g-4">
            <Col className="d-flex justify-content-center">
              <CustomCard
                meteoProp={{
                  name: "Wind Speed",
                  value: cityData.wind.speed + " km/h",
                  icon: "./src/assets/media/icon/wind.png",
                }}
                bgImg={"./src/assets/media/si-alza-il-vento.jpg"}
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <CustomCard
                meteoProp={{
                  name: "Weather",
                  value: cityData.weather[0].description,
                  icon: `http://openweathermap.org/img/wn/${cityData.weather[0].icon}.png`,
                }}
                bgImg={"./src/assets/media/totoropioggia.jpg"}
              />
            </Col>
          </Row>
          <Row xs={1} md={2} className="g-4">
            <Col className="d-flex justify-content-center">
              <CustomCard
                meteoProp={{
                  name: "Humidity",
                  value: cityData.main.humidity + "%",
                  icon: "./src/assets/media/icon/humidity.png",
                }}
                bgImg={"./src/assets/media/Ponyo.png"}
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <CustomCard
                meteoProp={{
                  name: "Temperature",
                  value: Math.floor(cityData.main.temp) + "°",
                  icon: "./src/assets/media/icon/temperature.png",
                }}
                bgImg={"./src/assets/media/calcifer.jpg"}
              />
            </Col>
          </Row>
        </Container>
      ) : (
        <p>No data</p>
      )}
    </>
  );
};

export default Cards;

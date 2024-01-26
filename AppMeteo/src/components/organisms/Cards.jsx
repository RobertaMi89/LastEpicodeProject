import CustomCard from "../molecules/CustomCard";
import { Container, Row, Col } from "react-bootstrap";
import { useAppSelector } from "../../storage/Store";
import { weatherSelector } from "../../storage/WeatherSlice";

// Definisco un componente funzionale chiamato Cards
const Cards = () => {
  // Utilizzo il selector dello store per ottenere i dati meteorologici correnti
  const { currentWeather } = useAppSelector(weatherSelector);

  // Verifico se esistono dati meteorologici correnti
  const dataExists = currentWeather && Object.keys(currentWeather).length;

  // Il componente restituisce diversi CustomCard all'interno di un Container e Row, mostrando i dati meteorologici
  return (
    <>
      {dataExists ? (
        <Container className="pt-3">
          {/* Intestazione con il nome della località e del paese */}
          <Col xs={6} md={6}>
            <h2 className="text-dark mb-2 ms-3 mt-3">
              <b>
                {currentWeather.name},{currentWeather.sys.country}
              </b>
            </h2>
          </Col>
          {/* Prima fila di CustomCard */}
          <Row xs={1} md={2} className="g-4">
            <Col className="d-flex justify-content-center ps-0">
              {/* CustomCard per la velocità del vento */}
              <CustomCard
                meteoProp={{
                  name: "Wind Speed",
                  value: currentWeather.wind.speed + " km/h",
                  icon: "./src/assets/media/icon/wind.png",
                }}
                bgImg={"./src/assets/media/si-alza-il-vento.jpg"}
              />
            </Col>
            <Col className="d-flex justify-content-center ps-0">
              {/* CustomCard per le condizioni meteorologiche */}
              <CustomCard
                meteoProp={{
                  name: "Weather",
                  value: currentWeather.weather[0].description,
                  icon: `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`,
                }}
                bgImg={"./src/assets/media/totoropioggia.jpg"}
              />
            </Col>
          </Row>
          {/* Seconda fila di CustomCard */}
          <Row xs={1} md={2} className="g-4">
            <Col className="d-flex justify-content-center ps-0">
              {/* CustomCard per l'umidità */}
              <CustomCard
                meteoProp={{
                  name: "Humidity",
                  value: currentWeather.main.humidity + "%",
                  icon: "./src/assets/media/icon/humidity.png",
                }}
                bgImg={"./src/assets/media/Ponyo.png"}
              />
            </Col>
            <Col className="d-flex justify-content-center ps-0">
              {/* CustomCard per la temperatura */}
              <CustomCard
                meteoProp={{
                  name: "Temperature",
                  value: Math.floor(currentWeather.main.temp) + "°",
                  icon: "./src/assets/media/icon/temperature.png",
                }}
                bgImg={"./src/assets/media/calcifer.jpg"}
              />
            </Col>
          </Row>
        </Container>
      ) : (
        // Se non ci sono dati meteorologici, visualizza un messaggio di "No data"
        <p>No data</p>
      )}
    </>
  );
};

export default Cards;

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchWeatherData from "../../storage/WeatherFetch";
import Cards from "../organisms/Cards";
import CustomFooter from "../organisms/CustomFooter";
import Container from "react-bootstrap/esm/Container";

export const DetailsPage = () => {
  const dispatch = useAppDispatch();

  const [forecast, setForecast] = useState(null);
  const { state } = useLocation();

  const handleSearch = (location) => {
    dispatch(fetchWeather(location));
  };

  const urlData = `https://api.openweathermap.org/data/2.5/weather?q=${state.location}&appid=8f00af1719af9c473173bf7e96becb06&units=metric`;

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${state.location}&appid=8f00af1719af9c473173bf7e96becb06&units=metric`;
        const response = await fetchWeatherData(urlForecast);
        setForecast(response);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    if (state && state.location) {
      searchLocation();
      fetchForecastData();
    }
  }, [state]);

  return (
    <>
      <Container
        fluid
        className="m-0 p-0"
        style={{
          height: "100vh",
          backgroundImage: "",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {city && forecast && <Cards cityData={city} cityForecast={forecast} />}
        {city && forecast && <CustomFooter cityForecast={forecast} />}
      </Container>
    </>
  );
};

export default DetailsPage;

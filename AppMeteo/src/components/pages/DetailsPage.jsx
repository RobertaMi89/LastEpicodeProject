import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Cards from "../organisms/Cards";
import Chart from "../organisms/Chart";
import Container from "react-bootstrap/esm/Container";
import { useAppDispatch, useAppSelector } from "../../storage/Store";
import {
  fetchForecast,
  fetchWeather,
  weatherSelector,
} from "../../storage/WeatherSlice";
import {
  backgroundSelector,
  startBackgroundChanger,
} from "../../storage/BackgroundChangerSlice";

export const DetailsPage = () => {
  const dispatch = useAppDispatch();
  const { state } = useLocation();

  useEffect(() => {
    const getForecastData = async () => {
      if (state && state.location) {
        dispatch(fetchForecast(state.location));
        dispatch(fetchWeather(state.location)); // Utilizziamo Redux per effettuare la ricerca della città

        dispatch(startBackgroundChanger());
      }
    };
    getForecastData();
  }, [dispatch, state]);

  const { currentWeather, forecast } = useAppSelector(weatherSelector);
  const { backgroundImage } = useAppSelector(backgroundSelector);
  return (
    <>
      <Container
        fluid
        className="background m-0 p-0"
        style={{
          background: `url(${backgroundImage}) no-repeat center / cover`,
        }}
      >
        {currentWeather && forecast && <Cards />}
        {currentWeather && forecast && <Chart />}
      </Container>
    </>
  );
};

export default DetailsPage;

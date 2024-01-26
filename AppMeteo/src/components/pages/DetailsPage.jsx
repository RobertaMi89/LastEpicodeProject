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

// Definizione del componente DetailsPage
export const DetailsPage = () => {
  // Ottenimento della funzione di dispatch dallo store e della località dalla barra degli indirizzi
  const dispatch = useAppDispatch();
  const { state } = useLocation();

  // Esecuzione di effetti collaterali all'avvio del componente o quando cambia la località nella barra degli indirizzi
  useEffect(() => {
    // Funzione asincrona per ottenere i dati previsionali e correnti della località
    const getForecastData = async () => {
      // Verifica se la località è presente nello stato
      if (state && state.location) {
        // Dispaccia le azioni per ottenere i dati previsionali e correnti utilizzando Redux
        dispatch(fetchForecast(state.location));
        dispatch(fetchWeather(state.location));

        // Dispaccia l'azione per avviare il cambio di sfondo
        dispatch(startBackgroundChanger());
      }
    };

    // Chiamata alla funzione asincrona
    getForecastData();
  }, [dispatch, state]); // Dipendenze dell'effetto collaterale: dispatch e state

  // Ottenimento dei dati meteorologici correnti, previsionali e dell'immagine di sfondo dallo store
  const { currentWeather, forecast } = useAppSelector(weatherSelector);
  const { backgroundImage } = useAppSelector(backgroundSelector);

  // Il componente restituisce un Container con uno sfondo dinamico e visualizza i componenti Cards e Chart
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

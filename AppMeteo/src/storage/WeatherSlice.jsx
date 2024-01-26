import { createSlice } from "@reduxjs/toolkit";
import { fetchForecastData, fetchWeatherData } from "./WeatherFetch";
import { buildForecastData } from "../utils/Utils";

// Creo uno slice del tuo Redux store per la gestione dei dati meteorologici
export const weatherSlice = createSlice({
  // Specifico il nome dello slice
  name: "weather",

  // Specifico lo stato iniziale
  initialState: {
    currentWeather: null, // Dati meteorologici correnti
    forecast: [], // Dati previsionali
    isLoading: false, // Flag per indicare se la richiesta è in corso
    error: null, // Messaggio di errore in caso di fallimento della richiesta
  },

  // Specifico i reducer, ovvero le funzioni che possono cambiare lo stato
  reducers: {
    // Reducer per impostare i dati meteorologici correnti
    setCurrentWeather: (state, action) => {
      state.currentWeather = action.payload;
      state.isLoading = false;
      state.error = null;
    },

    // Reducer per impostare i dati previsionali
    setForecast: (state, action) => {
      state.forecast = action.payload;
      state.isLoading = false;
      state.error = null;
    },

    // Reducer per impostare lo stato di caricamento
    setLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    // Reducer per impostare il messaggio di errore
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Estraggo i reducer dallo slice
export const { setCurrentWeather, setForecast, setLoading, setError } =
  weatherSlice.actions;

// Azioni asincrone con Redux Thunk per effettuare richieste di dati meteorologici e previsionali
export const fetchWeather = (location) => async (dispatch) => {
  try {
    // Effettuo una richiesta per ottenere i dati meteorologici correnti
    const data = await fetchWeatherData(location);

    // Dispaccia l'azione per impostare i dati meteorologici correnti
    dispatch(setCurrentWeather(data));
  } catch (error) {
    // Dispaccia l'azione per impostare il messaggio di errore in caso di fallimento della richiesta
    dispatch(setError(error.message));
  }
};

export const fetchForecast = (location) => async (dispatch) => {
  try {
    // Effettuo una richiesta per ottenere i dati previsionali
    const data = await fetchForecastData(location);

    // Costruisco i dati di previsione utilizzando la funzione buildForecastData
    const forecastData = buildForecastData(data.list);

    // Dispaccia l'azione per impostare i dati previsionali
    dispatch(setForecast(forecastData));
  } catch (error) {
    // Dispaccia l'azione per impostare il messaggio di errore in caso di fallimento della richiesta
    dispatch(setError(error.message));
  }
};

// Estraggo il reducer dallo slice
export const weatherReducer = weatherSlice.reducer;
export const weatherSelector = (state) => state.weather;

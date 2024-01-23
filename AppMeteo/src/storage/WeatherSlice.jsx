import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherData } from "../storage/WeatherFetch";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    currentWeather: null,
    forecast: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setCurrentWeather: (state, action) => {
      state.currentWeather = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setForecast: (state, action) => {
      state.forecast = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setCurrentWeather, setForecast, setLoading, setError } =
  weatherSlice.actions;

// Azione asincrona con Redux Thunk
export const fetchWeather = (location) => async (dispatch) => {
  try {
    dispatch(setLoading());

    // Eseguire la fetch per il meteo corrente
    const currentWeatherResponse = await fetchWeatherData(location);
    dispatch(setCurrentWeather(currentWeatherResponse));

    // Eseguire la fetch per la previsione
    // ...

    // Aggiornare lo stato con la previsione
    // dispatch(setForecast(forecastData));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default weatherSlice.reducer;

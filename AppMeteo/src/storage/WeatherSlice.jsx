import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherData } from "./WeatherFetch";

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
// In WeatherSlice.jsx
export const fetchWeather = (location) => async (dispatch) => {
  try {
    const data = await fetchWeatherData(location);
    dispatch(setCurrentWeather(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const weatherReducer = weatherSlice.reducer;

export const weatherSelector = (state) => state.weather;

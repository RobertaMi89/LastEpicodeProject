import { fetchWeatherData } from "../../utils/WeatherFetch";
import { setCurrentWeather, setLoading, setError } from "./WeatherSlice";

export const fetchWeather = (location) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const data = await fetchWeatherData(location);
    dispatch(setCurrentWeather(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

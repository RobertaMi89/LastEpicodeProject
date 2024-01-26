const ApiKey = "8f00af1719af9c473173bf7e96becb06";

export const fetchAllWeatherData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error("Errore durante la ricerca della posizione:", error);
    throw error;
  }
};

export const fetchForecastData = (location) => {
  const urlData = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${ApiKey}&units=metric`;

  return fetchAllWeatherData(urlData);
};

export const fetchWeatherData = (location) => {
  const urlData = `https://api.openweathermap.org/data/2.5/weather?q=${location},it&appid=${ApiKey}&units=metric`;

  return fetchAllWeatherData(urlData);
};

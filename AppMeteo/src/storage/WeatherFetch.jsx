const ApiKey = "8f00af1719af9c473173bf7e96becb06";

export const fetchWeatherData = async (location) => {
  try {
    const urlData = `https://api.openweathermap.org/data/2.5/weather?q=${location},it&appid=${ApiKey}&units=metric`;

    const response = await fetch(urlData);
    return await response.json();
  } catch (error) {
    console.error("Errore durante la ricerca della posizione:", error);
    throw error;
  }
};
export default fetchWeatherData;

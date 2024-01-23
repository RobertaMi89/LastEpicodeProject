const ApiKey = "4bb0ca7fe3d82827c0b62fca86878ab2";

export const fetchWeatherData = async (location) => {
  try {
    const urlData = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${ApiKey}&units=metric`;

    const response = await fetch(urlData);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Errore durante la ricerca della posizione:", error);
    throw error;
  }
};

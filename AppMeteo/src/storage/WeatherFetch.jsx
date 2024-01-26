// Chiave API fornita da OpenWeatherMap
const ApiKey = "8f00af1719af9c473173bf7e96becb06";

// Funzione asincrona per effettuare una richiesta generica ai servizi di OpenWeatherMap
export const fetchAllWeatherData = async (url) => {
  try {
    // Effettuo una richiesta HTTP alla URL specificata
    const response = await fetch(url);

    // Restituisco i dati della risposta come oggetto JSON
    return await response.json();
  } catch (error) {
    // Gestisco gli errori durante la richiesta e stampo un messaggio di errore nella console
    console.error("Errore durante la ricerca della posizione:", error);

    // Rilancio l'errore per consentire alla parte chiamante di gestirlo ulteriormente
    throw error;
  }
};

// Funzione per ottenere i dati previsionali dal servizio OpenWeatherMap per una specifica località
export const fetchForecastData = (location) => {
  // Costruisco l'URL per la richiesta dei dati previsionali
  const urlData = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${ApiKey}&units=metric`;

  // Eseguo la richiesta utilizzando la funzione fetchAllWeatherData
  return fetchAllWeatherData(urlData);
};

// Funzione per ottenere i dati meteorologici correnti dal servizio OpenWeatherMap per una specifica località
export const fetchWeatherData = (location) => {
  // Costruisco l'URL per la richiesta dei dati meteorologici correnti
  const urlData = `https://api.openweathermap.org/data/2.5/weather?q=${location},it&appid=${ApiKey}&units=metric`;

  return fetchAllWeatherData(urlData);
};

// Funzione per costruire un array di dati previsionali filtrati per i prossimi 5 giorni
export const buildForecastData = (list) => {
  // Ottengo la data corrente
  const oggi = new Date();
  oggi.setHours(
    oggi.getHours(),
    oggi.getMinutes(),
    oggi.getSeconds(),
    oggi.getMilliseconds()
  );

  // Calcolo la durata di 5 giorni in millisecondi
  const prossimi5Giorni = 5 * 24 * 60 * 60 * 1000; // 5 giorni in millisecondi

  // Filtro gli elementi nell'array list per i prossimi 5 giorni
  const prossimi5GiorniFiltrati = list
    .filter((dato) => {
      const dataOggetto = new Date(dato.dt_txt);
      const differenzaDate = dataOggetto.getTime() - oggi.getTime();
      return differenzaDate >= 0 && differenzaDate < prossimi5Giorni;
    })
    .reduce((acc, dato) => {
      const dataOggetto = new Date(dato.dt_txt);
      const oraCorrente = oggi.getHours() * 60 + oggi.getMinutes();
      const oraOggetto = dataOggetto.getHours() * 60 + dataOggetto.getMinutes();

      // Verifico se esiste già un dato per la data corrente, se no, assegna il nuovo dato
      if (!acc[dataOggetto.getDate()]) {
        acc[dataOggetto.getDate()] = dato;
      } else {
        const dataAcc = new Date(acc[dataOggetto.getDate()].dt_txt);
        const oraAcc = dataAcc.getHours() * 60 + dataAcc.getMinutes();
        const differenzaAcc = Math.abs(oraAcc - oraCorrente);
        const differenzaNuovo = Math.abs(oraOggetto - oraCorrente);

        // Se il nuovo dato è più vicino all'ora corrente, sostituisco il dato esistente
        if (differenzaNuovo < differenzaAcc) {
          acc[dataOggetto.getDate()] = dato;
        }
      }

      return acc;
    }, {});

  // Estraggo i valori dall'oggetto e restituisco un array di oggetti con data e temperatura
  const risultato = Object.values(prossimi5GiorniFiltrati);
  return risultato.map((el) => ({
    date: `${new Date(el.dt_txt).getDate()}/${
      new Date(el.dt_txt).getMonth() + 1
    }`.replace(/\b\d\b/g, "0$&"),
    temperature: el.main.temp,
  }));
};

// Funzione per ottenere l'ora e i minuti correnti nel formato "HH:MM"
export const getHourMinutes = () => {
  // Ottengo l'ora e i minuti dalla data corrente e formatta il risultato
  let date = new Date();
  let minutes =
    date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
  let hours = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();

  // Restituisco la stringa nel formato "HH:MM"
  return `${hours}:${minutes}`;
};

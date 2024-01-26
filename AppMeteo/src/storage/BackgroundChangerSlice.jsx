import { createSlice } from "@reduxjs/toolkit";

// Creo uno slice del tuo Redux store per la gestione dello sfondo
export const backgroundSlice = createSlice({
  // Specifico il nome dello slice
  name: "background",

  // Specifico lo stato iniziale, con l'URL dell'immagine di sfondo di default
  initialState: {
    backgroundImage: "./src/assets/media/alba.svg",
  },

  // Specifico i reducer, ovvero le funzioni che possono cambiare lo stato
  reducers: {
    // Reducer per impostare l'URL dell'immagine di sfondo
    setBackgroundImage: (state, action) => {
      state.backgroundImage = action.payload;
    },
  },
});

// Azione asincrona per avviare la logica di cambio dinamico dello sfondo
export const startBackgroundChanger = () => async (dispatch) => {
  // Ottengo il fuso orario del server (es. "Europe/Rome")
  const serverTimeZone = "Europe/Rome";

  // Ottengo l'orario attuale del server in formato italiano
  const serverTime = new Date().toLocaleString("it-IT", {
    timeZone: serverTimeZone,
  });

  // Estraggo le ore dall'orario del server
  let hours = serverTime.split(" ")[1].split(":")[0];

  // Inizializzo una variabile per l'URL dell'immagine di sfondo
  let bgImg = "./src/assets/media/alba.svg";

  // Logica di cambio dinamico dello sfondo in base all'ora del server
  if (hours >= 0 && hours < 6) {
    bgImg = "./src/assets/media/alba.svg";
  } else if (hours >= 6 && hours < 17) {
    bgImg = "./src/assets/media/giorno.svg";
  } else if (hours >= 17 && hours < 19) {
    bgImg = "./src/assets/media/tramonto.svg";
  } else {
    bgImg = "./src/assets/media/notte.svg";
  }

  // Dispaccia l'azione per impostare l'URL dell'immagine di sfondo
  dispatch(setBackgroundImage(bgImg));
};

// Estrazione delle azioni, il reducer e il selettore dallo slice
export const { setBackgroundImage } = backgroundSlice.actions;
export const backgroundReducer = backgroundSlice.reducer;

// Selettore per ottenere lo stato dello slice dallo store
export const backgroundSelector = (state) => state.background;

import { createSlice } from "@reduxjs/toolkit";

export const backgroundSlice = createSlice({
  name: "background",
  initialState: {
    backgroundImage: "./src/assets/media/alba.svg",
  },
  reducers: {
    setBackgroundImage: (state, action) => {
      state.backgroundImage = action.payload;
    },
  },
});

export const startBackgroundChanger = () => async (dispatch) => {
  const serverTimeZone = "Europe/Rome";
  const serverTime = new Date().toLocaleString("it-IT", {
    timeZone: serverTimeZone,
  });

  let hours = serverTime.split(" ")[1].split(":")[0];

  let bgImg = "./src/assets/media/alba.svg";
  //logica in base all'ora del server
  if (hours >= 0 && hours < 6) {
    bgImg = "./src/assets/media/alba.svg";
  } else if (hours >= 6 && hours < 17) {
    bgImg = "./src/assets/media/giorno.svg";
  } else if (hours >= 17 && hours < 19) {
    bgImg = "./src/assets/media/tramonto.svg";
  } else {
    bgImg = "./src/assets/media/notte.svg";
  }

  dispatch(setBackgroundImage(bgImg));
  // Pulisce l'intervallo quando il componente viene smontato
}; // L'array vuoto [] garantisce che l'effetto si verifichi solo al montaggio del componente

export const { setBackgroundImage } = backgroundSlice.actions;
export const backgroundReducer = backgroundSlice.reducer;

export const backgroundSelector = (state) => state.background;

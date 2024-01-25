import { useEffect } from "react";
import { createSlice } from "@reduxjs/toolkit";
import { connect } from "react-redux";

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

export const BackgroundChanger = () => {
  const startBackgroundChanger = () => {
    const serverTimeZone = "Europe/Rome";

    const serverTime = new Date().toLocaleString("it-IT", {
      timeZone: serverTimeZone,
    });

    const hours = serverTime.split(" ")[1].split(":")[0];
    console.log(hours);

    //logica in base all'ora del server
    if (hours >= 0 && hours < 6) {
      setBackgroundImage("./src/assets/media/alba.svg");
    } else if (hours >= 6 && hours < 17) {
      setBackgroundImage("./src/assets/media/giorno.svg");
    } else if (hours >= 17 && hours < 19) {
      setBackgroundImage("./src/assets/media/tramonto.svg");
    } else {
      setBackgroundImage("./src/assets/media/notte.svg");
    }

    // Pulisce l'intervallo quando il componente viene smontato
  }; // L'array vuoto [] garantisce che l'effetto si verifichi solo al montaggio del componente

  useEffect(() => startBackgroundChanger(), []);
};

export const { setBackgroundImage } = backgroundSlice.actions;
export const backgroundReducer = backgroundSlice.reducer;

export const backgroundSelector = (state) => state.background;

const mapStateToProps = (state) => ({
  backgroundImage: state.background.backgroundImage,
});

const mapDispatchToProps = {
  setBackgroundImage,
};

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundChanger);

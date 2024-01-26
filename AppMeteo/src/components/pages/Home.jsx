import { Container } from "react-bootstrap";
import React, { useEffect } from "react";
import {
  backgroundSelector,
  startBackgroundChanger,
} from "../../storage/BackgroundChangerSlice";
import { useAppSelector, useAppDispatch } from "../../storage/Store";
import CustomNavBar from "../organisms/CustomNavBar.jsx";

// Definizione del componente Home
export const Home = () => {
  // Ottengo la funzione di dispatch dallo store
  const dispatch = useAppDispatch();

  // Ottengo l'immagine di sfondo dallo store
  const { backgroundImage } = useAppSelector(backgroundSelector);

  // Eseguo effetti collaterali all'avvio del componente per avviare il cambio dinamico dello sfondo
  useEffect(() => {
    dispatch(startBackgroundChanger());
  }, []);

  // Il componente restituisce un Container con uno sfondo dinamico e il componente CustomNavBar
  return (
    <>
      <Container
        fluid
        className="background"
        style={{
          background: `url(${backgroundImage}) no-repeat center / cover`,
        }}
      >
        <CustomNavBar />
      </Container>
    </>
  );
};

export default Home;

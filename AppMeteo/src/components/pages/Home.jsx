import { Container } from "react-bootstrap";
import React, { useEffect } from "react";
import { backgroundSelector } from "../../storage/BackgroundChangerSlice.jsx";
import { useAppSelector } from "../../storage/Store";
import CustomNavBar from "../organisms/CustomNavBar.jsx";
import CustomFooter from "../organisms/CustomFooter.jsx";

export const Home = () => {
  const { backgroundImage } = useAppSelector(backgroundSelector);
  console.log(backgroundImage);

  return (
    <>
      <Container
        fluid
        className="background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <CustomNavBar />
      </Container>
    </>
  );
};
export default Home;

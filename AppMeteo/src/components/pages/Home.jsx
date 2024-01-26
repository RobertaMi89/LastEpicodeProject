import { Container } from "react-bootstrap";
import React, { useEffect } from "react";
import {
  backgroundSelector,
  startBackgroundChanger,
} from "../../storage/BackgroundChangerSlice";
import { useAppSelector, useAppDispatch } from "../../storage/Store";
import CustomNavBar from "../organisms/CustomNavBar.jsx";

export const Home = () => {
  const dispatch = useAppDispatch();

  const { backgroundImage } = useAppSelector(backgroundSelector);

  useEffect(() => {
    dispatch(startBackgroundChanger());
  }, []);

  console.log(backgroundImage);
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

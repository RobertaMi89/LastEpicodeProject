import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import SearchBar from "../molecules/SearchBar";
import Cards from "../organisms/Cards";
import Banner from "../atoms/Banner";
import { weatherSelector } from "../../storage/WeatherSlice";
import { useAppSelector } from "../../storage/Store";

const CustomNavBar = () => {
  const dispatch = useAppDispatch();

  const handleSearch = (location) => {
    dispatch(fetchWeather(location));
  };

  useEffect(() => handleSearch("Roma,IT"), []);

  const { currentWeather } = useAppSelector(weatherSelector);

  return (
    <>
      <Navbar>
        <Container fluid className="d-flex ">
          <Nav className="navBar"></Nav>
          <Container>
            <Banner />
            <SearchBar />
          </Container>
        </Container>
      </Navbar>
      <Cards cityData={currentWeather} />
    </>
  );
};

export default CustomNavBar;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import SearchBar from "../molecules/SearchBar";
import Cards from "../organisms/Cards";
import Banner from "../atoms/Banner";
import { fetchWeather } from "../../storage/WeatherSlice";
import { useAppDispatch, useAppSelector } from "../../storage/Store";

const CustomNavBar = () => {
  const dispatch = useAppDispatch();
  const {
    currentWeather: cityData,
    forecast,
    isLoading,
    error,
  } = useAppSelector((state) => state.weather);
  console.log(cityData);
  const navigate = useNavigate();

  const handleSearch = (location) => {
    dispatch(fetchWeather(location));
  };

  useEffect(() => {
    handleSearch("roma");
  }, []);

  const handleButtonClick = () => {
    navigate("/details");
  };

  return (
    <>
      <Navbar>
        <Container fluid className="d-flex ">
          <Nav className="navBar"></Nav>
          <Container>
            <Banner />
            <SearchBar onSearch={handleSearch} />
          </Container>
        </Container>
      </Navbar>
      <Cards cityData={cityData} />
    </>
  );
};

export default CustomNavBar;

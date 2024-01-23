import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Container, Nav } from "react-bootstrap";
import SearchBar from "../molecules/SearchBar";
import Cards from "../organisms/Cards";
import Banner from "../atoms/Banner";
import { fetchWeather } from "../../storage/WeatherSlice";

const CustomNavBar = () => {
  const dispatch = useDispatch();
  const { currentWeather, forecast, isLoading, error } = useSelector(
    (state) => state.weather
  );

  const handleSearch = (location) => {
    dispatch(fetchWeather(location));
  };

  useEffect(() => {
    const location = "Roma,IT";
    handleSearch(location);
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    if (currentWeather && forecast.length > 0) {
      // Qui puoi renderizzare i componenti o le informazioni desiderate
      return (
        <>
          <h1>Current Weather: {currentWeather.name}</h1>
          <Cards cityData={currentWeather} />
          {/* Renderizza le informazioni sulla previsione qui */}
        </>
      );
    }

    return null;
  };

  return (
    <>
      <Navbar>
        <Container fluid className="d-flex ">
          <Nav style={{ maxHeight: "100px" }} navbarScroll></Nav>
          <Container>
            <Banner />
            <SearchBar onSearch={handleSearch} />
          </Container>
        </Container>
      </Navbar>
      {renderContent()}
    </>
  );
};

export default CustomNavBar;

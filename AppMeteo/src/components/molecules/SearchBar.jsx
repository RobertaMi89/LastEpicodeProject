import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const SearchForm = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(location);
  };

  return (
    <Container style={{ width: "100%" }}>
      <Form
        className="d-flex justify-content-center mt-2"
        onSubmit={(event) => handleFormSubmit(event)}
      >
        <Form.Control
          style={{ width: "30%" }}
          type="search"
          value={location}
          placeholder="Enter Location"
          className="me-2"
          onChange={(event) => setLocation(event.target.value)}
          onKeyUp={(event) => handleFormSubmit(event)}
          aria-label="Search"
        />
        <Button
          style={{ backgroundColor: "transparent", border: "none" }}
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search text-dark"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </Button>
      </Form>
    </Container>
  );
};

export default SearchForm;

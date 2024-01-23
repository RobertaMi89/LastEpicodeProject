import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import DetailsPage from "./components/pages/DetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

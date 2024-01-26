import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Container, Card } from "react-bootstrap";
import { useAppSelector } from "../../storage/Store";
import { weatherSelector } from "../../storage/WeatherSlice";
import { buildForecastData, getHourMinutes } from "../../utils/Utils";

// Definisco un componente funzionale chiamato Chart
const Chart = () => {
  // Utilizzo il selector dello store per ottenere i dati previsionali
  const { forecast } = useAppSelector(weatherSelector);

  // grafico a linee basato su dati previsionali utilizzando recharts
  const renderLineChart = (
    <ResponsiveContainer width="100%" height={200} className="mx-auto">
      <LineChart data={forecast}>
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="3 2" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );

  // Il componente restituisce un Card contenente il grafico a linee e informazioni sulle temperature previste
  return (
    <>
      <Container className="mt-5 d-flex d-none d-sm-block align-items-center">
        <Card style={{ width: "98%" }}>
          <Card.Body className="m-0 p-0 text-center">
            <p className="ps-2 pt-2">
              <b>
                Temperatures around &nbsp;
                {`${getHourMinutes()}`} in the next 5 days
              </b>
            </p>
            {forecast && forecast.length ? renderLineChart : "No forecast data"}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Chart;

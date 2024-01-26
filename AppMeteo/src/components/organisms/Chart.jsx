import React, { useEffect } from "react";
import { buildForecastData, getHourMinutes } from "../../utils/Utils";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Container, Card } from "react-bootstrap";
import { useAppSelector } from "../../storage/Store";
import { weatherSelector } from "../../storage/WeatherSlice";

const Chart = () => {
  const { forecast } = useAppSelector(weatherSelector);

  const renderLineChart = (
    <Container className="m-0 p-0 mt-2 d-none d-sm-block mx-auto">
      <LineChart
        width={1100}
        height={200}
        data={forecast}
        style={{ width: "95%" }}
      >
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="3 2" wi />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </Container>
  );

  return (
    <>
      <Container className="mt-5 d-flex d-none d-sm-block text-center">
        <Card style={{ width: "89%" }} className="mx-auto">
          <Card.Body className=" m-0 p-0 text-center">
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

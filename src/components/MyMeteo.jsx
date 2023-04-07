import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MeteoCard from "./MeteoCard";
import Forecast from "./Forecast";
import AddInfo from "./AddInfo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const MyMeteo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const meteo = useSelector((state) => state.meteo.content);
  const luogo = useSelector((state) => state.luogo.content);

  const lat = luogo[0].lat;
  const lon = luogo[0].lon;
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=it&appid=1e7795cb84549b8207c3faa5a25863a5`;

  const request = async (endpoint) => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({ type: "CURRENT_METEO", payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    request(endpoint);
  }, []);

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-end">
          <Button
            onClick={() => {
              navigate("/");
            }}
            variant="primary"
            className="my-4"
          >
            Torna ad home
          </Button>
        </Col>
      </Row>
      {meteo !== null && (
        <>
          <MeteoCard />
          <Forecast />
          <AddInfo />
        </>
      )}
    </Container>
  );
};
export default MyMeteo;

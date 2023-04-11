import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MeteoCard from "./MeteoCard";
import Forecast from "./Forecast";
import AddInfo from "./AddInfo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const MyMeteo = () => {
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);

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
    <>
      <Container fluid className="sfondoMeteo w-100 h-100 mx-0 px-0">
        <Row>
          <Col className="d-flex justify-content-end">
            <Button
              onClick={() => {
                navigate("/");
              }}
              variant="transparent"
              className="my-4 border border-ligth"
            >
              Torna ad home
            </Button>
          </Col>
        </Row>
        <Row>
          <>
            {isLoading && (
              <div className="container-fluid d-flex justify-content-center">
                <Spinner variant="primary" animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            )}
          </>
        </Row>
        {meteo !== null && (
          <div className="">
            <MeteoCard />
            <Forecast />
            <AddInfo />
          </div>
        )}
      </Container>
    </>
  );
};
export default MyMeteo;

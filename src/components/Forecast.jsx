import { useEffect } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Forecast = () => {
  const dispatch = useDispatch();
  const meteoSettimana = useSelector((state) => state.meteoSettimana.content);
  const luogo = useSelector((state) => state.luogo.content);
  const lat = luogo[0].lat;
  const lon = luogo[0].lon;

  const endpoint = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=it&appid=1e7795cb84549b8207c3faa5a25863a5`;
  const request = async (endpoint) => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({ type: "WEEK_WEATHER", payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    request(endpoint);
  }, []);

  return (
    <Container className="oraPerOra">
      {meteoSettimana !== null && (
        <>
          <Row className="flex-column ">
            {meteoSettimana.list.map((day, index) => (
              <Row
                key={index}
                className=" border border-ligth rounded my-1 justify-content-center align-items-center text-center"
              >
                <Col xs={4} lg={3}>
                  {day.dt_txt}
                </Col>

                <Col xs={4} lg={2}>
                  <img className="" src={`https://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt="img" />
                  <p>{day.weather[0].description}</p>
                </Col>

                <Col xs={4} lg={2} className="fs-5">
                  <p className="fw-bold"> {day.main.temp}°C</p>
                  <span className="fs-6">Percepita : </span>
                  <span className="fs-6">( {day.main.feels_like} °C )</span>
                </Col>
                <Col lg={3} className="d-none d-lg-block">
                  Umidità: {day.main.humidity}%
                </Col>
                <Col lg={2} className="d-none d-lg-block">
                  Vento: {day.wind.speed}km/h
                </Col>
              </Row>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};
export default Forecast;

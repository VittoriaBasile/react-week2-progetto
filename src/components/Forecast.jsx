import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Forecast = () => {
  const dispatch = useDispatch();
  const lat = "41.1983522";
  const lon = "16.5776247";

  const endpoint =
    "api.openweathermap.org/data/2.5/forecast?lat=41.1992456&lon=16.5968279&units=metric&lang=it&appid=1e7795cb84549b8207c3faa5a25863a5";
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
  const meteoSettimana = useSelector((state) => state.meteoSettimana.content);
  return (
    <Container>
      {meteoSettimana !== null && (
        <>
          <Row className="flex-column flex-lg-row">
            {meteoSettimana.list.map((day, index) => (
              <Col
                key={index}
                className="d-flex flex-row flex-lg-column justify-content-center align-items-center text-center"
              >
                {day.dt_txt}
                <p>
                  <img className="" src="https://www.pngmart.com/files/3/Weather-PNG-HD.png" alt="img" />
                </p>
                <h1 className="fs-5"></h1>
                <h1 className="fs-5"> {day.main.temp}</h1>
                <p className="">{day.weather.description}</p>
                <p className="">
                  <small className="text-body-secondary">{day.main.temp_max}</small>
                </p>
                <p className="">
                  <small className="text-body-secondary">{day.main.temp_min}</small>
                </p>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};
export default Forecast;

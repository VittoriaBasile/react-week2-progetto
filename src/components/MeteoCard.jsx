import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const MeteoCard = () => {
  const meteo = useSelector((state) => state.meteo.content);
  const icona = `https://openweathermap.org/img/w/${meteo.weather[0].icon}.png`;
  return (
    <Row className="justify-content-center align-items-center">
      <Col>
        <img src={icona} className="card-img-top" alt="Weather" />
      </Col>
      <Col>
        <div className="card mb-3">
          <div className="card-body">
            <h1 className="card-title display-1">{meteo.name}</h1>
            <h1>{parseFloat(meteo.main.temp).toFixed(0)}°</h1>
            <p className="card-text">{meteo.weather[0].description}</p>
            <p className="card-text">
              <small className="text-body-secondary">temperatura massima: {meteo.main.temp_max}°</small>
            </p>
            <p className="card-text">temperatura minima: {meteo.main.temp_min}°</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MeteoCard;

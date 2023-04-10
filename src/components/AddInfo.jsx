import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const AddInfo = () => {
  const meteo = useSelector((state) => state.meteo.content);
  const sunrise =
    parseInt(((meteo.sys.sunrise / (1000 * 60 + 60)) % 24) + 1) +
    ":" +
    parseInt((meteo.sys.sunrise / (1000 * 60)) % 60);

  const sunset =
    parseInt(((meteo.sys.sunset / (1000 * 60 + 60)) % 24) + 1) + ":" + parseInt((meteo.sys.sunset / (1000 * 60)) % 60);
  return (
    <Row className="mt-5">
      <Col>
        <Card className="Pressione text-center">
          <Card.Header>
            <p className="fw-bold">Pressione</p>
            <p>(mbar)</p>
          </Card.Header>
          <Card.Body>
            <Card.Text>{meteo.main.pressure}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card border="secondary" className="text-center">
          <Card.Header>
            <p className="fw-bold">T Max</p>
            <p>( °C )</p>
          </Card.Header>
          <Card.Body>
            <Card.Text>{meteo.main.temp_max}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card border="secondary" className="text-center">
          <Card.Header>
            <p className="fw-bold">T Min</p>
            <p>( °C )</p>
          </Card.Header>
          <Card.Body>
            <Card.Text>{meteo.main.temp_min}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card border="secondary">
          <Card.Header>Alba</Card.Header>
          <Card.Body>
            <Card.Text>
              <p>{sunrise} am</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card border="secondary">
          <Card.Header>Tramonto</Card.Header>
          <Card.Body>
            <Card.Text>
              <p>{sunset} pm</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
export default AddInfo;

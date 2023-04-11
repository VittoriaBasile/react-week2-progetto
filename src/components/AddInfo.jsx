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
    <Row className="my-5">
      <Col>
        <Card className="Pressione text-center">
          <Card.Header>
            <p className="fw-bold">Pressione</p>
            <p>(mbar)</p>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <p>{meteo.main.pressure}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card border="secondary" className="TMax text-center">
          <Card.Header>
            <p className="fw-bold">T Max</p>
            <p>( °C )</p>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <p>{meteo.main.temp_max}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card border="secondary" className="TMin text-center">
          <Card.Header>
            <p className="fw-bold">T Min</p>
            <p>( °C )</p>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <p>{meteo.main.temp_min}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card border=" secondary" className="Sunrise text-center">
          <Card.Header>
            <p className="fw-bold">Alba</p>
            <p>(sunrise)</p>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <p>{sunrise} am</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card border="secondary" className="Sunset text-center">
          <Card.Header>
            <p className="fw-bold">Tramonto</p>
            <p>(sunset)</p>
          </Card.Header>
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

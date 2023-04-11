import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const AddInfo = () => {
  const meteo = useSelector((state) => state.meteo.content);
  const sunrise =
    parseInt((meteo.sys.sunrise / (1000 * 60 + 60)) % 24) + ":" + parseInt((meteo.sys.sunrise / (1000 * 60)) % 60);

  const sunset =
    parseInt((meteo.sys.sunset / (1000 * 60 + 60)) % 24) + ":" + parseInt((meteo.sys.sunset / (1000 * 60)) % 60);
  return (
    <Row className="my-5 mx-2" xs={1} md={2} lg={5}>
      <Col>
        <Card className="addInfo Pressione text-center my-2">
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
        <Card border="secondary" className="addInfo TMax text-center  my-2">
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
        <Card border="secondary" className="addInfo TMin text-center  my-2">
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
        <Card border=" secondary" className="addInfo Sunrise text-center  my-2">
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
        <Card border="secondary" className="addInfo Sunset text-center  my-2">
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

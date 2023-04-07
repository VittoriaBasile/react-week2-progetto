import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const AddInfo = () => {
  const meteo = useSelector((state) => state.meteo.content);
  return (
    <Row>
      <Col>
        <Card border="secondary">
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card border="secondary">
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card border="secondary">
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card border="secondary">
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card border="secondary">
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
export default AddInfo;

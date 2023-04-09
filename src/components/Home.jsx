import { useState } from "react";
import { Container, Form, FormGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const [valore, setValue] = useState("");
  const navigate = useNavigate();

  const endpoint = `http://api.openweathermap.org/geo/1.0/direct?q=${valore}&appid=1e7795cb84549b8207c3faa5a25863a5`;
  const cerca = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();

        dispatch({ type: "SEARCH_TOWN", payload: data });
        navigate("/my-meteo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid className="home px-0">
      <img
        className="homeImage "
        src="https://www.nonsprecare.it/wp-content/uploads/2018/10/a-cosa-servono-le-nuvole-video-2-640x424.jpg"
        alt="img"
      />
      <Row className="ricerca justify-content-center text-center">
        <h1 className="title display-3">Meteo.Vic</h1>
        <Form onSubmit={cerca} size="lg">
          <FormGroup>
            <Form.Control placeholder="search the city" value={valore} onChange={(e) => setValue(e.target.value)} />
          </FormGroup>
        </Form>
      </Row>
    </Container>
  );
};
export default Home;

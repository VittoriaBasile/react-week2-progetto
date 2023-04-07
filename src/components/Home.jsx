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
        console.log(data);
        dispatch({ type: "SEARCH_TOWN", payload: data });
        navigate("/my-meteo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="home">
      <Row className="justify-content-center text-center">
        <h1>Meteo.Vic</h1>
        <Form onSubmit={cerca} size="lg">
          <FormGroup>
            <Form.Control value={valore} onChange={(e) => setValue(e.target.value)} />
          </FormGroup>
        </Form>
      </Row>
    </Container>
  );
};
export default Home;

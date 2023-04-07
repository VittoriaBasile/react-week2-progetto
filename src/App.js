import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MyMeteo from "./components/MyMeteo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-meteo" element={<MyMeteo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

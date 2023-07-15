import { Container } from "react-bootstrap";
import "./App.css";
import Titulo from "./components/Titulo";
import "bootstrap/dist/css/bootstrap.min.css";
import Contador from "./components/Contador";

function App() {
  const estado = true;

  return (
    <Container>
      <Titulo
        subtitulo="Este subtítulo fue creado con props"
        estadoNuevo={estado}
      ></Titulo>
      {/*<Títulos>*/}
      <Contador></Contador>
    </Container>
  );
}

export default App;

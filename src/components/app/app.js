import Router from "../../router/router";
import ParticlesBackground from "../particlesBackground/particlesBackground";
import { BrowserRouter } from "react-router-dom";
import Navbar from '../navbar/navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Router/>
      <ParticlesBackground/>
    </BrowserRouter>
  );
}

export default App;

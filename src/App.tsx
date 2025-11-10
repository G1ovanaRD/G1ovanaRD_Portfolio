import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import Gallery from "./components/pages/Gallery";
import Doctornear from "./components/pages/Doctornear";
import Tericlotes from "./components/pages/Tericlothes";
import Einsomnia from "./components/pages/Einsomnia";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/doctornear" element={<Doctornear />} />
        <Route path="/tericlothes" element={<Tericlotes />} />
        <Route path="/einsomnia" element={<Einsomnia />} />
        <Route
          path="*"
          element={
            <div>
              <Presentation />
              <About />
              <Projects />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import CarContent from "./Components/CarContent/CarContent";
import CarConfig from "./Components/CarConfig/CarConfig";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import Tesla_3_white from "./Assets/cars/model_3/model_3_white_wheel_1.png"
import wheelz1 from "../src/Assets/wheels/model_3/model_3_wheel_1.png"
import wheelz2 from "../src/Assets/wheels/model_3/model_3_wheel_2.png"


function App() {
  const [currentPhoto, setCurrentPhoto] = useState(Tesla_3_white);
  const [wheel__1, setWheel1] = useState(wheelz1);
  const [wheel__2, setWheel2] = useState(wheelz2);
  const [speed, setSpeed] = useState(240);
  const [range, setRange] = useState(513);
  const [inch, setInch] = useState("18″ Aero Wheels");
  const [priceInch, setPriceInch] = useState("Included");
  const [paint, setPaint] = useState("Pearl White Multi-Coat");
  const [pricePaint, setPricePaint] = useState("Included");
  const [priceCar, setPriceCar] = useState("44000");

  return (
    <div className="App d-flex justify-content-between flex-column">
      <div className="app-navbar">
      <Navbar />
      </div>
      <div className="app-content">
        <CarContent 
        currentPhoto={currentPhoto}
        speed={speed}
        range={range}
        />
        <CarConfig 
        setCurrentPhoto={setCurrentPhoto}
        setSpeed={setSpeed}
        setRange={setRange}
        inch={inch}
        priceInch={priceInch}
        setInch={setInch}
        setPriceInch={setPriceInch}
        paint={paint}
        pricePaint={pricePaint}
        setPaint={setPaint}
        setPricePaint={setPricePaint}
        wheel__1={wheel__1}
        setWheel1={setWheel1}
        wheel__2={wheel__2}
        setWheel2={setWheel2}
        priceCar={priceCar}
        setPriceCar={setPriceCar}

        />
      </div>
      <div className="app-footer">
      <Footer />
      </div>
    </div>
  );
}

export default App;

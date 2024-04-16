import "./CarConfig.css";
import React from "react";
import tesla from "./ConfigImages";
import axios from "axios";

const CarConfig = ({
  setCurrentPhoto,
  setSpeed,
  setRange,
  inch,
  priceInch,
  setInch,
  setPriceInch,
  paint,
  pricePaint,
  setPaint,
  setPricePaint,
  wheel__1,
  setWheel1,
  wheel__2,
  setWheel2,
  priceCar,
  setPriceCar
}) => {
  const [wheelModel, setWheelModel] = React.useState("1");
  const [color, setColor] = React.useState("white");
  const [carModel, setCarModel] = React.useState("3");
  const totalPaintPrice = pricePaint === "Included" ? 0 : parseFloat(pricePaint.substring(0));
  const totalInchPrice = priceInch === "Included" ? 0 : parseFloat(priceInch.substring(0));
  const totalPrice = totalPaintPrice + totalInchPrice + parseFloat(priceCar);
  
  const changePhoto = () => {
    if (carModel === "Three") {
      setCurrentPhoto(tesla.model.Three.color.white.wheel.model_1);
      setSpeed(240);
      setRange(513);
      setWheel1(tesla.model.Three.color.white.wheel.model_one);
      setWheel2(tesla.model.Three.color.white.wheel.model_twoo);
      setPriceCar(tesla.model.Three.color.white.wheel.price.tesla_333)
      // setPriceCar(priceTesla.model.Three.price)
      if (color === "white") {
        setCurrentPhoto(tesla.model.Three.color.white.wheel.model_1);
        setPaint("Pearl White Multi-Coat");
        setPricePaint("Included");
        if (wheelModel === "model_1") {
          setCurrentPhoto(tesla.model.Three.color.white.wheel.model_1);
          setInch("18\u2033 Aero Wheels");
          setPriceInch("Included");
        }
        if (wheelModel === "model_2") {
          setCurrentPhoto(tesla.model.Three.color.white.wheel.model_2);
          setInch("20\u2033 Sport Wheels");
          setPriceInch("2000");
        }
      }

      if (color === "black") {
        setCurrentPhoto(tesla.model.Three.color.black.wheel.model_1);
        setPaint("Solid Black");
        setPricePaint("1000");
        if (wheelModel === "model_1") {
          setCurrentPhoto(tesla.model.Three.color.black.wheel.model_1);
          setInch("18\u2033 Aero Wheels");
          setPriceInch("Included");
        }
        if (wheelModel === "model_2") {
          setCurrentPhoto(tesla.model.Three.color.black.wheel.model_2);
          setInch("20\u2033 Sport Wheels");
          setPriceInch("2000");
        }
      }

      if (color === "silver") {
        setCurrentPhoto(tesla.model.Three.color.silver.wheel.model_1);
        setPaint("Midnight Silver Metallic");
        setPricePaint("1500");
        if (wheelModel === "model_1") {
          setCurrentPhoto(tesla.model.Three.color.silver.wheel.model_1);
          setInch("18\u2033 Aero Wheels");
          setPriceInch("Included");
        }
        if (wheelModel === "model_2") {
          setCurrentPhoto(tesla.model.Three.color.silver.wheel.model_2);
          setInch("20\u2033 Sport Wheels");
          setPriceInch("2000");
        }
      }

      if (color === "blue") {
        setCurrentPhoto(tesla.model.Three.color.blue.wheel.model_1);
        setPaint("Deep Blue Metallic");
        setPricePaint("2000");
        if (wheelModel === "model_1") {
          setCurrentPhoto(tesla.model.Three.color.blue.wheel.model_1);
          setInch("18\u2033 Aero Wheels");
          setPriceInch("Included");
        }
        if (wheelModel === "model_2") {
          setCurrentPhoto(tesla.model.Three.color.blue.wheel.model_2);
          setInch("20\u2033 Sport Wheels");
          setPriceInch("2000");
        }
      }

      if (color === "red") {
        setCurrentPhoto(tesla.model.Three.color.red.wheel.model_1);
        setPaint("Red Multi-Coat");
        setPricePaint("2500");
        if (wheelModel === "model_1") {
          setCurrentPhoto(tesla.model.Three.color.red.wheel.model_1);
          setInch("18\u2033 Aero Wheels");
          setPriceInch("Included");
        }
        if (wheelModel === "model_2") {
          setCurrentPhoto(tesla.model.Three.color.red.wheel.model_2);
          setInch("20\u2033 Sport Wheels");
          setPriceInch("2000");
        }
      }
    }
    //  Aici incepe model S

    if (carModel === "S") {
      setCurrentPhoto(tesla.model.S.color.white.wheel.model_1);
      setSpeed(322);
      setRange(600);
      setWheel1(tesla.model.S.color.white.wheel.model_one);
      setWheel2(tesla.model.S.color.white.wheel.model_twoo);
      setPriceCar(tesla.model.S.color.white.wheel.price.tesla_SSS)
      // setPriceCar(priceTesla.model.S.price)
      if (color === "white") {
        setCurrentPhoto(tesla.model.S.color.white.wheel.model_1);
        setPaint("Pearl White Multi-Coat");
        setPricePaint("Included");
        if (wheelModel === "model_1") {
          setCurrentPhoto(tesla.model.S.color.white.wheel.model_1);
          setInch("19\u2033 Tempest Wheels");
          setPriceInch("Included");
        }
        if (wheelModel === "model_2") {
          setCurrentPhoto(tesla.model.S.color.white.wheel.model_2);
          setInch("21\u2033 Sonic Carbon Wheels");
          setPriceInch("3500");
        }
      }

      if (color === "black") {
        setCurrentPhoto(tesla.model.S.color.black.wheel.model_1);
        setPaint("Solid Black");
        setPricePaint("1000");
        if (wheelModel === "model_1") {
          setCurrentPhoto(tesla.model.S.color.black.wheel.model_1);
          setInch("19\u2033 Tempest Wheels");
          setPriceInch("Included");
        }
        if (wheelModel === "model_2") {
          setCurrentPhoto(tesla.model.S.color.black.wheel.model_2);
          setInch("21\u2033 Sonic Carbon Wheels");
          setPriceInch("3500");
        }
      }

      if (color === "silver") {
        setCurrentPhoto(tesla.model.S.color.silver.wheel.model_1);
        setPaint("Midnight Silver Metallic");
        setPricePaint("1500");
        if (wheelModel === "model_1") {
          setCurrentPhoto(tesla.model.S.color.silver.wheel.model_1);
          setInch("19\u2033 Tempest Wheels");
          setPriceInch("Included");
        }
        if (wheelModel === "model_2") {
          setCurrentPhoto(tesla.model.S.color.silver.wheel.model_2);
          setInch("21\u2033 Sonic Carbon Wheels");
          setPriceInch("3500");
        }
      }

      if (color === "blue") {
        setCurrentPhoto(tesla.model.S.color.blue.wheel.model_1);
        setPaint("Deep Blue Metallic");
        setPricePaint("2000");
        if (wheelModel === "model_1") {
          setCurrentPhoto(tesla.model.S.color.blue.wheel.model_1);
          setInch("19\u2033 Tempest Wheels");
          setPriceInch("Included");
        }
        if (wheelModel === "model_2") {
          setCurrentPhoto(tesla.model.S.color.blue.wheel.model_2);
          setInch("21\u2033 Sonic Carbon Wheels");
          setPriceInch("3500");
        }
      }

      if (color === "red") {
        setCurrentPhoto(tesla.model.S.color.red.wheel.model_1);
        setPaint("Red Multi-Coat");
        setPricePaint("2500");
        if (wheelModel === "model_1") {
          setCurrentPhoto(tesla.model.S.color.red.wheel.model_1);
          setInch("19\u2033 Tempest Wheels");
          setPriceInch("Included");
        }
        if (wheelModel === "model_2") {
          setCurrentPhoto(tesla.model.S.color.red.wheel.model_2);
          setInch("21\u2033 Sonic Carbon Wheels");
          setPriceInch("3500");
        }
      }
    }
    //  Aici incepe model X

    if (carModel === "X") {
      setCurrentPhoto(tesla.model.X.color.white.wheel.model_1);
      setSpeed(262);
      setRange(543);
      setWheel1(tesla.model.X.color.white.wheel.model_one);
      setWheel2(tesla.model.X.color.white.wheel.model_twoo);
      setPriceCar(tesla.model.X.color.white.wheel.price.tesla_XXX)
      // setPriceCar(priceTesla.model.X.price)
      if (color === "white") {
        setCurrentPhoto(tesla.model.X.color.white.wheel.model_1);
        setPaint("Pearl White Multi-Coat");
        setPricePaint("Included");
        if (wheelModel === "model_1") {
          setCurrentPhoto(tesla.model.X.color.white.wheel.model_1);
          setInch("20\u2033  Silver Wheels");
          setPriceInch("Included");
        }
        if (wheelModel === "model_2") {
          setCurrentPhoto(tesla.model.X.color.white.wheel.model_2);
          setInch("22\u2033 Onyx Black Wheels");
          setPriceInch("4500");
        }
      }

      if (color === "black") {
        setCurrentPhoto(tesla.model.X.color.black.wheel.model_1);
        setPaint("Solid Black");
        setPricePaint("1000");
        if (wheelModel === "model_1") {
          setCurrentPhoto(tesla.model.X.color.black.wheel.model_1);
          setInch("20\u2033  Silver Wheels");
          setPriceInch("Included");
        }
        if (wheelModel === "model_2") {
          setCurrentPhoto(tesla.model.X.color.black.wheel.model_2);
          setInch("22\u2033 Onyx Black Wheels");
          setPriceInch("4500");
        }
      }

      if (color === "silver") {
        setCurrentPhoto(tesla.model.X.color.silver.wheel.model_1);
        setPaint("Midnight Silver Metallic");
        setPricePaint("1500");
        if (wheelModel === "model_1") {
          setCurrentPhoto(tesla.model.X.color.silver.wheel.model_1);
          setInch("20\u2033  Silver Wheels");
          setPriceInch("Included");
        }
        if (wheelModel === "model_2") {
          setCurrentPhoto(tesla.model.X.color.silver.wheel.model_2);
          setInch("22\u2033 Onyx Black Wheels");
          setPriceInch("4500");
        }
      }

      if (color === "blue") {
        setCurrentPhoto(tesla.model.X.color.blue.wheel.model_1);
        setPaint("Deep Blue Metallic");
        setPricePaint("2000");
        if (wheelModel === "model_1") {
          setCurrentPhoto(tesla.model.X.color.blue.wheel.model_1);
          setInch("20\u2033  Silver Wheels");
          setPriceInch("Included");
        }
        if (wheelModel === "model_2") {
          setCurrentPhoto(tesla.model.X.color.blue.wheel.model_2);
          setInch("22\u2033 Onyx Black Wheels");
          setPriceInch("4500");
        }
      }

      if (color === "red") {
        setCurrentPhoto(tesla.model.X.color.red.wheel.model_1);
        setPaint("Red Multi-Coat");
        setPricePaint("2500");
        if (wheelModel === "model_1") {
          setCurrentPhoto(tesla.model.X.color.red.wheel.model_1);
          setInch("20\u2033  Silver Wheels");
          setPriceInch("Included");
        }
        if (wheelModel === "model_2") {
          setCurrentPhoto(tesla.model.X.color.red.wheel.model_2);
          setInch("22\u2033 Onyx Black Wheels");
          setPriceInch("4500");
        }
      }
    }
    //  Aici incepe model Y

    if (carModel === "Y") {
      setCurrentPhoto(tesla.model.Y.color.white.wheel.model_1);
      setSpeed(246);
      setRange(514);
      setWheel1(tesla.model.Y.color.white.wheel.model_one);
      setWheel2(tesla.model.Y.color.white.wheel.model_twoo);
      setPriceCar(tesla.model.Y.color.white.wheel.price.tesla_YYY)
      // setPriceCar(priceTesla.model.Y.price)
      if (color === "white") {
        setCurrentPhoto(tesla.model.Y.color.white.wheel.model_1);
        setPaint("Pearl White Multi-Coat");
        setPricePaint("Included");
        if (wheelModel === "model_1") {
          setCurrentPhoto(tesla.model.Y.color.white.wheel.model_1);
          setInch("19\u2033 Gemini Wheels");
          setPriceInch("Included");
        }
        if (wheelModel === "model_2") {
          setCurrentPhoto(tesla.model.Y.color.white.wheel.model_2);
          setInch("20\u2033 Induction Wheels");
          setPriceInch("2500");
        }
      }

      if (color === "black") {
        setCurrentPhoto(tesla.model.Y.color.black.wheel.model_1);
        setPaint("Solid Black");
        setPricePaint("1000");
        if (wheelModel === "model_1") {
          setCurrentPhoto(tesla.model.Y.color.black.wheel.model_1);
          setInch("19\u2033 Gemini Wheels");
          setPriceInch("Included");
        }
        if (wheelModel === "model_2") {
          setCurrentPhoto(tesla.model.Y.color.black.wheel.model_2);
          setInch("20\u2033 Induction Wheels");
          setPriceInch("2500");
        }
      }

      if (color === "silver") {
        setCurrentPhoto(tesla.model.Y.color.silver.wheel.model_1);
        setPaint("Midnight Silver Metallic");
        setPricePaint("1500");
        if (wheelModel === "model_1") {
          setCurrentPhoto(tesla.model.Y.color.silver.wheel.model_1);
          setInch("19\u2033 Gemini Wheels");
          setPriceInch("Included");
        }
        if (wheelModel === "model_2") {
          setCurrentPhoto(tesla.model.Y.color.silver.wheel.model_2);
          setInch("20\u2033 Induction Wheels");
          setPriceInch("2500");
        }
      }

      if (color === "blue") {
        setCurrentPhoto(tesla.model.Y.color.blue.wheel.model_1);
        setPaint("Deep Blue Metallic");
        setPricePaint("2000");
        if (wheelModel === "model_1") {
          setCurrentPhoto(tesla.model.Y.color.blue.wheel.model_1);
          setInch("19\u2033 Gemini Wheels");
          setPriceInch("Included");
        }
        if (wheelModel === "model_2") {
          setCurrentPhoto(tesla.model.Y.color.blue.wheel.model_2);
          setInch("20\u2033 Induction Wheels");
          setPriceInch("2500");
        }
      }

      if (color === "red") {
        setCurrentPhoto(tesla.model.Y.color.red.wheel.model_1);
        setPaint("Red Multi-Coat");
        setPricePaint("2500");
        if (wheelModel === "model_1") {
          setCurrentPhoto(tesla.model.Y.color.red.wheel.model_1);
          setInch("19\u2033 Gemini Wheels");
          setPriceInch("Included");
        }
        if (wheelModel === "model_2") {
          setCurrentPhoto(tesla.model.Y.color.red.wheel.model_2);
          setInch("20\u2033 Induction Wheels");
          setPriceInch("2500");
        }
      }
    }
  };

  React.useEffect(() => {
    changePhoto();
  }, [wheelModel, color, carModel]);

  const handlePayment = async () => {
   const response = await axios.post("http://localhost:8085/stripe/create-payment-link", {
      amount: totalPrice*100,
      currency: "usd"
    })
    console.log(response.data)
    window.location.href = response.data.paymentLink;
  }

  return (
    <div className="car-config">
      <div className="select-car config">
        <div className="config-title">
          <div className="title">Select Car</div>
        </div>
        <div className="car-models">
          <div className="car-model" onClick={() => setCarModel("Three")}>
            <p>Model 3</p>
          </div>
          <div className="car-model" onClick={() => setCarModel("S")}>
            <p>Model S</p>
          </div>
          <div className="car-model" onClick={() => setCarModel("X")}>
            <p>Model X</p>
          </div>
          <div className="car-model" onClick={() => setCarModel("Y")}>
            <p>Model Y</p>
          </div>
        </div>
      </div>

      <div className="select-color config">
        <div className="title">Select Color</div>

        <div className="color-settings">
          <div className="option-color">
            <div
              class="white "
              title="Pearl White Multi-Coat"
              onClick={() => setColor("white")}
            ></div>
          </div>
          <div className="option-color">
            <div
              class="black"
              title="Solid Black"
              onClick={() => setColor("black")}
            ></div>
          </div>
          <div className="option-color">
            <div
              class="silver"
              title="Midnight Silver Metall"
              onClick={() => setColor("silver")}
            ></div>
          </div>
          <div className="option-color">
            <div
              class="blue"
              title="Deep Blue Metallic"
              onClick={() => setColor("blue")}
            ></div>
          </div>
          <div className="option-color">
            <div
              class="red"
              title="Red Multi-Coat"
              onClick={() => setColor("red")}
            ></div>
          </div>
        </div>
        <div className="details-wheel">
          <p>{paint}</p>
          <p>${pricePaint}</p>
        </div>
      </div>

      <div className="select-wheels config">
        <div className="title">Select Wheels</div>
        <div class="wheel-settings">
          <div
            className="option-wheel"
            onClick={() => setWheelModel("model_1")}
          >
            <img
              src={wheel__1}
              className="wheel-img"
              alt='19" Tempest Wheels'
              title='19" Tempest Wheels'
            />
          </div>
          <div
            className="option-wheel"
            onClick={() => setWheelModel("model_2")}
          >
            <img
              src={wheel__2}
              className="wheel-img"
              alt='19" Tempest Wheels'
              title='19" Tempest Wheels'
            />
          </div>
        </div>
        <div className="details-wheel">
          <p>{inch}</p>
          <p>${priceInch}</p>
        </div>
      </div>

      <div className="select-price-btn config">
        <div className="select-pb">
          <h2>Total price:  ${totalPrice}</h2>
        </div>
        <div className="select-pb">
          <button onClick={handlePayment} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CarConfig;

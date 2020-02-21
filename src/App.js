import React from "react";
import "./App.css";
import VxTable from "./components/VxTable";
import MyNavbar from "./components/MyNavBar";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [values, setValues] = useState({
    origin: "",
    destination: "",
    minutes: '',
    plan: ""
  });

  const [valueWithPlan, setValueWithPlan] = useState(0);
  const [valueWithoutPlan, setValueWithoutPlan] = useState(0);

  const [originDDD, setOriginDDD] = useState([
    { key: 1, text: "011", value: "011" },
    { key: 2, text: "016", value: "016" },
    { key: 3, text: "017", value: "017" },
    { key: 4, text: "018", value: "018" }
  ]);

  const [destinationDDD, setDestinationDDD] = useState([
    { key: 1, text: "011", value: "011" },
    { key: 2, text: "016", value: "016" },
    { key: 3, text: "017", value: "017" },
    { key: 4, text: "018", value: "018" }
  ]);


  useEffect(() => {
    setValues(values);
    handleSelect();
  }, [values]);

  const elevenToSixteen = 1.9;
  const elevenToSeventeen = 1.7;
  const elevenToEighteen = 0.9;
  const sixteenToEleven = 2.9;
  const seventeenToEleven = 2.7;
  const eighteenToEleven = 1.9;

  const callPriceCalculation = () => {
    switch (values.origin) {
      case "011":
        if (values.destination === "016") {
          setValueWithoutPlan(elevenToSixteen * values.minutes);
        } else if (values.destination === "017") {
          setValueWithoutPlan(elevenToSeventeen * values.minutes);
        } else if (values.destination === "018") {
          setValueWithoutPlan(elevenToEighteen * values.minutes);
        }
        break;
      case "016":
        setValueWithoutPlan(sixteenToEleven * values.minutes);
        break;
      case "017":
        setValueWithoutPlan(seventeenToEleven * values.minutes);
        break;
      case "018":
        setValueWithoutPlan(eighteenToEleven * values.minutes);
        break;
    }
  };

  const faleMais30 = (values.minutes - 30) * 1.1;
  const faleMais60 = (values.minutes - 60) * 1.1;
  const faleMais120 = (values.minutes - 120) * 1.1;

  const planCalculation = () => {
    switch (values.plan) {
      case "Plano FaleMais 30":
        if (values.minutes <= 30) {
          setValueWithPlan(0);
        } else {
          if (values.origin === "011" && values.destination === "016") {
            setValueWithPlan(faleMais30 * elevenToSixteen);
          } else if (values.origin === "011" && values.destination === "017") {
            setValueWithPlan(faleMais30 * elevenToSeventeen);
          } else if (values.origin === "011" && values.destination === "018") {
            setValueWithPlan(faleMais30 * elevenToEighteen);
          } else if (values.origin === "016" && values.destination === "011") {
            setValueWithPlan(faleMais30 * sixteenToEleven);
          } else if (values.origin === "017" && values.destination === "011") {
            setValueWithPlan(faleMais30 * seventeenToEleven);
          } else if (values.origin === "018" && values.destination === "011") {
            setValueWithPlan(faleMais30 * eighteenToEleven);
          }
        }
        break;
      case "Plano FaleMais 60":
        if (values.minutes <= 60) {
          setValueWithPlan(0);
        } else {
          if (values.origin === "011" && values.destination === "016") {
            setValueWithPlan(faleMais60 * elevenToSixteen);
          } else if (values.origin === "011" && values.destination === "017") {
            setValueWithPlan(faleMais60 * elevenToSeventeen);
          } else if (values.origin === "011" && values.destination === "018") {
            setValueWithPlan(faleMais60 * elevenToEighteen);
          } else if (values.origin === "016" && values.destination === "011") {
            setValueWithPlan(faleMais60 * sixteenToEleven);
          } else if (values.origin === "017" && values.destination === "011") {
            setValueWithPlan(faleMais60 * seventeenToEleven);
          } else if (values.origin === "018" && values.destination === "011") {
            setValueWithPlan(faleMais60 * eighteenToEleven);
          }
        }
        break;
      case "Plano FaleMais 120":
        if (values.minutes <= 120) {
          setValueWithPlan(0);
        } else {
          if (values.origin === "011" && values.destination === "016") {
            setValueWithPlan(faleMais120 * elevenToSixteen);
          } else if (values.origin === "011" && values.destination === "017") {
            setValueWithPlan(faleMais120 * elevenToSeventeen);
          } else if (values.origin === "011" && values.destination === "018") {
            setValueWithPlan(faleMais120 * elevenToEighteen);
          } else if (values.origin === "016" && values.destination === "011") {
            setValueWithPlan(faleMais120 * sixteenToEleven);
          } else if (values.origin === "017" && values.destination === "011") {
            setValueWithPlan(faleMais120 * seventeenToEleven);
          } else if (values.origin === "018" && values.destination === "011") {
            setValueWithPlan(faleMais120 * eighteenToEleven);
          }
        }
        break;
    }
  };

  

  const handleSubmit = e => {
    e.persist();
    callPriceCalculation();
    planCalculation();
  };
  
  const handleInputChange = (e, result) => {
    const { name, value } = result || e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSelect = () => {
    if(values.origin === '011'){
      setDestinationDDD([
        { key: 2, text: "016", value: "016" },
    { key: 3, text: "017", value: "017" },
    { key: 4, text: "018", value: "018" }
  ])
    } else if (values.origin === '016' || values.origin === '017' || values.origin === '018') {
      setDestinationDDD([
    { key: 1, text: "011", value: "011" },
  ])
    }
  }

  const handleReset = (e) => {
    e.preventDefault();
    setValues({origin: "",
    destination: "",
    minutes: '',
    plan: ""});
    setValueWithPlan(0);
    setValueWithoutPlan(0);
}

  return (
    <>
      <MyNavbar />
      <div className="App d-flex flex-column align-items-center mt-5">
        <h1 className='mb-5 header'>Conheça nossos planos e simule as tarifas</h1>
        <VxTable
          getValueWithPlan={valueWithPlan}
          getValueWithoutPlan={valueWithoutPlan}
          getSubmit={handleSubmit}
          getInputChange={handleInputChange}
          getOrigin={values.origin}
          getDestination={values.destination}
          getMinutes={values.minutes}
          getPlan={values.plan}
          getOriginDDD={originDDD}
          getDestinationDDD={destinationDDD}
          resetForm={handleReset}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;


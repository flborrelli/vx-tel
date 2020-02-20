import React from "react";
import "./App.css";
import VxTable from "./components/VxTable";
import MyNavbar from "./components/MyNavBar";
import { Button, Dropdown } from "semantic-ui-react";
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

  useEffect(() => {
    setValues(values);
    setValueWithPlan(valueWithPlan);
    setValueWithoutPlan(valueWithoutPlan);
  }, [values, valueWithPlan, valueWithoutPlan]);

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
    e.preventDefault();
    console.log("submiting");
    callPriceCalculation();
    planCalculation();
  };

  const handleInputChange = (e, result) => {
    const { name, value } = result || e.target.value;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  return (
    <>
      <MyNavbar />
      <div className="App d-flex flex-column align-items-center mt-5">
        <h1 className=''>Conheça nossos planos e simule os valores abaixo</h1>
        <VxTable
          getValueWithPlan={valueWithPlan}
          getValueWithoutPlan={valueWithoutPlan}
          getSubmit={handleSubmit}
          getInputChange={handleInputChange}
          getOrigin={values.origin}
          getDestination={values.destination}
          getMinutes={values.minutes}
          getPlan={values.plan}
        />
      </div>
    </>
  );
}

export default App;

// getValueWithPlan={valueWithPlan} getValueWithoutPlan={valueWithoutPlan}

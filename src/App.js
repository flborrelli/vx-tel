import React from "react";
import "./App.css";
import VxTable from "./components/VxTable";
import MyNavbar from "./components/MyNavBar";
import { Button, Dropdown } from "semantic-ui-react";
import { useState, useEffect } from "react";

function App() {
  const [values, setValues] = useState({
    origin: "",
    destination: "",
    minutes: 0,
    plan: ""
  });

  const [valueWithPlan, setValueWithPlan] = useState(0);
  const [valueWithoutPlan, setValueWithoutPlan] = useState(0);

  useEffect(() => {
    setValues(values);
    setValueWithPlan(valueWithPlan);
    setValueWithoutPlan(valueWithoutPlan);
  }, [values, valueWithPlan, valueWithoutPlan]);

  const elevenToSixteen = values.minutes * 1.9;
  const elevenToSeventeen = values.minutes * 1.7;
  const elevenToEighteen = values.minutes * 0.9;
  const seventeenToEleven = values.minutes * 2.9;
  const seventeenToEleven = values.minutes * 2.7;
  const eighteenToEleven = values.minutes * 1.9;



  const callPriceCalculation = () => {
    switch (values.origin) {
      case "011":
        if (values.destination === "016") {
          setValueWithoutPlan(elevenToSixteen);
        } else if (values.destination === "017") {
          setValueWithoutPlan(elevenToSeventeen);
        } else if (values.destination === "018") {
          setValueWithoutPlan(elevenToEighteen);
        }
        break;
      case "016":
        setValueWithoutPlan(seventeenToEleven);
        break;
      case "017":
        setValueWithoutPlan(seventeenToEleven);
        break;
      case "018":
        setValueWithoutPlan(eighteenToEleven);
        break;
    }
  };

  const planCalculation = initialValue => {
    switch (values.plan) {
      case "Plano FaleMais 30":
        setValueWithPlan()
        break;
      case "Plano FaleMais 60":
        setValueWithoutPlan(values.minutes * 2.9);
        break;
      case "Plano FaleMais 120":
        setValueWithoutPlan(values.minutes * 2.7);
        break;
      case "018":
        setValueWithoutPlan(values.minutes * 1.9);
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submiting");
    callPriceCalculation();
  };

  const handleInputChange = (e, result) => {
    const { name, value } = result || e.target.value;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  return (
    <>
      <MyNavbar />
      <div className="App">
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

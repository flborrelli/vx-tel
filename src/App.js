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
  const sixteenToEleven = values.minutes * 2.9;
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
        setValueWithoutPlan(sixteenToEleven);
        break;
      case "017":
        setValueWithoutPlan(seventeenToEleven);
        break;
      case "018":
        setValueWithoutPlan(eighteenToEleven);
        break;
    }
  };



  const planCalculation = () => {
    switch (values.plan) {
      case "Plano FaleMais 30":
        if(values.minutes <= 30){
          setValueWithPlan(0)
        } else{
          if(values.origin === '011' && values.destination === '016'){
           setValueWithPlan((values.minutes - 30) * 1.10 * 1.9) 
          }
          else if(values.origin === '011' && values.destination === '017'){
           setValueWithPlan((values.minutes - 30) * 1.10 * 1.7) 
        }
          else if(values.origin === '011' && values.destination === '018'){
           setValueWithPlan((values.minutes - 30) * 1.10 * 0.9) 
        }
        else if(values.origin === '016' && values.destination === '011'){
           setValueWithPlan((values.minutes - 30) * 1.10 * 2.9) 
        }
        else if(values.origin === '017' && values.destination === '011'){
           setValueWithPlan((values.minutes - 30) * 1.10 * 2.7) 
        }
        else if(values.origin === '018' && values.destination === '011'){
           setValueWithPlan((values.minutes - 30) * 1.10 * 1.9) 
        }}      
        break;
      case "Plano FaleMais 60":
        if(values.minutes <= 60){
          setValueWithPlan(0)
        } else{
          if(values.origin === '011' && values.destination === '016'){
           setValueWithPlan((values.minutes - 60) * 1.10 * 1.9) 
          }
          else if(values.origin === '011' && values.destination === '017'){
           setValueWithPlan((values.minutes - 60) * 1.10 * 1.7) 
        }
          else if(values.origin === '011' && values.destination === '018'){
           setValueWithPlan((values.minutes - 60) * 1.10 * 0.9) 
        }
        else if(values.origin === '016' && values.destination === '011'){
           setValueWithPlan((values.minutes - 60) * 1.10 * 2.9) 
        }
        else if(values.origin === '017' && values.destination === '011'){
           setValueWithPlan((values.minutes - 60) * 1.10 * 2.7) 
        }
        else if(values.origin === '018' && values.destination === '011'){
           setValueWithPlan((values.minutes - 60) * 1.10 * 1.9) 
        }}
        break;
      case "Plano FaleMais 120":
        if(values.minutes <= 120){
          setValueWithPlan(0)
        } else{
          if(values.origin === '011' && values.destination === '016'){
           setValueWithPlan((values.minutes - 120) * 1.10 * 1.9) 
          }
          else if(values.origin === '011' && values.destination === '017'){
           setValueWithPlan((values.minutes - 120) * 1.10 * 1.7) 
        }
          else if(values.origin === '011' && values.destination === '018'){
           setValueWithPlan((values.minutes - 120) * 1.10 * 0.9) 
        }
        else if(values.origin === '016' && values.destination === '011'){
           setValueWithPlan((values.minutes - 120) * 1.10 * 2.9) 
        }
        else if(values.origin === '017' && values.destination === '011'){
           setValueWithPlan((values.minutes - 120) * 1.10 * 2.7) 
        }
        else if(values.origin === '018' && values.destination === '011'){
           setValueWithPlan((values.minutes - 120) * 1.10 * 1.9) 
        }}
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

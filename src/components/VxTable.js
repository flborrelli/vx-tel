import React from "react";
import { Dropdown, Button, Input, Form } from "semantic-ui-react";

function VxTable(props) {
  const originDDD = [
    { key: 1, text: "011", value: "011" },
    { key: 2, text: "016", value: "016" },
    { key: 3, text: "017", value: "017" },
    { key: 4, text: "018", value: "018" }
  ];

  const destinationDDD = [
    { key: 1, text: "011", value: "011" },
    { key: 2, text: "016", value: "016" },
    { key: 3, text: "017", value: "017" },
    { key: 4, text: "018", value: "018" }
  ];

  const plan = [
    { key: 1, text: "Plano FaleMais 30", value: "Plano FaleMais 30" },
    { key: 2, text: "Plano FaleMais 60", value: "Plano FaleMais 60" },
    { key: 3, text: "Plano FaleMais 120", value: "Plano FaleMais 120" }
  ];

  return (
    <>
      <div className="form-container container">
        <Form onSubmit={props.getSubmit} className='form-subcontainer'>
        <div className="row">  
          <div className="col-sm my-3">
            <div className="">
              <p>DDD Origem</p>
            </div>
            <Dropdown
              className=""
              clearable
              options={originDDD}
              value={props.getOrigin}
              onChange={props.getInputChange}
              name="origin"
              selection
            />
          </div>

          <div className="d-flex align-items-center mt-3">
            <i class="fas fa-arrow-right"></i>
          </div>

          <div className="col-sm my-3">
            <div className="">
              <p>DDD Destino</p>
            </div>
            <Dropdown
              clearable
              options={destinationDDD}
              value={props.getDestination}
              onChange={props.getInputChange}
              name="destination"
              selection
            />
          </div>

          </div>
          <div className='row'>
          <div className="col-sm my-3">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <i className="fas fa-phone-alt mr-2"></i>
              <p>Minutos/mês</p>
            </div>
            <Input
              icon="users"
              iconPosition="left"
              value={props.getMinutes}
              onChange={props.getInputChange}
              name="minutes"
              placeholder="Quantos minutos?"
              type="number"
              min='0'
              required
            />
          </div>

          <div className="col-sm my-3">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <i className="fas fa-star mr-2"></i>
              <p>Escolha seu Plano FaleMais</p>
            </div>
            <Dropdown
              clearable
              options={plan}
              value={props.getPlan}
              onChange={props.getInputChange}
              name="plan"
              selection
            />
          </div>
          </div>

          <div className="">
            <Button icon="search" type="submit" color="teal"></Button>
          </div>
        
        </Form>
      </div>

      <div className="d-flex justify-content-around mt-4">
        <div className="value-box">
          <h3>Com FaleMais</h3>
          <h4>R$ {props.getValueWithPlan}</h4>
        </div>
        <div className="value-box">
          <h3>Sem FaleMais</h3>
          <h4>R$ {props.getValueWithoutPlan}</h4>
        </div>
      </div>
    </>
  );
}

export default VxTable;

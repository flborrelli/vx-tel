import React from "react";
import { Button } from "semantic-ui-react";
import {Input, Form, Dropdown} from 'semantic-ui-react-form-validator';

function VxTable(props) {

  const plan = [
    { key: 1, text: "Plano FaleMais 30", value: "Plano FaleMais 30" },
    { key: 2, text: "Plano FaleMais 60", value: "Plano FaleMais 60" },
    { key: 3, text: "Plano FaleMais 120", value: "Plano FaleMais 120" }
  ];

  return (
    <>
      <div className="form-container container">
        <Form onSubmit={props.getSubmit} className='form-subcontainer mt-2'
        >
        <div className="row justify-content-around">  
          <div className="col-sm-5 my-3">
            <div className="d-flex justify-content-center align-items-center mb-3">
            <i className="fas fa-home mr-2 house"></i>
              <p>DDD Origem</p>
            </div>
            <Dropdown
              clearable
              options={props.getOriginDDD}
              value={props.getOrigin}
              onChange={props.getInputChange}
              name="origin"
              placeholder='De onde liga?'
              selection
              validators={['required']} 
          errorMessages={['Este campo é obrigatório']} 
            />
          </div>

      

          <div className="col-sm-5 my-3">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <i class="fas fa-map-pin mr-2 pin"></i>
              <p>DDD Destino</p>
            </div>
            <Dropdown
              clearable
              options={props.getDestinationDDD}
              value={props.getDestination}
              onChange={props.getInputChange}
              name="destination"
              placeholder='Para onde quer ligar?'
              selection
              validators={['required']} 
          errorMessages={['Este campo é obrigatório']} 
            />
          </div>

          </div>
          <div className='row justify-content-around mt-3'>
          <div className="col-sm-5 my-3">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <i className="fas fa-phone-alt mr-2 phone"></i>
              <p>Minutos</p>
            </div>
            <Input
              iconPosition="left"
              value={props.getMinutes}
              onChange={props.getInputChange}
              name="minutes"
              placeholder="Quantos minutos?"
              type="number"
              min='0'
              validators={['required']}
          errorMessages={['Este campo é obrigatório']}
            />
          </div>


          <div className="col-sm-5 my-3">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <i className="fas fa-star mr-2 star"></i>
              <p>Escolha seu Plano</p>
            </div>
            <Dropdown
              clearable
              placeholder='FaleMais 30, 60 ou 120?'
              options={plan}
              value={props.getPlan}
              onChange={props.getInputChange}
              name="plan"
          validators={['required']}
          errorMessages={['Este campo é obrigatório']}
              selection
            />
          </div>
          </div>

          <div className="mb-4 mt-4">
            <Button className='submit-button' type="submit" color="teal">Simule agora</Button>
          </div>

          <div className="mb-4 mt-4">
            <Button onClick={props.resetForm} className='clean-button' type="submit" color="red">Limpar</Button>
          </div>
          
        </Form>
      </div>

      <div className="d-flex justify-content-around mt-5 result-container mb-5">
        {
          props.getValueWithPlan === props.getValueWithoutPlan ?
          <>
          <div className="value-box d-flex flex-column align-items-center">
          <h3>Com {props.getPlan}</h3>
          <h4>R$ {props.getValueWithPlan.toFixed(2).replace(".",",").replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h4>
        </div>
        <div className="value-box d-flex flex-column align-items-center">
          <h3>Sem {props.getPlan}</h3>
          <h4>R$ {props.getValueWithoutPlan.toFixed(2).replace(".",",").replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h4>
        </div>
        </>
          :  <>{
            props.getValueWithPlan < props.getValueWithoutPlan ?
            <>
            <div className="value-box d-flex flex-column align-items-center">
          <h3>Com {props.getPlan}</h3>
          <h4 className='value-green'>R$ {props.getValueWithPlan.toFixed(2).replace(".",",").replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h4>
        </div>
        <div className="value-box d-flex flex-column align-items-center">
          <h3>Sem {props.getPlan}</h3>
          <h4 className='value-red'>R$ {props.getValueWithoutPlan.toFixed(2).replace(".",",").replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h4>
        </div>
        </>
            :
            <>
            <div className="value-box d-flex flex-column align-items-center">
          <h3>Com {props.getPlan}</h3>
          <h4 className='value-red'>R$ {props.getValueWithPlan.toFixed(2).replace(".",",").replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h4>
        </div>
        <div className="value-box d-flex flex-column align-items-center">
          <h3>Sem {props.getPlan}</h3>
          <h4 className='value-green'>R$ {props.getValueWithoutPlan.toFixed(2).replace(".",",").replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h4>
        </div>
        </>
          } </>
        }
      </div>
    </>
  );
}

export default VxTable;

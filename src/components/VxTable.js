import React from "react";
import { Dropdown, Button, Input, Table } from "semantic-ui-react";

const DDD = [
  { key: 1, text: '011', value: 1 },
  { key: 2, text: '016', value: 2 },
  { key: 3, text: '017', value: 3 },
  { key: 4, text: '018', value: 4 },
]

const plan = [
  { key: 1, text: 'Plano FaleMais 30', value: 1 },
  { key: 2, text: 'Plano FaleMais 60', value: 2 },
  { key: 3, text: 'Plano FaleMais 120', value: 3 },
]

  

function VxTable() {
  return (
    <>
    <div>
    <div className="table-container d-flex justify-content-center">
      <Dropdown clearable options={DDD} selection />
      <Dropdown clearable options={DDD} selection />
      <Input icon='users' iconPosition='left' placeholder='How many minutes?' />
      <Dropdown clearable options={plan} selection />
      <h3>R$</h3>
      <h3>R$</h3>
    </div>
    <div className='d-flex justify-content-center'>
      <Button primary>Primary</Button>
    </div>
    </div>
    </>
    
  );
}

export default VxTable;

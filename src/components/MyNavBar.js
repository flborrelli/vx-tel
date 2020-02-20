import React from 'react';
import { Navbar } from 'react-bootstrap';



function MyNavbar (){

  return(
    <Navbar bg="light">
    <Navbar.Brand href="#home">
      <img
        src="/images/logo.png"
        className="nav-img d-inline-block align-top"
        alt="octocat"
      />
    </Navbar.Brand>
    <h2 className='navbar-title'>Vx-Tel</h2>
  </Navbar>
  )
}

export default MyNavbar;
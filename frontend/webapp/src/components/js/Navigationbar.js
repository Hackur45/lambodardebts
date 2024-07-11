// Navigationbar.js (or whatever your component name is)
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/Logo.png';
import '../css/navbar.css'; 

function Navigationbar() {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#career">Career</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigationbar;

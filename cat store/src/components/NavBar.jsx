import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import React from 'react';
import CartWidget from "./CartWidget";
import './App.css';

const CustomNavbar = () => {
  return (
    <header>
      <BootstrapNavbar className="custom-navbar" variant="dark">
        <Container>
          <BootstrapNavbar.Brand href="#home">Cat-Store</BootstrapNavbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Arena</Nav.Link>
            <Nav.Link href="#features">Juguetes</Nav.Link>
            <Nav.Link href="#pricing">trasportadoras</Nav.Link>
            <Nav.Link href="#pricing">Alimento</Nav.Link>
          </Nav>
        </Container>
      </BootstrapNavbar>
      <CartWidget />
    </header>
  );
}

export default CustomNavbar;

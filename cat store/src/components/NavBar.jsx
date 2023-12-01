// NavBar.jsx
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import React from 'react';
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom'; // Importa Link

const CustomNavbar = () => {
  return (
    <header>
      <BootstrapNavbar className="custom-navbar" variant="dark">
        <Container>
          <Link to="/">
            <BootstrapNavbar.Brand>Cat-Store</BootstrapNavbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link to="/category/Arena" className="nav-link">Arena</Link>
            <Link to="/category/Juguetes" className="nav-link">Juguetes</Link>
            <Link to="/category/Transportadoras" className="nav-link">Transportadoras</Link>
            <Link to="/category/Alimento" className="nav-link">Alimento</Link>
            <Link to="/Cart" className="nav-link">Carrito</Link>
            <Link to="/checkout" className="nav-link">Checkout</Link>
          </Nav>
        </Container>
      </BootstrapNavbar>
      <CartWidget />
    </header>
  );
};

export default CustomNavbar;

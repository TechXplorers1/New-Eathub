import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import HomePage from "../Pages/HomePage";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar"> 
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="logo"
            className="navbar-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-links">
            <Nav.Link href="#restaurant">Restaurant</Nav.Link>
            <Nav.Link href="#home-food">Home Food</Nav.Link>
            <Nav.Link href="#chefs">Chefs</Nav.Link>
          </Nav>

          <Nav className="ms-auto"> 
            <Button variant="outline-dark" className="signin-btn">
              sign in
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
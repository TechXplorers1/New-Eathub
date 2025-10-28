import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  Modal,
  Offcanvas,
} from "react-bootstrap";
import "./Header.css";
import FireLogo from "../assets/Fire-Logo.png";
import Search from "../assets/search.png";
import Notifications from "./Notifications";
import CartSidebar from "./Cart.jsx";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [location, setLocation] = useState("7300182 Canada Inc.");

  const LocationIcon = ({ color = "#6c757d", size = "16" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 16 16">
      <path d="M8 0a5.53 5.53 0 0 1 5.5 5.5c0 3.284-5.5 10.5-5.5 10.5S2.5 8.784 2.5 5.5A5.53 5.53 0 0 1 8 0zm0 7.5A2 2 0 1 0 8 3.5a2 2 0 0 0 0 4z"/>
      <path d="M12.5 10.5h-9v-1h9v1z"/>
    </svg>
  );

  const ChevronDown = ({ size = "16" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  );

  const Hamburger = ({ size = "24" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
  );

  return (
    <header className="eh-header" style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
      <Container fluid>
        <Row className="align-items-center justify-content-between g-2">
          {/* Logo */}
          <Col xs="auto" className="d-flex align-items-center eh-col-logo">
            <img src={FireLogo} alt="EatHub Logo" className="eh-logo me-2" />
            <span className="eh-logo-text">EatHub</span>
          </Col>

          {/* Search - Desktop only */}
          <Col xs="auto" lg={5} className="d-none d-lg-block">
            <InputGroup className="eh-search-input eh-search-desktop">
              <InputGroup.Text className="eh-search-prepend border-0">
                <img src={Search} alt="search" width="18" />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search Eat Hub"
                className="eh-search-control border-0"
              />
            </InputGroup>
          </Col>

          {/* Right-side actions */}
          <Col xs="auto" lg={5} className="d-flex align-items-center justify-content-end gap-2">
            {/* Desktop: Location */}
            <div className="d-none d-lg-block">
              <Button
                variant="light"
                className="eh-location-btn border-0 d-flex align-items-center"
                onClick={() => setShowLocationModal(true)}
              >
                <LocationIcon size="18" />
                <span className="ms-2 me-1">{location}</span>
                <ChevronDown size="16" />
              </Button>
            </div>

            {/* Desktop: Notifications */}
            <div className="d-none d-lg-block">
              <Notifications />
            </div>

            {/* Cart & Sign In - Always visible */}
            <CartSidebar />
            <Button variant="light" className="eh-sign-in-btn d-none d-lg-block">
              Sign in
            </Button>

            {/* Mobile: Search Icon (RIGHT SIDE) */}
            <Button
              variant="link"
              className="p-0 text-dark d-lg-none"
              onClick={() => setIsSearching(true)}
            >
              <img src={Search} alt="search" width="22" />
            </Button>

            {/* Mobile: Hamburger */}
            <Button
              variant="link"
              className="p-0 text-dark d-lg-none"
              onClick={() => setShowMobileMenu(true)}
            >
              <Hamburger size="24" />
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Mobile Bottom Search Bar */}
      {isSearching && (
        <div className="eh-mobile-search-overlay" onClick={() => setIsSearching(false)}>
          <div
            className="eh-mobile-search-container"
            onClick={(e) => e.stopPropagation()}
          >
            <InputGroup className="eh-search-input eh-mobile-search-input">
              <InputGroup.Text className="eh-search-prepend border-0">
                <img src={Search} alt="search" width="20" />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search Eat Hub"
                className="eh-search-control border-0"
                autoFocus
                value=""
                onChange={() => {}}
              />
            </InputGroup>
            <Button
              variant="link"
              className="eh-mobile-search-close"
              onClick={() => setIsSearching(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Mobile Offcanvas Menu */}
      <Offcanvas
        show={showMobileMenu}
        onHide={() => setShowMobileMenu(false)}
        placement="end"
        className="eh-mobile-options-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Location */}
          <div className="mb-3">
            <h6 className="text-muted">Current Location</h6>
            <Button
              variant="light"
              className="eh-location-btn border-0 w-100 d-flex align-items-center justify-content-between"
              onClick={() => {
                setShowMobileMenu(false);
                setShowLocationModal(true);
              }}
            >
              <span className="d-flex align-items-center">
                <LocationIcon size="18" />
                <span className="ms-2">{location}</span>
              </span>
              <ChevronDown size="16" />
            </Button>
          </div>

          <hr />

          {/* Notifications in Offcanvas */}
          <Button
            variant="light"
            className="w-100 text-start eh-offcanvas-link mb-2"
            onClick={() => {
              setShowMobileMenu(false);
              // Trigger notification panel if needed
              // e.g., openNotifications();
            }}
          >
            Notifications
          </Button>

          {/* Sign In */}
          <Button variant="primary" className="w-100 mt-4" onClick={() => setShowMobileMenu(false)}>
            Sign in
          </Button>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Location Modal */}
      <Modal show={showLocationModal} onHide={() => setShowLocationModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="d-flex align-items-center">
            <LocationIcon size="20" /> <span className="ms-2">Edit Location</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted">Update your delivery address here.</p>
          <Form.Group controlId="formLocation">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="eh-location-input"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShowLocationModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setShowLocationModal(false)}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Header;
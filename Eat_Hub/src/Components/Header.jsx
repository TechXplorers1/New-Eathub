import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  Modal,
  Dropdown,
  Offcanvas,
} from "react-bootstrap";
import "./Header.css";
import FireLogo from "../assets/Fire-Logo.png";
import Cart from "../assets/Cart.png";
import Notification from "../assets/notification.png";
import Search from "../assets/search.png";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [activeTab, setActiveTab] = useState("pickup"); // 'all', 'delivery', 'pickup'
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [location, setLocation] = useState("7300182 Canada Inc.");

  return (
    <header className="eh-header py-2 py-md-3">
      <Container fluid>
        <Row className="align-items-center justify-content-between g-2">

          {/* Logo */}
          <Col xs="auto" className="d-flex align-items-center">
            <img src={FireLogo} alt="EatHub Logo" className="eh-logo me-2" />
            <span className="eh-logo-text fs-5 fs-md-4">EatHub</span>
          </Col>

          {/* Search - Mobile: icon only | Desktop: full bar */}
          <Col xs="auto" md={5} lg={4} className="order-md-2">
            {isSearching ? (
              <div className="eh-search-expanded-mobile d-flex w-100">
                <InputGroup className="eh-search-input w-100">
                  <InputGroup.Text className="eh-search-prepend border-0">
                    <img src={Search} alt="search" width="16" />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Search restaurants or dishes"
                    className="eh-search-control border-0"
                    autoFocus
                    onBlur={() => setTimeout(() => setIsSearching(false), 150)}
                  />
                </InputGroup>
                <Button
                  variant="link"
                  className="text-muted d-md-none ms-2 p-0"
                  onClick={() => setIsSearching(false)}
                  style={{ fontSize: '1.25rem' }}
                >
                  ✕
                </Button>
              </div>
            ) : (
              <>
                <div className="d-md-none">
                  <Button
                    variant="link"
                    className="p-0 text-decoration-none"
                    onClick={() => setIsSearching(true)}
                  >
                    <img src={Search} alt="search" width="20" />
                  </Button>
                </div>
                <div className="d-none d-md-block w-100">
                  <InputGroup className="eh-search-input">
                    <InputGroup.Text className="eh-search-prepend border-0">
                      <img src={Search} alt="search" width="16" />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Search for restaurants or dishes"
                      className="eh-search-control border-0"
                    />
                  </InputGroup>
                </div>
              </>
            )}
          </Col>

          {/* Icons (Notification + Cart) */}
          <Col xs="auto" className="d-flex align-items-center gap-3 order-md-4">
            <Button className="eh-icon-btn">
              <img src={Notification} alt="notification" width="20" />
            </Button>
            <Button className="eh-cart-btn">
              <img src={Cart} alt="cart" width="20" />
            </Button>
          </Col>

          {/* Desktop: Location + Tabs (All/Delivery/Pickup) */}
          <Col xs="auto" className="d-none d-lg-flex align-items-center gap-3 order-md-3">
            {/* Location Button → Opens Modal */}
            <Button
              variant="light"
              className="eh-location-btn border-0 d-flex align-items-center"
              onClick={() => setShowLocationModal(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#6c757d" viewBox="0 0 16 16" className="me-2">
                <path d="M8 0a5.53 5.53 0 0 1 5.5 5.5c0 3.284-5.5 10.5-5.5 10.5S2.5 8.784 2.5 5.5A5.53 5.53 0 0 1 8 0zm0 7.5A2 2 0 1 0 8 3.5a2 2 0 0 0 0 4z"/>
                <path d="M12.5 10.5h-9v-1h9v1z"/>
              </svg>
              {location}
            </Button>

            {/* Tabs: All / Delivery / Pickup */}
            <div className="eh-tab-group">
              <Button
                variant="link"
                className={`eh-tab ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All
              </Button>
              <Button
                variant="link"
                className={`eh-tab ${activeTab === 'delivery' ? 'active' : ''}`}
                onClick={() => setActiveTab('delivery')}
              >
                Delivery
              </Button>
              <Button
                variant="link"
                className={`eh-tab ${activeTab === 'pickup' ? 'active' : ''}`}
                onClick={() => setActiveTab('pickup')}
              >
                Pickup
              </Button>
            </div>
          </Col>

          {/* Mobile Hamburger Menu Trigger */}
          <Col xs="auto" className="d-lg-none text-end order-md-3">
            <Button
              variant="link"
              className="p-0 text-dark"
              onClick={() => setShowMobileMenu(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Mobile Offcanvas: Location + Tabs */}
      <Offcanvas
        show={showMobileMenu}
        onHide={() => setShowMobileMenu(false)}
        placement="end"
        className="eh-mobile-options-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Location Button (Mobile) */}
          <div className="mb-4">
            <Button
              variant="light"
              className="eh-location-btn border-0 w-100 d-flex align-items-center"
              onClick={() => {
                setShowMobileMenu(false);
                setShowLocationModal(true);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#6c757d" viewBox="0 0 16 16" className="me-2">
                <path d="M8 0a5.53 5.53 0 0 1 5.5 5.5c0 3.284-5.5 10.5-5.5 10.5S2.5 8.784 2.5 5.5A5.53 5.53 0 0 1 8 0zm0 7.5A2 2 0 1 0 8 3.5a2 2 0 0 0 0 4z"/>
                <path d="M12.5 10.5h-9v-1h9v1z"/>
              </svg>
              {location}
            </Button>
          </div>

          {/* Tabs (Mobile) */}
          <div className="eh-tab-group mb-4">
            <Button
              variant="link"
              className={`eh-tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('all');
                setShowMobileMenu(false);
              }}
            >
              All
            </Button>
            <Button
              variant="link"
              className={`eh-tab ${activeTab === 'delivery' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('delivery');
                setShowMobileMenu(false);
              }}
            >
              Delivery
            </Button>
            <Button
              variant="link"
              className={`eh-tab ${activeTab === 'pickup' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('pickup');
                setShowMobileMenu(false);
              }}
            >
              Pickup
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Location Edit Modal */}
      <Modal show={showLocationModal} onHide={() => setShowLocationModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted">Update your delivery address here. Click save when you're done.</p>
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
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button, Form, FormControl, Dropdown } from "react-bootstrap";
import { FaSearch, FaBell, FaShoppingCart, FaBookmark, FaBars, FaPen, FaStar } from "react-icons/fa";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="shadow-sm px-2">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
        <div className="d-flex align-items-center">
        <img
            src="https://res.cloudinary.com/duwddcqzi/image/upload/v1738937526/HobbyCue_Logo_v2_1_vpvyvv.png"
            alt="HobbyCue"
            className="img-fluid me-2 d-block d-lg-none"
            style={{ maxWidth: "150px", height: "auto" }}
        />
        <img
            src="https://res.cloudinary.com/duwddcqzi/image/upload/v1738937526/HobbyCue_Logo_v2_1_vpvyvv.png"
            alt="HobbyCue"
            className="img-fluid me-2 d-none d-lg-block"
            style={{ maxWidth: "220px", height: "auto" }}
        />
        </div>
        </Navbar.Brand>

        {/* Mobile View - Icons */}
        <Nav className="d-flex flex-column d-lg-none align-items-center">
            <div className="d-flex justify-content-between">
          <Nav.Link href="#" className="text-dark mx-3">
            <FaSearch size={18} />
          </Nav.Link>
          <Nav.Link href="#" className="text-dark mx-3">
            <FaBell size={18} />
          </Nav.Link>
          </div>
        </Nav>

        {/* Navbar Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav">
          <FaBars />
        </Navbar.Toggle>

        {/* Desktop View - Expanded Navbar */}
        <Navbar.Collapse id="navbar-nav">
          <Form className="d-none d-lg-flex flex-grow-1 mx-3">
            <FormControl type="search" placeholder="Search here..." className="me-2" />
            <Button variant="secondary" >
              <FaSearch />
            </Button>
          </Form>

          <Nav className="ms-auto align-items-center">
            {/* Explore Dropdown */}
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-explore" className="fw-bold">
                <FaPen className="me-1" style={{ color: "purple" }}/> Explore
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Option 1</Dropdown.Item>
                <Dropdown.Item href="#">Option 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Hobbies Dropdown */}
            <Dropdown className="ms-3">
              <Dropdown.Toggle variant="light" id="dropdown-hobbies" className="fw-bold">
                <FaStar className="me-1" style={{ color: "purple" }}/> Hobbies
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Hobby 1</Dropdown.Item>
                <Dropdown.Item href="#">Hobby 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Icons */}
            <Nav.Link href="#" className="mx-2" style={{ color: "purple" }}><FaBookmark /></Nav.Link>
            <Nav.Link href="#" className="mx-2" style={{ color: "purple" }}><FaBell /></Nav.Link>
            <Nav.Link href="#" className="mx-2" style={{ color: "purple" }}><FaShoppingCart /></Nav.Link>

            {/* Sign In Button */}
            <Button variant="outline-secondary" className="ms-3" >Sign In</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;


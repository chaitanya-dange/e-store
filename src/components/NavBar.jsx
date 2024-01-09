import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import cart from '../assets/cart.webp'
import { NavLink } from 'react-router-dom';



function NavBar (){
    return (
        <>
         <Navbar collapseOnSelect expand="lg"  bg='primary' variant='dark'>
      <Container>
      <Navbar.Brand as={NavLink} to="/">
            <img
              alt="react image"
              src={cart}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            React e-Bazzar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/services">Features</Nav.Link>
            <NavDropdown title=" Categories " id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Smart TV's</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Latest 5g Phones
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Laptops</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                More
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/contactus">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/cart">Cart (5) </Nav.Link>
            <Nav.Link as={NavLink} to="/login">Login </Nav.Link>
            <Nav.Link as={NavLink} to="/signup">Sign Up </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
}

export default NavBar;
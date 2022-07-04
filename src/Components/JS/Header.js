import React from "react";
import { Navbar, Nav , Container} from "react-bootstrap";
import { FaCode, FaHome, FaLocationArrow, FaTrain} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../CSS/Header.css";
import logo from "../Images/heading.svg"
export default function Header() {
  return (
    <div className="Header">
      
      <Navbar className="NavCont" expand="lg">
      <Container>
        <Navbar.Brand className="NavTitle">  <Link to="/"> <img src={logo} alt="logo"/> </Link>   </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="button" />
        <Navbar.Collapse>
        <Nav className="me-auto">
            <Nav.Link className="NavItem"> <Link to="/" className="Link"> <FaHome/> &nbsp;&nbsp;Home </Link></Nav.Link>
            <Nav.Link  className="NavItem"> <Link to="/Places" className="Link"> <FaLocationArrow/> &nbsp;&nbsp;Places </Link></Nav.Link>
            <Nav.Link  className="NavItem"><Link to="/Train" className="Link"> <FaTrain/> &nbsp;&nbsp; Trains </Link></Nav.Link>
            {/* <Nav.Link  className="NavItem"><Link to="/Devloper" className="Link"> <FaCode/> &nbsp;&nbsp; Devloper </Link></Nav.Link> */}
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

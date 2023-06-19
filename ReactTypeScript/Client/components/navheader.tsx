import * as React from "react";
import {Navbar, Nav, NavDropdown } from "react-bootstrap";
import {Link} from "react-router-dom";
export const NavHeader = () => (
    <>
        <div className="logo-containter">
            <a href="#"><img src="" className="logo" alt="Microlifelogo" /></a>
        </div>
        <div className="nav-container">
            <Navbar expand="lg" >
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto" navbarScroll >
                        <Nav.Link href="#Aboutus">About us</Nav.Link>
                        <Nav.Link href="#FAQ">FAQ </Nav.Link>
                                <NavDropdown title="Logout/Main" id="navbarScrollingDropdown" >
                                    <Link to="/start" className="nav-link">
                                        main
                                    </Link>
                                </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </>
);
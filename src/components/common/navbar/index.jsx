import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg'
import './index.scss'


export default class NavBar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar collapseOnSelect fixed="top" expand="lg" bg="light" variant="light">
                        <Navbar.Brand>
                            <img src={logo} height="40" alt="company logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-nav-bar-1"/>
                        <NavbarCollapse className="navbar-container-items">
                            <Nav>
                                <Nav.Item >
                                    <Nav.Link href="">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item >
                                    <Nav.Link href="">About Us</Nav.Link>
                                </Nav.Item>
                                <Nav.Item >
                                    <Nav.Link href="">Services</Nav.Link>
                                </Nav.Item>
                                <Nav.Item >
                                    <Nav.Link href="">Partners</Nav.Link>
                                </Nav.Item>
                                <Nav.Item >
                                    <Nav.Link href="">Contact Us</Nav.Link>
                                </Nav.Item>
                                
                            </Nav>
                        </NavbarCollapse>
                </Navbar>
            </React.Fragment>
        )
    }
}
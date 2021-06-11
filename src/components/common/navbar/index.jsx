import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
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
                        <Link to="/"><img src={logo} height="40" alt="company logo" /></Link>    
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-nav-bar-1"/>
                        <NavbarCollapse className="navbar-container-items">
                            <Nav>
                            <Nav.Item >
                                    <Nav.Link href="/">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item >
                                    <Nav.Link href="/about">About</Nav.Link>
                                </Nav.Item>
                                <Nav.Item >
                                    <Nav.Link href="/business">Business With Smplydeliver</Nav.Link>
                                </Nav.Item>
                                
                                <Link className="link-custom" to="/user/register"><input type="button"  className="btn btn-xs btn-warning btn-text" value="Register" /> </Link>
                                
                            </Nav>
                        </NavbarCollapse>
                </Navbar>
            </React.Fragment>
        )
    }
}
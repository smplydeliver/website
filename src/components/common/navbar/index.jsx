import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png'
import './index.scss'


export default class NavBar extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="navbar-container">
                    <div className="nav-grid-1">
                        <img src={logo} alt="company logo" />
                    </div>
                    <div className="nav-grid-2">
                        <Link to={""} > <b>Home</b> </Link>
                        <Link to={""}> About Us </Link>
                        <Link to={""}> Services </Link>
                        <Link to={""}> Partners </Link>
                        <Link to={""}> Contact Us </Link>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}
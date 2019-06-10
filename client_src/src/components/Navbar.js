import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="blue darken-3">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Meetupz</a>
                    <a href="#!" className="button-collapse show-on-large" data-activates="main-menu">
                        <i className="fas fa-bars"></i>
                    </a>
                    <ul id="right hide-on-small-only" className="right hide-on-med-and-down">
                        <li><Link to="/">Meetups</Link></li>
                    </ul>
                    <ul className="side-nav" id="main-menu">
                        <li>
                            <Link to="/"><i className="fas-fa-user"></i> Meetups</Link>
                        </li>
                        <li>
                            <Link to="meetups/add"><i className="fas-fa-user"></i> Add Meetups</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;

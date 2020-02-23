import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Navbar extends Component{
  render(){
    return (
      <div>
        <nav className="orange darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">
              Let's Meet
            </a>
            <a
              data-activates="main-menu"
              className="button-collapse show-on-large"
            >
              <i className="fa fa-bars"></i>
            </a>
            <ul className="right hide-on-small-only">
              <li>
                <Link to="/">
                  <i className="fa fa-users"></i> Meetups
                </Link>
              </li>

              {this.props.userToken!==''?(
                <li>
                  <Link to="/logout">
                    <i className="fa fa-users"></i> logout
                  </Link>
                </li>
              ):(
                  <li>
                    <Link to="/login">
                      <i className="fa fa-users"></i> Login
                    </Link>
                  </li>
              )}
            </ul>
            <ul className="side-nav" id="main-menu">
              <li>
                <Link to="/">
                  <i className="fa fa-users"></i> Meetups
                </Link>
              </li>
              <li>
                <Link to="/letsmeets/add">
                  <i className="fa fa-plus"></i> Add Meetup
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i className="fa fa-question-circle"></i> About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

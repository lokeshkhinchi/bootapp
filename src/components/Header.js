import React, { Component } from 'react';
import { Redirect, useHistory, NavLink, withRouter, Route } from 'react-router-dom';
import { Alert, Accordion, Card, Button, Navbar, Text } from 'react-bootstrap';

const Header = props => {
  const {userName, password} = props;
  const history = useHistory();

  const logOut = e => {
    e.preventDefault();
    sessionStorage.removeItem('sessionData');
    history.push('/log-in');
  }

  
  return (
    <>
    <nav className="navbar navbar--main navbar-expand-lg navbar-light navbar-shadow">
    <div className="container-fluid">

      <button className="navbar-toggler mr-4" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> 

      <a className="navbar-brand" href="/">
        <img width="61px" height="26px" className="site-logo" src="https://www.aurigait.com/resources/themes/ait-child/assets/ait/images/auriga_logo_black.svg" />
      </a>

      <div className="navbar-nav">
        <div className="nav-item d-none d-lg-block ml-auto mr-4 nav-text">
          
        </div>

        <Navbar.Text>
          Signed in as: <a href="#login">{userName}</a>
        </Navbar.Text>

        <div className="nav-item d-none d-lg-block ml-4">
          <a href="/signup" className="btn btn-sm btn-primary text-uppercase" onClick={logOut}>
            Log Out
          </a>
        </div>
      </div>
      </div>
    </nav>
    </>
  )
}

export default Header;

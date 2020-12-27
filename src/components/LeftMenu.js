import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LeftMenu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
      <nav className="mian-nav">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/work">Work</Link>
        <Link to="/products">Products</Link>
        <Link to="/users">Users</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      </>
    )
  }
}

export default LeftMenu;
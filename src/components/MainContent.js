import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Work from './Work';
import Contact from './Contact';
import Products from "./Products";
import Users from './Users';
import UserDetail from './UserDetail';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

const MainContent = () => {

  return (
    <>
    <Route path="/" exact component={Home} />
    <Route path="/home" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/services" component={Services} />
    <Route path="/work" component={Work} />
    <Route path="/products" component={Products} />
    <Route path="/product/add" component={AddProduct} />
    <Route path="/product/:id/edit" component={EditProduct} />
    <Route path="/users" exact component={Users} />
    <Route path="/user/:id" component={UserDetail} />
    <Route path="/contact" component={Contact} />
    </>
  )
}

export default MainContent;
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Work from './Work';
import Contact from './Contact';
import Products from "./Products";
import Users from './Users';
import UserDetail from './UserDetail';
import ProductDetail from './ProductDetail';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import AddService from './AddService';
import EditService from './EditService';
import Chart from './Chart';

const MainContent = () => {

  return (
    <>
    <Provider store={store}>
    <Route path="/" exact component={Home} />
    <Route path="/home" exact component={Home} />
    <Route path="/about" component={About} />

    <Route path="/services" exact component={Services} />
    <Route path="/service/add" exact component={AddService} />
    <Route path="/service/:id/edit" exact component={EditService} />

    <Route path="/work" component={Work} />
    <Route path="/products" exact component={Products} />
    <Route path="/products/add" exact component={AddProduct} />
    <Route path="/product/:id" exact component={ProductDetail} />
    <Route path="/product/:id/edit" exact component={EditProduct} />
    <Route path="/users" exact component={Users} />
    <Route path="/user/:id" component={UserDetail} />
    <Route path="/contact" component={Contact} />
    <Route path="/chart" component={Chart} />

    </Provider>
    </>
  )
}

export default MainContent;
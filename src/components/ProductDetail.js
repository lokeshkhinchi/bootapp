import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Row, Col, Image } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';

const ProductDetail = () => {

  const { id } = useParams();

  useEffect(() => {
    fetchProduct();
  }, [])

  let history = useHistory();
  const [ product, setProduct ] = useState({
    title: '',
    description: '',
    price: ''
  });

  const fetchProduct = async userId => {
    const fetchProduct =  await axios.get(`https://5fe8bc5c2e12ee0017ab4a43.mockapi.io/products/${id}`);
    setProduct(fetchProduct.data);
  }

  const {title, image, description, price} = product;
  return (
    <>
    <Row>
      <Col md={4}>
        <Image src={image} thumbnail fluid />
      </Col>
      <Col md={8}>
        <h1>{title}</h1>
        <p>{description}</p>
        <h3>Price: {price}</h3>
        <Link to="/products" className="btn btn-secondary">Back to Products</Link>
      </Col>
    </Row>
    </>
  )
  
}

export default ProductDetail;
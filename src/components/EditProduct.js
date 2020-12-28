import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';

const EditProduct = () => {

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

  const inputChangeHandler = (e) => {
    setProduct({...product, [e.target.name]: e.target.value});
  }

  const formSubmit = async e => {
    e.preventDefault();
    await axios.put(`https://5fe8bc5c2e12ee0017ab4a43.mockapi.io/products/${id}`, product);
    history.push('/products');
  }

  const fetchProduct = async userId => {
    const fetchProduct =  await axios.get(`https://5fe8bc5c2e12ee0017ab4a43.mockapi.io/products/${id}`);
    //console.log(fetchProduct);
    setProduct(fetchProduct.data);
  }

  const {title, description, price} = product;
  return (
    <>
    <Form className="form-wrap" onSubmit={formSubmit}>
    <h1 className="form-title">Add Product</h1>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" value={title} placeholder="Title" required onChange={(e) => inputChangeHandler(e)} />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name="description" value={description} required placeholder="Description" onChange={(e) => inputChangeHandler(e)} />
      </Form.Group>

      <Form.Group controlId="Price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" name="price" value={price} placeholder="Price" required onChange={(e) => inputChangeHandler(e)} />
      </Form.Group>
      
      <Button variant="primary" type="submit" className="mr-3">
        Update
      </Button>

      <Link to="/products" className="btn btn-secondary">Close</Link>

    </Form>
    </>
  )
  
}

export default EditProduct;
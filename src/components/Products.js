import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const fetchProducts = await axios.get('https://5fe8bc5c2e12ee0017ab4a43.mockapi.io/employees/1/products');
    setProducts(fetchProducts.data.reverse());
  }

  const deleteProduct = async id => {
    await axios.delete(`https://5fe8bc5c2e12ee0017ab4a43.mockapi.io/employees/1/products/${id}`);
    fetchProducts();
  }

  return (
    <>
    <h1 className="mb-5">List of Profucts
    <Link to="/products/add" className="float-right">Add Product</Link>
    </h1>
    
    <Row>
      {
        products.length ?
        products.map(product => (
          <Col md={3} sm={6} key={product.id} className="mb-5">
            <Card>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Price: {product.price}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Link to={`/product/${product.id}`} className="card-link">View</Link>
              <Link to={`/product/${product.id}/edit?title=${product.title}&description=${product.description}&price=${product.price}`} className="card-link">Edit</Link>
              <Link className="card-link" onClick={() => deleteProduct(product.id)}>Delete</Link>
            </Card.Body>
          </Card>
        </Col>
        )) :
        null
      }
    </Row>
    </>
  )
  
}

export default Products;
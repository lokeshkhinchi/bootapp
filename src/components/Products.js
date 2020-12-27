import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Products extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get('https://5fe8bc5c2e12ee0017ab4a43.mockapi.io/products')
    .then(response => {
      console.log(response);
      this.setState({products: response.data})
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    const { products } = this.state;
    return (
      <>
      <h1 className="mb-5">List of Profucts</h1>
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
                <Card.Link href="#">Edit</Card.Link>
                <Card.Link href="#">Delete</Card.Link>
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
  
}

export default Products;
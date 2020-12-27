import React, { useState, useEffect } from 'react';
import { Button, Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Users = () => {

  useEffect(() => {
    fetchUsers();
  }, []);

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const data = await fetch('http://dummy.restapiexample.com/api/v1/employees');
    const users = await data.json(data);
    setUsers(users.data);
  }

  return (
    <>
    <Row>
    {users.map(user => (
      <Col md={3} sm={6} key={user.id} className="mb-5">
        <Card>
        <Card.Img variant="top" src="https://picsum.photos/200/120" />
        <Card.Body>
          <Card.Title>{user.employee_name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Age: {user.employee_age}</ListGroupItem>
          <ListGroupItem>Salary: {user.employee_salary}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Link to={`/user/${user.id}`} className="card-link">Profile</Link>
          <Card.Link href="#">Edit</Card.Link>
          <Card.Link href="#">Delete</Card.Link>
        </Card.Body>
      </Card>
      </Col>
    ))}
    </Row>
    </>
  )
}

export default Users;
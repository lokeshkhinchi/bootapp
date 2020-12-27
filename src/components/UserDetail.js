import React, { useState, useEffect } from 'react';
import { Button, Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserDetail = ({ match }) => {

  useEffect(() => {
    fetchUser();
  }, []);

  const [user, setUser] = useState([]);

  const fetchUser = async () => {
    const fetchUser = await fetch(`http://dummy.restapiexample.com/api/v1/employee/${match.params.id}`);
    const user = await fetchUser.json();
    setUser(user.data);
  };

  return (
    <>
      <h1>Hello User, I am {user.employee_name}. and i'm {user.employee_age} Years old.</h1>
    </>
  )
}

export default UserDetail;
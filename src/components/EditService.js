import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { editService } from '../redux';
import { Button, Form, Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import { Link, useHistory, useParams, useLocation } from 'react-router-dom';

function EditService (props) {
  
  const { id } = useParams();

  let history = useHistory();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const [ service, setService ] = useState({
    title: query.get("title"),
    description: query.get("description")
  });

  const inputChangeHandler = event => {
    const {target: {name, value}} = event;
    setService({
      ...service,
      [name]: value
    });
    console.log(service);
  }

  const clearState = () => {
    setService({
      title: '',
      description: ''
    });
  }

  const formSubmit = (e) => {
    e.preventDefault();
    props.editService(id, service);
    clearState();
    history.push('/services');
  }

  const {title, description} = service;

  return (
    <>
    <Form className="form-wrap" onSubmit={formSubmit}>
    <h1 className="form-title">Add Services</h1>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" value={title} placeholder="Title" required onChange={(e) => inputChangeHandler(e)}/>
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name="description" value={description} required placeholder="Description" onChange={(e) => inputChangeHandler(e)} />
      </Form.Group>
      
      <Button variant="primary" type="submit" className="mr-3">
        Save and Done
      </Button>

      <Link to="/services" className="btn btn-secondary">Close</Link>

      {/* <Button variant="outline-primary mr-3" onClick={() => saveContinue()}>
        Save and Continue
      </Button> */}

    </Form>
    </>
  )
}

// const mapStateToProps = state => {
//   return {
//     serviceData: state.service
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    editService: (id, service) => dispatch(editService(id, service))
  }
}

export default connect(
  null, 
  mapDispatchToProps
)(EditService)
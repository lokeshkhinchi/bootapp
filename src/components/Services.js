import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchServices, deleteService } from '../redux';
import { Button, Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

function Services({ serviceData, fetchServices, deleteService}) {

  useEffect(() => {
    fetchServices()
  }, [])
  return serviceData.loading ? (
    <h2>Loading Services</h2>
  ) : serviceData.error ? (
    <h2>{serviceData.error}</h2>
  ) : (
    <>
    <h2 className="mb-4">
      Services List
      <Link to="/service/add" className="float-right">Add Service</Link>
    </h2>
    
    <div className="row">
      {serviceData 
      && serviceData.services.length > 0 && 
      serviceData.services.map(service => (
        <div key={service.id} className="col-lg-3 col-md-4 col-sm-6">
          <Card className="mb-4">
            <Card.Img variant="top" src={service.image} />
            <Card.Body>
              <Card.Title>{service.title}</Card.Title>
              <Card.Text>
                {service.description}
              </Card.Text>
              <Link to={`/service/${service.id}/edit?title=${service.title}&description=${service.description}`} className="btn btn-primary">Edit</Link>
              <Link to="/services/" className="btn btn-danger ml-4" onClick={() => deleteService(service.id)}>Delete</Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    serviceData: state.service
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchServices: () => dispatch(fetchServices()),
    deleteService: id => dispatch(deleteService(id))
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Services)
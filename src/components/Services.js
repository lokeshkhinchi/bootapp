import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchServices } from '../redux';
import { Button, Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';

function Services({ serviceData, fetchServices }) {

  useEffect(() => {
    fetchServices()
  }, [])
  return serviceData.loading ? (
    <h2>Loading Services</h2>
  ) : serviceData.error ? (
    <h2>{serviceData.error}</h2>
  ) : (
    <>
    <h2 className="mb-4">Services List</h2>
    <div className="row">
      {serviceData 
      && serviceData.services && 
      serviceData.services.map(service => (
        <div kay={service.id} className="col-lg-3 col-md-4 col-sm-6">
          <Card className="mb-4">
            <Card.Img variant="top" src={service.image} />
            <Card.Body>
              <Card.Title>{service.title}</Card.Title>
              <Card.Text>
                {service.description}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
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
    fetchServices: () => dispatch(fetchServices())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Services)
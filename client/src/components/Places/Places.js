import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import places from '../../Place';
import './Places.css'; // Import custom CSS for styling
import { Link } from 'react-router-dom';

function PlaceList() {
  return (
    <Row>
      {places.map((place) => (
        <Col key={place.id} xs={12} md={4} className="mb-4">
          <Card>
            <div className="card-image">
              <Card.Img variant="top" src={place.photos} alt="Place Image" />
            </div>
            <Card.Body>
              <Card.Title>{place.title}</Card.Title>
              <Card.Text>{place.owner}</Card.Text>
              <Card.Text>{place.address}</Card.Text>
              <Link to={`/place/${place.id}`} key={place.id} className="d-block">
                <Button variant="primary">Book Now</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default PlaceList;

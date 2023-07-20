import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Header from '../blocks/Header';
import powerSupplySupport from '../../assets/powerSupplySupport.jpg';

const GalleryPage = () => {

  return (
  <div className="position-relative d-flex flex-column min-vh-100 justify-content-center align-items-center">
    <Header />
    <Row xs={1} md={3} className="g-4 gy-5">
      {Array.from({ length: 12 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={powerSupplySupport} className="img-fluid rounded-3" />
          </Card>
        </Col>
      ))}
    </Row>
  </div>
  );
};

export default GalleryPage;

import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Header from './Header';
import powerSupplySupport from '../../../assets/powerSupplySupport.jpg';

const GalleryPage = () => {

  return (
  <div className="position-relative w-100 h-100">
    <Header />
    <Row xs={1} md={3} className="gx-4 gy-4 ms-5 me-5 pb-5">
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

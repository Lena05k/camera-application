import React from 'react';
import { Row } from 'react-bootstrap';
import Header from './Header';
import powerSupplySupport from '../../assets/powerSupplySupport.jpg';

const GalleryPage = () => {
  const images = [];
  for (let i = 1; i <= 9; i += 1) {
    images.push(
      <div className="rounded-3 mx-1 my-1">
        <img src={powerSupplySupport} alt={`Image ${i}`} className="img-fluid rounded-3" />
      </div>
    );
  };

  return (
    <div className="position-fixed w-100 h-100 mx-auto my-auto" style={{ background: '#212529' }}>
      <Header />
      <Row xs={1} md={3} lg={4} className="py-5 d-flex justify-content-center mt-5">
        {images}
      </Row>
    </div>
  );
};

export default GalleryPage;

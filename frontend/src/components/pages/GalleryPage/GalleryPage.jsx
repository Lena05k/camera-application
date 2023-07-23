import React, { useState } from 'react';
import {
  Card,
  Row,
  Col,
  Modal,
  Button,
  Carousel,
} from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Header from './Header';
import powerSupplySupport from '../../../assets/powerSupplySupport.jpg';
import videoSupport from '../../../assets/videoSupport.jpg';

const GalleryPage = () => {
  const photo = powerSupplySupport;
  const video = videoSupport;

  const items = [
    {
      type: 'photo', url: photo,
    },
    {
      type: 'video', url: video,
    },
    {
      type: 'photo', url: photo,
    },
    {
      type: 'video', url: video,
    },
    {
      type: 'photo', url: photo,
    },
    {
      type: 'video', url: video,
    },
    {
      type: 'photo', url: photo,
    },
    {
      type: 'video', url: video,
    },
    {
      type: 'photo', url: photo,
    },
    {
      type: 'video', url: video,
    },
    {
      type: 'photo', url: photo,
    },
    {
      type: 'video', url: video,
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleItemClick = (index) => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedIndex(0);
    setShowModal(false);
  };

  const handleSelect = (index) => setSelectedIndex(index);

  return (
    <div className="position-relative w-100 h-100">
      <Header />
      <Row xs={1} md={3} className="gx-4 gy-4 ms-5 me-5 pb-5">
        {items.map((item, index) => (
          <Col key={index}>
            <Card onClick={() => handleItemClick(index)}>
              {item.type === 'photo' && (
                <Card.Img variant="top" src={item.url} className="img-fluid rounded-3 overflow-hidden" style={{ height: '300px' }} />
              )}
              {item.type === 'video' && (
                <div className="position-relative">
                  <Card.Img variant="top" src={item.url} className="img-fluid rounded-3 overflow-hidden" style={{ height: '300px' }} />
                  <div className="position-absolute top-0 end-0 p-3">
                    <FaIcons.FaVideo className="fa-video-icon text-white" />
                  </div>
                </div>
              )}
            </Card>
          </Col>
        ))}
      </Row>
      <Modal size="xl" show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          <Carousel activeIndex={selectedIndex} onSelect={handleSelect}>
            {items.map((item) => (
              <Carousel.Item key={item.id}>
                {item.type === 'photo' && (
                  <img src={item.url} alt="Selected Item" className="img-fluid" />
                )}
                {item.type === 'video' && (
                  <video controls className="w-100">
                    <source src={item.url} type="video/mp4" />
                  </video>
                )}
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleSelect(selectedIndex === 0 ? items.length - 1 : selectedIndex - 1)}>
            <FaIcons.FaArrowLeft className="fs-3" />
          </Button>
          <Button variant="secondary" onClick={() => handleSelect(selectedIndex === items.length - 1 ? 0 : selectedIndex + 1)}>
            <FaIcons.FaArrowRight className="fs-3" />
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            <AiIcons.AiOutlineClose className="fs-3" />
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GalleryPage;

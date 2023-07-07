import React, { useState } from 'react';
import {
  Button,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import '../../styles/index.css';
import Header from './Header';

const CameraPage = () => {

  return (
    <Container fluid className="h-100 overflow-hidden">
      <Header />
      {/* Содержимое страницы */}
      <Row className="h-100">
        {/* Камера */}
        <Col xs={9} className="p-0">
          <div className="position-relative min-vh-100 min-vw-100 bg-black h-100">
            <div className="position-absolute top-50 end-0 d-flex flex-column me-3">
              <div className="d-flex flex-row">
                <div className="d-flex align-self-center rounded-circle border border-1 border-white" style={{ width: '120px', height: '120px' }}>
                  <Button className="align-self-center ms-2 rounded-circle bg-white" style={{ width: '100px', height: '100px' }} />
                </div>
                <div className="d-flex flex-column top-50 end-0 ms-3">
                  <Button variant="link" className="text-end text-center mb-4 btn text-white link-offset-2 link-underline link-underline-opacity-0">ФОТО</Button>
                  <Button variant="link" className="text-end text-center mt-4 btn text-white link-offset-2 link-underline link-underline-opacity-0">ВИДЕО</Button>
                </div>
              </div>
              <div className="align-self-start ms-4">
                <Button variant="outline-light" className="btn mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-images"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    <path
                      d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CameraPage;

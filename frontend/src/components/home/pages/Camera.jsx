import React, { useState } from 'react';
import {
  Button,
  Container,
  Row,
  Col,
  Navbar,
  NavDropdown,
  Nav,
} from 'react-bootstrap';
import '../../../index.css';

const Camera = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Container fluid className="h-100 overflow-hidden">
      {/* Хэдер */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        className="bg-opacity-50 d-flex"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand href="#" className="w-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-left-square ms-5"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
            />
          </svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="flex-shrink-1 me-5">
          <Nav className="mr-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-list text-white"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Содержимое страницы */}
      <Row className="h-100">
        {/* Камера */}
        <Col xs={9} className="p-0">
          {/* Placeholder для компонента камеры */}
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
              <div className="align-self-start ms-2">
                <Button variant="outline-light" className="btn mt-5">Галерея</Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* Меню */}
      {isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '50%',
            height: '100%',
            backgroundColor: 'lightblue',
            zIndex: 999,
          }}
        >
          {/* Содержимое меню */}
        </div>
      )}
    </Container>
  );
};

export default Camera;

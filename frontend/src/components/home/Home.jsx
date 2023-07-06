import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <Card className="col-12 col-md-8 col-xxl-6 ">
        <Card.Body className="col p-5 text-center">
          <Link to="/camera" variant="outline-primary justify-content-center">
            <Button variant="primary" className="m-2 fs-1 p-5">
              Камера
            </Button>
          </Link>
          <Link to="/gallery" variant="outline-primary justify-content-center align-items-center">
            <Button variant="primary" className="p-5 m-2 fs-1">
              Галерея
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;

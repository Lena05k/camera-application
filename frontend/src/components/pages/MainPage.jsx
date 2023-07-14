import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <Card className="bg-black">
        <Card.Body className="col p-5 text-center">
          <Link to="/camera" variant="outline-primary justify-content-center">
            <Button variant="outline-light" className="p-5 m-2 me-2 fs-1">
              Камера
            </Button>
          </Link>
          <Link to="/gallery" variant="outline-primary  align-items-center">
            <Button variant="outline-light" className="p-5 m-2 ms-2 fs-1">
              Галерея
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MainPage;

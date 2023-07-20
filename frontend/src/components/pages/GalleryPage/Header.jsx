import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Navbar } from 'react-bootstrap';

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/');

  return (
    <Navbar
      expand="lg"
      className="bg-opacity-50 d-flex"
    >
      <Navbar.Brand className="w-100">
        <div className="w-100 d-flex justify-content-between align-items-start">
          <Button onClick={handleClick} variant="link" className="btn mt-1 text-white link-offset-2 link-underline link-underline-opacity-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-left-square ms-5"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </svg>
          </Button>
        </div>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;

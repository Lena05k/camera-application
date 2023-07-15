import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonPhoto = ({ openShootingView, isActive }) => (
  <Button
    onClick={openShootingView}
    id="camera"
    variant="link"
    className={`text-end text-center mt-2 btn text-white link-offset-2 link-underline link-underline-opacity-0 ${
      isActive ? 'fw-bold' : ''
    }`}
  >
    ФОТО
  </Button>
);

export default ButtonPhoto;

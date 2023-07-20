import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonVideo = ({ openShootingView, isActive }) => (
  <Button
    onClick={openShootingView}
    id="video"
    variant="link"
    className={`text-end text-center mt-4 btn text-white link-offset-2 link-underline link-underline-opacity-0 ${
      isActive ? 'fw-bold' : ''
    }`}
  >
    ВИДЕО
  </Button>
);

export default ButtonVideo;

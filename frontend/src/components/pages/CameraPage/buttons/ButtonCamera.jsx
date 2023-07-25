import React from 'react';
import { Button } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';

export const ButtonCamera = ({ clickPhoto }) => (
  <Button
    onClick={() => clickPhoto(true)}
    className="position-relative align-self-center ms-2 rounded-circle bg-white border border-2"
    style={{ width: '100px', height: '100px' }}
  />
);

export const ButtonCameraVideo = ({ startShooting }) => (
  <Button
    onClick={() => startShooting(true)}
    variant="link"
    className="link-offset-2 link-underline link-underline-opacity-0"
  >
    <FaIcons.FaCircle
      className="position-absolute fs-1 text-danger"
      style={{ top: '40px', left: '40px' }}
    />
  </Button>
);

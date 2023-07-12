import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonCamera = ({ startShooting }) => (
  <Button
    onClick={() => startShooting(true)}
    className="align-self-center ms-2 rounded-circle bg-white border border-2"
    style={{ width: '100px', height: '100px' }}
  />
);

export default ButtonCamera;

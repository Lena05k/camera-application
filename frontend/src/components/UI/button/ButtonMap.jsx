import React from 'react';
import { Button } from 'react-bootstrap';
import * as SlIcons from 'react-icons/sl';

const ButtonMap = ({ openModal }) => (
  <Button variant="outline-light" className="rounded border border-2 bg-opacity-50 bg-secondary" onClick={() => openModal(true)}>
    <SlIcons.SlMagnifierAdd className="fs-2" />
  </Button>
);

export default ButtonMap;

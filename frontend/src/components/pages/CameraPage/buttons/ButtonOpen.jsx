import { Button } from 'react-bootstrap';
import * as SlIcons from 'react-icons/sl';
import React from 'react';

const ButtonOpenModal = ({ openModal }) => (
  <Button variant="outline-light" className="rounded border border-2 bg-opacity-50 bg-secondary" onClick={() => openModal(true)}>
    <SlIcons.SlMagnifierRemove className="fs-2" />
  </Button>
);

export default ButtonOpenModal;

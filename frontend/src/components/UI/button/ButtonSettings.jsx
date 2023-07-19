import * as FiIcons from 'react-icons/fi';
import { Button } from 'react-bootstrap';
import React from 'react';

const ButtonSettings = ({ setModalShow }) => (
  <Button variant="outline-light" onClick={() => setModalShow(true)}>
    <FiIcons.FiSettings className="fs-3" />
  </Button>
);

export default ButtonSettings;
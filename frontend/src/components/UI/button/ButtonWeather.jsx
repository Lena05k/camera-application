import React from 'react';
import { Button } from 'react-bootstrap';
import * as HiIcons from 'react-icons/hi';

const ButtonWeather = ({ openModal }) => (
  <Button variant="outline-light" className="rounded border border-2" onClick={() => openModal(true)}>
    <HiIcons.HiSun className="fs-2" />
  </Button>
);

export default ButtonWeather;

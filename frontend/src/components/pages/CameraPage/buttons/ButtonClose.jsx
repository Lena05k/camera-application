import React from 'react';
import { Button } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const ButtonClose = ({ closeModal }) => (
  <Button variant="light" className=" shadow-lg p-2 py-1 mt-1 mb-5 bg-body-tertiary rounded" onClick={() => closeModal(false)}>
    <AiIcons.AiOutlineClose className="fw-bolder" />
  </Button>
);

export const ButtonWeatherClose = ({ closeModal }) => (
  <Button variant="link" className="fs-4 text-white shadow-lg link-offset-2 link-underline link-underline-opacity-0" onClick={() => closeModal(false)}>
    <FaIcons.FaArrowLeft className="fw-bolder" />
  </Button>
);
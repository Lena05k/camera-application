import { Map, YMaps } from '@pbe/react-yandex-maps';
import { Button } from 'react-bootstrap';
import React from 'react';

const Modal = ({ closeModal }) => (
  <Modal className="position-absolute">
    <Modal.Body>
      <YMaps>
        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
      </YMaps>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={() => closeModal(false)}>X</Button>
    </Modal.Footer>
  </Modal>
);

export default Modal;

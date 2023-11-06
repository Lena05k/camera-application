import React from 'react';
import {
  Button,
  Modal,
} from 'react-bootstrap';


const ModalCancelNext = (props) => {

  return (
    <Modal
      { ...props }
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h3>СНЯТО! Создать отчет?</h3>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" >Отмена</Button>
        <Button variant="primary" >Далее</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default ModalCancelNext;
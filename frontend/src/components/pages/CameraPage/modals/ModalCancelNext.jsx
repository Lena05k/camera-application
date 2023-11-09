import React, { useState } from 'react';
import {
  Button,
  Modal,
} from 'react-bootstrap';
import ModalFormRepost from './ModalFormRepost';


const ModalCancelNext = (props) => {
  const [showModal, setShow] = useState(false);

  const handleCloseModal = () => setShow(false);
  const handleModalNext = () => setShow(true);

  return (
    <>
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
          <Button variant="secondary" onClick={handleCloseModal}>Отмена</Button>
          <Button variant="primary" onClick={handleModalNext}>Далее</Button>
        </Modal.Footer>
      </Modal>
      <ModalFormRepost show={showModal} onHide={handleCloseModal} />
    </>
  )
};

export default ModalCancelNext;
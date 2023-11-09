import React from 'react';
import {
  Button,
  Modal,
  Form,
  Row,
  Col,
  FloatingLabel,
} from 'react-bootstrap';

const ModalFormRepost = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Цех</Form.Label>
              <Form.Control type="text" placeholder="ЦЭС-3"/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Опора</Form.Label>
              <Form.Control type="text" placeholder="EL52"/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Коррдинаты</Form.Label>
              <Form.Control type="text" placeholder="55.778186, 38.676863"/>
            </Form.Group>
          </Row>
        </Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Температура</Form.Label>
            <Form.Control type="text" placeholder="&#176;С"/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Давление</Form.Label>
            <Form.Control type="text" placeholder="гПа"/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Ветер</Form.Label>
            <Form.Control type="text" placeholder=" м/с"/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Влажность</Form.Label>
            <Form.Control type="text" placeholder="%"/>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="floatingTextarea">
            <Form.Control type="textarea" placeholder="Результат"/>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="floatingTextarea">
            <Form.Control type="textarea" placeholder="Рекомендация"/>
          </Form.Group>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Назад</Button>
        <Button variant="primary">Далее</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalFormRepost;
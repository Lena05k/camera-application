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
      { ...props }
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Form>
          <Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Цех</Form.Label>
              <Form.Control type="text" placeholder="Укажите адрес цеха" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Опора</Form.Label>
              <Form.Control type="text" placeholder="Укажите номер опоры" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Цех</Form.Label>
              <Form.Control type="text" placeholder="Укажите адрес цеха" />
            </Form.Group>
          </Row>
        </Form>
        <Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Температура</Form.Label>
            <Form.Control type="text" placeholder="Укажите температуру" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Давление</Form.Label>
            <Form.Control type="text" placeholder="Укажите давление" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Ветер</Form.Label>
            <Form.Control type="text" placeholder="Укажите м/с" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Влажность</Form.Label>
            <Form.Control type="text" placeholder="Укажите влажность в %" />
          </Form.Group>
        </Row>
        <Row>
          <FloatingLabel controlId="floatingTextarea2" label="Результат">
            <Form.Control
              as="textarea"
              placeholder="Результат"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
        </Row>
        <Row>
          <FloatingLabel controlId="floatingTextarea2" label="Рекомендация">
            <Form.Control
              as="textarea"
              placeholder="Рекомендация"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" >Назад</Button>
        <Button variant="primary" >Далее</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default ModalFormRepost;
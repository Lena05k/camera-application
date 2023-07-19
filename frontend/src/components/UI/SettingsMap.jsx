import React from 'react';
import { Form } from 'react-bootstrap';

export const ZoomButtons = () => {
  return (
    <div className="d-flex flex-row justify-content-between my-3">
      <p className="fs-4">Кнопки масштаба</p>
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          className="fs-3"
        />
      </Form>
    </div>
  );
};

export const ScaleRuler = () => {
  return (
    <div className="d-flex flex-row justify-content-between align-items-center my-3">
      <p className="fs-4">Масштабная линейка</p>
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          className="fs-3"
        />
      </Form>
    </div>
  );
};

export const MapRotation = () => {
  return (
    <div className="d-flex flex-row justify-content-between align-items-center my-3">
      <p className="fs-4">Вращение карты пальцами</p>
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          className="fs-3"
        />
      </Form>
    </div>
  );
};
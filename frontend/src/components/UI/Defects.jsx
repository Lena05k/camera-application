import { Spinner } from 'react-bootstrap';
import React from 'react';

const Defects = () => (
  <>
    <div className="position-absolute top-50  d-flex flex-column" style={{ left: '330px' }}>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <Spinner animation="grow" variant="danger" className="fs-3" />
        <Spinner animation="grow" variant="danger" className="fs-3" size="sm" />
      </div>
      <div className="d-flex flex-row">
        <Spinner animation="grow" variant="danger" className="fs-3" size="sm" />
        <Spinner animation="grow" variant="danger" className="fs-3" />
        <Spinner animation="grow" variant="danger" className="fs-3" size="sm" />
        <Spinner animation="grow" variant="danger" className="fs-3" />
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <Spinner animation="grow" variant="danger" className="fs-3" size="sm" />
        <Spinner animation="grow" variant="danger" className="fs-3" />
        <Spinner animation="grow" variant="danger" className="fs-3" size="sm" />
      </div>
    </div>
    <div className="position-absolute top-50  d-flex flex-column" style={{ right: '310px' }}>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <Spinner animation="grow" variant="danger" className="fs-3" />
        <Spinner animation="grow" variant="danger" className="fs-3" size="sm" />
      </div>
      <div className="d-flex flex-row">
        <Spinner animation="grow" variant="danger" className="fs-3" size="sm" />
        <Spinner animation="grow" variant="danger" className="fs-3" />
        <Spinner animation="grow" variant="danger" className="fs-3" size="sm" />
        <Spinner animation="grow" variant="danger" className="fs-3" />
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <Spinner animation="grow" variant="danger" className="fs-3" size="sm" />
        <Spinner animation="grow" variant="danger" className="fs-3" />
        <Spinner animation="grow" variant="danger" className="fs-3" size="sm" />
      </div>
    </div>
    <div className="position-absolute d-flex flex-column" style={{ top: '380px', left: '462px' }}>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <Spinner animation="grow" variant="danger" className="fs-3" />
        <Spinner animation="grow" variant="danger" className="fs-3" size="sm" />
      </div>
      <div className="d-flex flex-row">
        <Spinner animation="grow" variant="danger" className="fs-3" size="sm" />
        <Spinner animation="grow" variant="danger" className="fs-3" />
        <Spinner animation="grow" variant="danger" className="fs-3" size="sm" />
        <Spinner animation="grow" variant="danger" className="fs-3" />
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <Spinner animation="grow" variant="danger" className="fs-3" size="sm" />
        <Spinner animation="grow" variant="danger" className="fs-3" />
        <Spinner animation="grow" variant="danger" className="fs-3" size="sm" />
      </div>
    </div>
    <div className="position-absolute d-flex flex-column" style={{ top: '270px', right: '530px' }}>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <Spinner animation="grow" variant="danger" className="fs-3" />
        <Spinner animation="grow" variant="danger" className="fs-3" size="sm" />
      </div>
      <div className="d-flex flex-row">
        <Spinner animation="grow" variant="danger" className="fs-3" size="sm" />
        <Spinner animation="grow" variant="danger" className="fs-3" />
        <Spinner animation="grow" variant="danger" className="fs-3" size="sm" />
        <Spinner animation="grow" variant="danger" className="fs-3" />
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <Spinner animation="grow" variant="danger" className="fs-3" size="sm" />
        <Spinner animation="grow" variant="danger" className="fs-3" />
        <Spinner animation="grow" variant="danger" className="fs-3" size="sm" />
      </div>
    </div>
  </>
);

export default Defects;

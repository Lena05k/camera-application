import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonCamera = () => (
    <div
        className="d-flex align-self-center rounded-circle border border-1 border-white"
        style={{ width: '120px', height: '120px' }}
    >
        <Button
            className="align-self-center ms-2 rounded-circle bg-white border border-2"
            style={{ width: '100px', height: '100px' }}
        />
    </div>
);

export default ButtonCamera;
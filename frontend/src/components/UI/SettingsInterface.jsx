import { Button, ButtonGroup, ToggleButton } from 'react-bootstrap';
import * as GoIcons from 'react-icons/go';
import React, { useState } from 'react';
import PopoverPicker from './PopoverPicker';

export const Theme = () => (
  <div className="d-flex flex-row justify-content-between my-3">
    <p className="text-white fs-4">Тема</p>
    <Button variant="link" className="btn link-offset-2 link-underline link-underline-opacity-0 d-flex flex-row align-items-center">
      <span className="text-white fs-4">Системная</span>
      <GoIcons.GoTriangleRight className="text-white fs-4" />
    </Button>
  </div>
);

export const Color = () => {
  const [color, setColor] = useState('#aabbcc');

  return (
    <div className="d-flex flex-row justify-content-between my-3">
      <p className="text-white fs-4">Цвет точки</p>
      <PopoverPicker color={color} onChange={setColor} />
    </div>
  );
};

export const MapView = () => {
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Схема', value: '1' },
    { name: 'Спутник', value: '2' },
    { name: 'Гибрид', value: '3' },
  ];
  return (
    <div className="d-flex flex-column justify-content-between my-3">
      <p className="text-white fs-4">Вид карты</p>
      <div className="d-flex flex-rom justify-content-center align-content-center rounded-3 py-2 mx-4" style={{ background: '#212529' }}>
        <ButtonGroup>
          {radios.map((radio, id) => (
            <ToggleButton
              key={id}
              id={`radio-${id}`}
              type="radio"
              variant={id % 2 ? 'dark' : 'dark'}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
              className="rounded-3 fs-4 px-4"
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
};

export const Language = () => {
  return (
    <div className="d-flex flex-row justify-content-between align-items-center my-3">
      <p className="text-white fs-4">Язык</p>
      <Button variant="link" className="btn link-offset-2 link-underline link-underline-opacity-0 d-flex flex-row align-items-center">
        <span className="text-white fs-4">Как в системе</span>
        <GoIcons.GoTriangleRight className="text-white fs-4" />
      </Button>
    </div>
  );
};
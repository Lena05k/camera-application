import React, { useState } from 'react';
import {
  ButtonGroup, Dropdown, DropdownButton,
  Form,
  ToggleButton,
} from 'react-bootstrap';
import PopoverPicker from './colorPicket/PopoverPicker';

export const Theme = () => {
  const [selectedTitle, setSelectedTitle] = useState('Светлая');

  const handleDropdownItemClick = (title) => setSelectedTitle(title);
  return (
    <div className="d-flex flex-row justify-content-between my-3">
      <p className="fs-4">Тема</p>
      <DropdownButton
        variant="secondary"
        size="lg"
        align="end"
        className=" d-flex flex-row align-items-center dropdown-menu-sm-start"
        id="dropdown-basic-button"
        title={selectedTitle}
      >
        <Dropdown.Item
          href="#/action-1"
          className="fs-4 my-2"
          onClick={() => handleDropdownItemClick('Светлая')}
        >
          Светлая
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-2"
          className="fs-4 my-2"
          onClick={() => handleDropdownItemClick('Темная')}
        >
          Темная
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-3"
          className="d-flex flex-column my-2"
          onClick={() => handleDropdownItemClick('Автоматическая')}
        >
          <span className="fs-4">Автоматическая</span>
          <span className="text-secondary">
            Тема переключается в зависимости от времени восхода и заката
          </span>
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-4"
          className="d-flex flex-column my-2"
          onClick={() => handleDropdownItemClick('Системная')}
        >
          <span className="fs-4">Системная</span>
          <span className="text-secondary">Как в телефоне</span>
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export const Color = () => {
  const [color, setColor] = useState('#aabbcc');

  return (
    <div className="d-flex flex-row justify-content-between my-3">
      <p className="fs-4">Цвет точки</p>
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
      <div className="d-flex flex-rom justify-content-center align-content-center rounded-3 py-2 mx-4 bg-secondary">
        <ButtonGroup>
          {radios.map((radio, id) => (
            <ToggleButton
              key={id}
              id={`radio-${id}`}
              type="radio"
              variant={id % 2 ? 'secondary' : 'secondary'}
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
  const [selectedTitle, setSelectedTitle] = useState('Русский');

  const handleDropdownItemClick = (title) => setSelectedTitle(title);
  return (
    <div className="d-flex flex-row justify-content-between my-3">
      <p className="fs-4">Язык</p>
      <DropdownButton
        variant="secondary"
        size="lg"
        align="end"
        className="px-2 d-flex flex-row align-items-center"
        id="dropdown-basic-button"
        title={selectedTitle}
      >
        <Dropdown.Item
          href="#/action-1"
          className="fs-4 my-2"
          onClick={() => handleDropdownItemClick('Русский')}
        >
          Русский
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-1"
          className="fs-4 my-2"
          onClick={() => handleDropdownItemClick('Белорусский')}
        >
          Белорусский
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-1"
          className="fs-4 my-2"
          onClick={() => handleDropdownItemClick('Украинский')}
        >
          Украинский
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-2"
          className="fs-4 my-2"
          onClick={() => handleDropdownItemClick('Узбекский')}
        >
          Узбекский
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-3"
          className="fs-4 my-2"
          onClick={() => handleDropdownItemClick('Азербайджанский')}
        >
          Азербайджанский
        </Dropdown.Item>
        <Dropdown.Item
          href="#/action-4"
          className="fs-4 my-2"
          onClick={() => handleDropdownItemClick('Казахский')}
        >
          Казахский
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export const Microphone = ({ handleSwitchMicro }) => {
  const switchMicro = (event) => handleSwitchMicro(event.target.checked);
  return (
    <div className="d-flex flex-row justify-content-between my-3">
      <p className="fs-4">Микрофон</p>
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          className="fs-3"
          onChange={switchMicro}
        />
      </Form>
    </div>
  );
};
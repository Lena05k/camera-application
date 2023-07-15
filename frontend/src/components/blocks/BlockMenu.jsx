import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  ButtonGroup,
  Form,
  ToggleButton,
} from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GoIcons from 'react-icons/go';
import PopoverPicker from '../UI/PopoverPicker';
import '../../styles/Navbar.css';

const BlockMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  const [color, setColor] = useState("#aabbcc");

  const radios = [
    { name: 'Схема', value: '1' },
    { name: 'Спутник', value: '2' },
    { name: 'Гибрид', value: '3' },
  ];

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="navbar">
        <Link onClick={toggleMenu} to="#" className="menu-bars text-white">
          <FaIcons.FaBars />
        </Link>
      </div>
      <nav className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
        <div className="nav-menu-items">
          <Link onClick={toggleMenu} to="#" className="menu-bars navbar-toggle text-white pe-3">
            <AiIcons.AiOutlineClose />
          </Link>
          <div className="nav-menu-items">
            <h2 className="text-white text-center pb-2">Карта и интерфейс</h2>
            <div className="" style={{ background: '#212529' }}>
              <p className="mx-3 py-2 text-white fs-4">Общее</p>
            </div>
            <div className="mx-3">
              <div className="d-flex flex-row justify-content-between my-3">
                <p className="text-white fs-4">Тема</p>
                <Button variant="link" className="btn link-offset-2 link-underline link-underline-opacity-0 d-flex flex-row align-items-center">
                  <span className="text-white fs-4">Системная</span>
                  <GoIcons.GoTriangleRight className="text-white fs-4" />
                </Button>
              </div>
              <div className="d-flex flex-row justify-content-between my-3">
                <p className="text-white fs-4">Цвет точки</p>
                <PopoverPicker color={color} onChange={setColor} />
              </div>
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
              <div className="d-flex flex-row justify-content-between align-items-center my-3">
                <p className="text-white fs-4">Язык</p>
                <Button variant="link" className="btn link-offset-2 link-underline link-underline-opacity-0 d-flex flex-row align-items-center">
                  <span className="text-white fs-4">Как в системе</span>
                  <GoIcons.GoTriangleRight className="text-white fs-4" />
                </Button>
              </div>
            </div>
            <div className="" style={{ background: '#212529' }}>
              <p className="mx-3 py-2 text-white fs-4">Карта</p>
            </div>
            <div className="mx-3">
              <div className="d-flex flex-row justify-content-between my-3">
                <p className="text-white fs-4">Кнопки масштаба</p>
                <Form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    className="fs-3"
                  />
                </Form>
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center my-3">
                <p className="text-white fs-4">Масштабная линейка</p>
                <Form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    className="fs-3"
                  />
                </Form>
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center my-3">
                <p className="text-white fs-4">Вращение карты пальцами</p>
                <Form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    className="fs-3"
                  />
                </Form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BlockMenu;

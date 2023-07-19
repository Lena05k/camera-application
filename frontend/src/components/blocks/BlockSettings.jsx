import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
} from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GoIcons from 'react-icons/go';
import '../../styles/Navbar.css';
import {
  Theme,
  Color,
  MapView,
  Language, Microphone,
} from '../UI/SettingsInterface';
import {ScaleRuler, ZoomButton} from "../UI/SettingsMap";

const BlockMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

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
              <Theme />
              <Color />
              <MapView />
              <Language />
              <Microphone />
            </div>
            <div className="" style={{ background: '#212529' }}>
              <p className="mx-3 py-2 text-white fs-4">Карта</p>
            </div>
            <div className="mx-3">
              <ZoomButton />
              <ScaleRuler />
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

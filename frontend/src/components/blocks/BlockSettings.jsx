import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {
  Theme,
  Color,
  MapView,
  Language, Microphone,
} from '../UI/SettingsInterface';
import {
  MapRotation,
  ScaleRuler,
  ZoomButtons,
} from '../UI/SettingsMap';
import '../../styles/Navbar.css';

const BlockSettings = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [switchMicro, setSwitchMicro] = useState(true);
  const handleSwitchMicro = () => setSwitchMicro(!switchMicro);
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
            <div className="mx-3 text-white">
              <Theme />
              <Color />
              <MapView />
              <Language />
              <Microphone handleSwitchMicro={handleSwitchMicro} />
            </div>
            <div className="" style={{ background: '#212529' }}>
              <p className="mx-3 py-2 text-white fs-4">Карта</p>
            </div>
            <div className="mx-3 text-white">
              <ZoomButtons />
              <ScaleRuler />
              <MapRotation />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BlockSettings;

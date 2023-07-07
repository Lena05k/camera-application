import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SidebarData from '../../core/models/SidebarData';
import '../../styles/Navbar.css';

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars text-white" onClick={toggleMenu}>
          <FaIcons.FaBars />
        </Link>
      </div>
      <nav className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <Link to="#" className="menu-bars text-white">
            <AiIcons.AiOutlineClose />
          </Link>
          {
            SidebarData.map((item) => (
              <li className={item.cssName} key={item.id}>
                <Link to="#" className={item.cssText} key={item.id}>
                  <span className="sidebar-item-title">{item.title}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </>
  );
};

export default Menu;

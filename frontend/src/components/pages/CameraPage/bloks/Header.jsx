import { Button, Nav, Navbar } from 'react-bootstrap';
import React, {useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import BlockSettings from '../../../UI/settings/BlockSettings';

const Header = () => {
  const [switchMicro, setSwitchMicro] = useState(true);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [switchTime, setSwitchTime] = useState(true);
  const intervalRef = useRef();
  const handleSwitchMicro = () => setSwitchMicro(!switchMicro);
  const navigate = useNavigate();
  const handleClick = () => navigate('/');

  const handleSetSwitchTime = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      className="bg-opacity-50 d-flex"
      variant="dark"
      fixed="top"
    >
      <Navbar.Brand href="#" className="w-100">
        <div className="w-75 d-flex justify-content-between align-items-center">
          <Button onClick={handleClick} variant="link" className="btn mt-1 text-white link-offset-2 link-underline link-underline-opacity-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-left-square ms-5"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </svg>
          </Button>
          {switchTime && <div className="fs-1 text-danger">{formatTime(time)}</div>}
          <div className="d-flex flex-row justify-content-sm-between">
            <div>
              <FaIcons.FaSignal className="me-5  fs-3" />
              <FaIcons.FaSatelliteDish className="me-5  fs-3" />
              <FaIcons.FaWifi className="me-5 fs-3" />
            </div>
            <div>
              {switchMicro ? (
                <FaIcons.FaMicrophone className="me-5 fs-3" />
              ) : (
                <FaIcons.FaMicrophoneSlash className="me-5 fs-3" />
              )}
              <GiIcons.GiBattery75 className="me-5 fs-3" />
            </div>
          </div>
        </div>
      </Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav" className="flex-shrink-1 me-5">
        <Nav className="mr-auto">
          <BlockSettings handleSwitchMicro={handleSwitchMicro} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

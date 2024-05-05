import React, {useEffect, useState} from 'react';
import Header from './bloks/Header';
import BlockMap from './bloks/BlockMap';
import BlockWeather from './bloks/BlockWeather';
import Defects from './bloks/Defects';
import ModalCancelNext from './modals/ModalCancelNext';
import { ButtonCamera } from './buttons/ButtonCamera';
import ButtonGallery from './buttons/ButtonGallery';
import VerticalSlider from '../../UI/settings/containers/VerticalSlider';
import BlockShooting from './bloks/BlockShooting';
import '../../../styles/index.css';
import '../../../styles/blockCamera.css';
import powerSupplySupport from '../../../assets/powerSupplySupport.jpg';
import Exposition from "./bloks/Exposition";
import {Button, Modal} from "react-bootstrap";

const CameraPage = () => {
  const [showDefects, setShowDefects] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [showClick, setShowClick] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleShowCamera = (show) => {
    setShowCamera(show);
  }
  const handleSetActiveButton = (buttonId) => setActiveButton(buttonId);
  const handleShowDefects = () => {
    setClickCount(clickCount + 1);

    if (clickCount % 2 === 0) {
      setShowDefects(!showDefects);
    } else {
      setShowDefects(false);
      setModalShow(true);
    }
  };
  const handleClickPhoto = () => setShowClick(!showClick);
  const handleModalShow = (modal) => setModalShow(modal);

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="h-100">
        <img className="position-fixed w-100 h-100 p-0 start-0 end-0 top-0 bottom-0 object-fit-fill" src={powerSupplySupport} alt="power supply support" />
        <div className="position-absolute w-100 h-100 mx-auto overflow-hidden object-fit-cover">
          {showDefects && <Defects />}
          {showClick && <Exposition  />}
        </div>
        <div className="position-absolute start-0 top-0 ms-5 mt-5">
          <div className="d-flex flex-column mt-5" style={{ height: '800px' }}>
            <BlockWeather />
            <VerticalSlider />
            <BlockMap />
          </div>
        </div>
        <div id="blockCamera" className={`${showCamera ? 'camera' : 'camera bg-opacity-50'} bg-black position-absolute end-0 d-flex flex-column align-items-end`}>
          <div className="position-relative d-flex flex-row end-0 mt-5">
            <div className="position-relative">
              <div
                className="position-relative d-flex align-self-center rounded-circle border border-1 border-white"
                style={{ width: '120px', height: '120px' }}
              >
                <ButtonCamera clickPhoto={handleClickPhoto}/>
              </div>
              <ButtonGallery />
            </div>
            <div className="d-flex flex-column align-items-center top-50 end-0 ms-3">
              <BlockShooting
                openShootingView={handleShowCamera}
                activeButton={activeButton}
                setActiveButton={handleSetActiveButton}
                startShooting={handleShowDefects}
                setModalShow={handleModalShow}
              />
            </div>
          </div>
          <ModalCancelNext show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
      </div>
    </div>
  );
};

export default CameraPage;

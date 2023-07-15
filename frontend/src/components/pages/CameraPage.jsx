import React, { useState } from 'react';
import Header from '../blocks/Header';
import BlockMap from '../blocks/BlockMap';
import BlockWeather from '../blocks/BlockWeather';
import Defects from '../UI/Defects';
import ButtonCamera from '../UI/button/ButtonCamera';
import ButtonGallery from '../UI/button/ButtonGallery';
import BlockShooting from '../blocks/BlockShooting';
import '../../styles/index.css';
import '../../styles/blockCamera.css';
import powerSupplySupport from '../../assets/powerSupplySupport.jpg';

const CameraPage = () => {
  const [showDefects, setShowDefects] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const handleShowDefects = () => setShowDefects(!showDefects);
  const handleShowCamera = (show) => setShowCamera(show);
  const handleSetActiveButton = (buttonId) => setActiveButton(buttonId);

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="h-100">
        <img className="position-fixed w-100 h-100 p-0 start-0 end-0 top-0 bottom-0 object-fit-fill" src={powerSupplySupport} alt="power supply support" />
        <div className="position-absolute w-100 h-100 mx-auto overflow-hidden object-fit-cover">
          {showDefects && <Defects />}
        </div>
        <div className="position-absolute start-0 top-0 ms-5 mt-5">
          <div className="d-flex flex-column mt-5" style={{ height: '800px' }}>
            <BlockWeather />
            <BlockMap />
          </div>
        </div>
        <div id="blockCamera" className={`${showCamera ? 'camera' : 'camera bg-opacity-50'} bg-black position-absolute end-0 d-flex flex-column align-items-end`}>
          <div className="position-relative d-flex flex-row end-0">
            <div className="position-relative">
              <div
                className="position-relative d-flex align-self-center rounded-circle border border-1 border-white"
                style={{ width: '120px', height: '120px' }}
              >
                <ButtonCamera startShooting={handleShowDefects} />
              </div>
              <ButtonGallery />
            </div>
            <div className="d-flex flex-column align-items-center top-50 end-0 ms-3">
              <BlockShooting
                openShootingView={handleShowCamera}
                activeButton={activeButton}
                setActiveButton={handleSetActiveButton}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraPage;

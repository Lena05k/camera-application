import React, { useState } from 'react';
import Header from './Header';
import BlockMap from '../blocks/BlockMap';
import BlockWeather from '../blocks/BlockWeather';
import BlockShooting from '../blocks/BlockShooting';
import Defects from '../UI/Defects';
import ButtonCamera from '../UI/button/ButtonCamera';
import '../../styles/index.css';
import powerSupplySupport from '../../assets/original-1ud8.jpg';

const CameraPage = () => {
  const [showDefects, setShowDefects] = useState(false);
  const handleShowDefects = () => setShowDefects(!showDefects);

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
        <div className="position-absolute top-50 end-0 d-flex flex-column me-3">
          <div className="d-flex flex-row">
            <div
                className={`d-flex align-self-center rounded-circle border border-1 border-white ${showDefects ? 'bg-danger' : ''}`}
                style={{ width: '120px', height: '120px' }}
            >
              <ButtonCamera startShooting={handleShowDefects} />
            </div>
            <BlockShooting />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraPage;

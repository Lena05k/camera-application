import React from 'react';
import * as FaIcons from 'react-icons/fa6';
import * as BsIcons from 'react-icons/bs';

const ModalWeather = () => (
  <div className="d-flex flex-row text-white">
    <div className="d-flex flex-row align-items-center ms-2">
      <FaIcons.FaCloudSunRain className="ms-3 fs-2" />
      <h1 className="ms-1 fs-3 mb-0">+23&deg;С</h1>
    </div>
    <div className="d-flex flex-row align-items-center ms-4">
      <FaIcons.FaWind className="fs-3" />
      <h1 className="ms-1 fs-3 mb-0">3,4 м/с</h1>
    </div>
    <div className="d-flex flex-row align-items-center ms-4">
      <FaIcons.FaDroplet className="fs-3" />
      <h1 className="ms-1 fs-3 mb-0">58%</h1>
    </div>
    <div className="d-flex flex-row align-items-center ms-4">
      <BsIcons.BsSpeedometer className="fs-3" />
      <h1 className="ms-1 fs-3 mb-0">763 мм рт. ст.</h1>
    </div>
  </div>
);

export default ModalWeather;

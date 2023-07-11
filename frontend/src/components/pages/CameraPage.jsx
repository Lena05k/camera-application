import React from 'react';
import Header from './Header';
import BlockMap from './BlockMap';
import BlockWeather from './BlockWeather';
import Defects from '../UI/Defects';
import ButtonCamera from '../UI/button/ButtonCamera';
import ButtonPhoto from '../UI/button/ButtonPhoto';
import ButtonVideo from '../UI/button/ButtonVideo';
import ButtonGallery from '../UI/button/ButtonGallery';
import '../../styles/index.css';
import powerSupplySupport from '../../assets/original-1ud8.jpg';

const CameraPage = () => {
  // const videoRef = useRef(null);

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="h-100">

        {/*<video*/}
        {/*  className="position-fixed w-100 h-100 p-0 start-0 end-0 top-0 bottom-0 object-fit-cover"*/}
        {/*  ref={videoRef}*/}
        {/*  autoPlay*/}
        {/*/>*/}

        <img className="position-fixed w-100 h-100 p-0 start-0 end-0 top-0 bottom-0 object-fit-fill" src={powerSupplySupport} alt="power supply support" />
        <div className="position-absolute w-100 h-100 mx-auto overflow-hidden object-fit-cover">
          <Defects />
        </div>
        <div className="position-absolute start-0 top-0 ms-5 mt-5">
          <div className="d-flex flex-column mt-5" style={{ height: '800px' }}>
            <BlockWeather />
            <BlockMap />
          </div>
        </div>
        <div className="position-absolute top-50 end-0 d-flex flex-column me-3">
          <div className="d-flex flex-row">
            <ButtonCamera />
            <div className="d-flex flex-column top-50 end-0 ms-3">
              <ButtonPhoto />
              <ButtonVideo />
            </div>
          </div>
          <ButtonGallery />
        </div>
      </div>
    </div>
  );
};

export default CameraPage;

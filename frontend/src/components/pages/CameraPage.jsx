import React from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/index.css';
import Header from './Header';
import BlockMap from './BlockMap';
import BlockWeather from './BlockWeather';
import Defects from '../UI/Defects';
import ButtonGallery from '../UI/button/ButtonGallery';
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
            <div
              className="d-flex align-self-center rounded-circle border border-1 border-white"
              style={{ width: '120px', height: '120px' }}
            >
              <Button
                className="align-self-center ms-2 rounded-circle bg-white border border-2"
                style={{ width: '100px', height: '100px' }}
              />
            </div>
            <div className="d-flex flex-column top-50 end-0 ms-3">
              <Button
                variant="link"
                className="text-end text-center mb-4 btn text-white link-offset-2 link-underline link-underline-opacity-0"
              >
                ФОТО
              </Button>
              <Button
                variant="link"
                className="text-end text-center mt-4 btn text-white link-offset-2 link-underline link-underline-opacity-0"
              >
                ВИДЕО
              </Button>
            </div>
          </div>
          <ButtonGallery />
        </div>
      </div>
    </div>
  );
};

export default CameraPage;

import React, { useState } from 'react';
import ButtonWeather from '../UI/button/ButtonWeather';
import ModalWeather from '../UI/modal/ModalWeather';
import { ButtonWeatherClose } from '../UI/button/ButtonClose';

const BlockWeather = () => {
  const [showMap, setShowMap] = useState(false);
  const handleCloseMap = () => setShowMap(false);
  const handleShowMap = () => setShowMap(true);

  return (
    <div className="mb-auto">
      {!showMap && <ButtonWeather openModal={handleShowMap} />}
      {
        showMap && (
          <div className="position-relative rounded border border-2 bg-opacity-50 bg-secondary">
            <div className="d-flex flex-row align-items-center">
              <ModalWeather show={showMap} />
              <ButtonWeatherClose closeModal={handleCloseMap} />
            </div>
          </div>
        )
      }
    </div>
  );
};

export default BlockWeather;

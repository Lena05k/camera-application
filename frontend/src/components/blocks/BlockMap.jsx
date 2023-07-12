import React, { useState } from 'react';
import ModalMap from '../UI/modal/ModalMap';
import ButtonMap from '../UI/button/ButtonMap';
import { ButtonClose } from '../UI/button/ButtonClose';

const BlockMap = () => {
  const [showMap, setShowMap] = useState(false);

  const handleCloseMap = () => setShowMap(false);
  const handleShowMap = () => setShowMap(true);

  return (
    <div className="bd-highlight">
      {!showMap && <ButtonMap openModal={handleShowMap} />}
      <div className="position-relative">
        <div>
          {showMap && <ModalMap show={showMap} />}
        </div>
        <div className="position-absolute top-0 ms-1 mt-1">
          {showMap && <ButtonClose closeModal={handleCloseMap} />}
        </div>
      </div>
    </div>
  );
};

export default BlockMap;

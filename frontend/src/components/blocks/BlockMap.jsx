import React, { useState } from 'react';
import ModalMap from '../UI/modal/ModalMap';
import { ButtonClose } from '../UI/button/ButtonClose';
import ButtonOpenModal from '../UI/button/ButtonOpen';

const BlockMap = () => {
  const [showMap, setShowMap] = useState(false);

  const handleCloseMap = () => setShowMap(true);
  const handleShowMap = () => setShowMap(false);

  return (
    <div className="position-relative bd-highlight">
      {!showMap && (
        <>
          <ModalMap />
          <div className="position-absolute top-0 ms-1 mt-1">
            <ButtonClose closeModal={handleCloseMap} />
          </div>
        </>
      )}
      {showMap && <ButtonOpenModal openModal={handleShowMap} />}
    </div>
  );
};

export default BlockMap;

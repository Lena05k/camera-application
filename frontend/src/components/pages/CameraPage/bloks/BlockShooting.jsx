import React from 'react';
import ButtonPhoto from '../buttons/ButtonPhoto';
import ButtonVideo from '../buttons/ButtonVideo';
import { ButtonCameraVideo } from '../buttons/ButtonCamera';

const BlockShooting = ({ openShootingView, activeButton, setActiveButton, startShooting, setModalShow, setStartShooting }) => {
  const handleShowDefects = () => {
    if (startShooting) {
      startShooting(false);
      setModalShow(true);
    } else {
      startShooting();
    }
  };

  const handleShowModal = () => setModalShow(true);
  const handleOpenPhoto = () => {
    openShootingView(true);
    setActiveButton('camera');
  };

  const handleOpenVideo = () => {
    openShootingView(false);
    setActiveButton('video');
  };

  return (
    <div className="d-flex flex-column top-50 end-0 ms-3">
      <ButtonPhoto
        openShootingView={handleOpenPhoto}
        isActive={activeButton === 'camera'}
      />
      <ButtonVideo
        openShootingView={handleOpenVideo}
        isActive={activeButton === 'video'}
      />
      {
        activeButton === 'video' && (
          <ButtonCameraVideo
            startShooting={handleShowDefects}
            setModalShow={handleShowModal}
          />
        )
      }
    </div>
  );
};

export default BlockShooting;

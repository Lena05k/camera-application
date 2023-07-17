import React, {useState} from 'react';
import ButtonPhoto from '../UI/button/ButtonPhoto';
import ButtonVideo from '../UI/button/ButtonVideo';
import { ButtonCameraVideo } from '../UI/button/ButtonCamera';

const BlockShooting = ({ openShootingView, activeButton, setActiveButton, startShooting }) => {
  const handleShowDefects = () => startShooting(true);
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
          <ButtonCameraVideo startShooting={handleShowDefects} />
        )
      }
    </div>
  );
};

export default BlockShooting;

import React from 'react';
import * as FaIcons from 'react-icons/fa';
import ButtonPhoto from '../UI/button/ButtonPhoto';
import ButtonVideo from '../UI/button/ButtonVideo';

const BlockShooting = ({ openShootingView, activeButton, setActiveButton }) => {
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
          <FaIcons.FaCircle
            className="position-absolute fs-1 text-danger"
            style={{ top: '40px', left: '40px' }}
          />
        )
      }
    </div>
  );
};

export default BlockShooting;

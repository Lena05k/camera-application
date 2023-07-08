import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import * as HiIcons from 'react-icons/hi';
import Modal from '../UI/Modal';

const ButtonCard = () => {
  const [showMap, setShowMap] = useState(false);

  const handleCloseMap = () => setShowMap(false);
  const handleShowMap = () => setShowMap(true);
  console.log(handleShowMap);

  return (
    <>
      <Button variant="outline-light" onClick={handleShowMap}>
        <HiIcons.HiSun className="fs-2" />
      </Button>
      {showMap && <Modal show={showMap} closeModal={handleCloseMap} />}
    </>
  );
};

export default ButtonCard;

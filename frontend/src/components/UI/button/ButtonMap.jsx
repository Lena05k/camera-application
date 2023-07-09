import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import * as SlIcons from 'react-icons/sl';
import ModalMap from '../UI/modal/ModalMap';

const ButtonMap = () => {
  const [showMap, setShowMap] = useState(false);

  const handleCloseMap = () => setShowMap(showMap);
  const handleShowMap = () => setShowMap(!showMap);
  console.log(setShowMap);

  return (
    <>
      <Button variant="outline-light" onClick={handleShowMap}>
        <SlIcons.SlMagnifierAdd className="fs-2" />
      </Button>
      {showMap && <ModalMap show={showMap} closeModal={handleCloseMap} />}
    </>
  );
};

export default ButtonMap;

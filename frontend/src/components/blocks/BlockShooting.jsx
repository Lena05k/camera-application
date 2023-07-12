import React, {useState} from 'react';
import ButtonPhoto from '../UI/button/ButtonPhoto';
import ButtonVideo from '../UI/button/ButtonVideo';

const BlockShooting = () => {
  return (
    <div className="d-flex flex-column top-50 end-0 ms-3">
      <ButtonPhoto />
      <ButtonVideo />
    </div>
  );
};

export default BlockShooting;
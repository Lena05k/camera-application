import React, { useState } from 'react';
import ModalSetting from '../UI/modal/ModalSetting';
import ButtonSettings from '../UI/button/ButtonSettings';

const BlockSettings = () => {
  const [modalShow, setModalShow] = useState(false);
  const handleModalShow = (modal) => setModalShow(modal);

  return (
    <>
      <div className="position-absolute top-0 end-0 mt-5 me-5 bg-black">
        <ButtonSettings setModalShow={handleModalShow} />
      </div>
      <ModalSetting
        show={modalShow}
        onHide={() => setModalShow(false)} />
    </>
  );
};

export default BlockSettings;
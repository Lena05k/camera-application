import React, { useState } from 'react';
import ModalSetting from '../../../UI/settings/modal/ModalSetting';
import ButtonSettings from '../buttons/ButtonSettings';

const BlockModalSettings = () => {
  const [modalShow, setModalShow] = useState(false);
  const handleModalShow = (modal) => setModalShow(modal);

  return (
    <>
      <div className="position-absolute top-0 end-0 mt-5 me-5 bg-black bg-opacity-25">
        <ButtonSettings setModalShow={handleModalShow} />
      </div>
      <ModalSetting
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default BlockModalSettings;

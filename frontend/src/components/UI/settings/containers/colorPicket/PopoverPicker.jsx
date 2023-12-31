import React, { useCallback, useRef, useState } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import useClickOutside from './useClickOutside';
import '../../../../../styles/picketColor.css';

const PopoverPicker = ({ color, onChange }) => {
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <div className="picker d-flex flex-row align-items-center">
      <div
        className="swatch me-2"
        style={{ backgroundColor: color }}
        onClick={() => toggle(true)}
      />
      <HexColorInput color={color} onChange={onChange} className="fs-4" style={{ width: '134px' }} />

      {isOpen && (
        <div className="popover" ref={popover}>
          <HexColorPicker color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
};

export default PopoverPicker;
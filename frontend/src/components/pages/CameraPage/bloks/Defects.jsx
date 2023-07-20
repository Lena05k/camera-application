import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';

const Defects = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPositions = [];
      for (let i = 0; i < 16; i += 1) {
        const x = Math.floor(Math.random() * 800) + 400;
        const y = Math.floor(Math.random() * 800) + 100;
        newPositions.push({ x, y });
      }
      setPositions(newPositions);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="position-relative">
      {positions.map((position, index) => (
        <div
          key={index}
          className="position-absolute d-flex flex-column"
          style={{ top: `${position.y}px`, left: `${position.x}px` }}
        >
          <div className="d-flex flex-row justify-content-center align-items-center">
            <FaIcons.FaCircle className="fs-3 text-danger" />
            <FaIcons.FaCircle className="fs-4 text-danger" />
          </div>
          <div className="d-flex flex-row">
            <FaIcons.FaCircle className="fs-3 text-danger" />
            <FaIcons.FaCircle className="fs-4 text-danger" />
            <FaIcons.FaCircle className="fs-2 text-danger" />
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <FaIcons.FaCircle className="fs-1 text-danger" />
            <FaIcons.FaCircle className="fs-2 text-danger" />
            <FaIcons.FaCircle className="fs-4 text-danger" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Defects;

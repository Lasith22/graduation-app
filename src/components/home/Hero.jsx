import React from 'react';
import MainLogo from '../../assets/MainImage.png';

const Hero = () => {
  return (
    <div className="w-full relative">
      <img src={MainLogo} alt="Hero Image" className="w-full object-contain" />
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.54,
          background:
            'linear-gradient(90deg, #000 0.04%, rgba(44, 42, 42, 0.79) 13.97%, rgba(52, 46, 46, 0.65) 23.64%, rgba(65, 62, 62, 0.54) 36.1%, rgba(77, 77, 77, 0.66) 46.41%, rgba(94, 89, 89, 0.39) 56.08%, rgba(111, 111, 111, 0.00) 66.18%, rgba(136, 132, 132, 0.24) 78.43%, rgba(145, 141, 141, 0.00) 89.44%, rgba(145, 141, 141, 0.00) 99.92%)',
          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        }}
      ></div>
    </div>
  );
};

export default Hero;

import React from 'react';

const Banner = ({children, heading, description}) => {
  return (
    <div className="relative h-64 bg-cover bg-center bg-secondary" style={{ backgroundImage: 'url(/banner.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-2">{heading}</h1>
          <p className="text-lg mb-4">{description}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from 'react';

const Banner = ({children, heading, description}) => {
  return (
    <div className="relative bg-cover bg-center bg-secondaryBlue sm:py-20 py-6">
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <div className="flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-medium mb-2 text-secondaryRed">{heading}</h1>
          <p className="text-lg mb-4">{description}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from 'react';


const Testimonials = ({label, heading, description, author}) => {
  return (
    <div className='testimonials container mx-auto text-center my-32'>
        <h6 className='text-secondaryRed font-bold mb-2'>{label}</h6>
        <h2 className='text-secondary text-4xl font-bold mb-6'>{heading}</h2>
        <p className='w-11/12 sm:w-8/12 mx-auto text-2xl font-light mb-6'>{description}</p>
        <p className='text-secondary text-2xl font-bold mb-16'>- {author}</p>
    </div>
  );
};

export default Testimonials;

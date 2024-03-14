import React from 'react';


const Testimonials = ({label, heading, description}) => {
  return (
    <div className='testimonials container mx-auto text-center my-32'>
        <h6 className='text-secondaryRed font-bold mb-2'>MORE THAN JUST BUSINESS</h6>
        <h2 className='text-secondary text-4xl font-bold mb-6'>OUR CLIENTS SAY IT BEST</h2>
        <p className='w-11/12 sm:w-8/12 mx-auto text-2xl font-light mb-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <p className='text-secondary text-2xl font-bold mb-16'>- Lorem Ipsum</p>
    </div>
  );
};

export default Testimonials;

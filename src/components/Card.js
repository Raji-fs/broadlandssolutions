import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { RiLinkedinLine, RiFacebookLine } from "react-icons/ri";


const Card = ({image, name, role, facebook, email, linkedin}) => {
  return (
    <div className='text-center teamImg'>
        <img src={`/${image}`} alt={name} className="mx-auto mb-8"/>
        <h2 className='text-secondary text-2xl font-bold'>{name}</h2>
        <p className='mt-3 text-lg'>{role}</p>
        <div className='flex gap-4 justify-center items-center mt-8 socialIcons'>
            <a href={facebook} class="facebook" target="_blank"><RiFacebookLine /></a>
            <a href={email} class="email" target="_blank"><MdOutlineEmail /></a>
            <a href={linkedin} class="linkedin" target="_blank"><RiLinkedinLine /></a>
        </div>
    </div>
  );
};

export default Card;

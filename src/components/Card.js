import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { RiLinkedinLine, RiFacebookLine } from "react-icons/ri";


const Card = ({image, name, role, facebook, email, linkedin}) => {
  return (
    <div className='text-center card px-2 lg:px-10'>
        <img src={`/${image}`} alt={name} className="mx-auto mb-8"/>
        <h2 className='text-secondary text-2xl font-bold'>{name}</h2>
        <p className='my-3 text-lg font-medium'>{role}</p>
        <p className='text-gray'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <div className='flex gap-4 justify-center items-center mt-8 socialIcons'>
            <a href={facebook} class="facebook" target="_blank"><RiFacebookLine /></a>
            <a href={email} class="email" target="_blank"><MdOutlineEmail /></a>
            <a href={linkedin} class="linkedin" target="_blank"><RiLinkedinLine /></a>
        </div>
        <button className="bg-secondaryRed hover:scale-110 text-white font-bold my-8 py-2 px-4 rounded transition duration-500">ReadMore</button>
    </div>
  );
};

export default Card;

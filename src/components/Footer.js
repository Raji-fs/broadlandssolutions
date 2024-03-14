import React from 'react';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";


const Footer = () => {
  const menuList = [
    {
        label: 'Home',
        url: '/'
    },
    {
        label: 'About',
        url: 'about'
    },
    {
        label: 'Expertise',
        url: 'expertise'
    },
    {
        label: 'Contract Vehicles',
        url: 'contracvehicles'
    },
    {
        label: 'Careers',
        url: 'careers'
    },
    {
        label: 'Contact Us',
        url: 'contact'
    },
]
  return (
    <footer className="relative bg-secondaryBlue text-white py-4">
        <div className="container mx-auto">
          <div className='grid sm:grid-cols-3 gap-20 items-center sm:py-12 py-6'>
            <div>
              <img src="/logo.png" alt="logo" className='max-w-72 mb-8' />
              <p className='text-sm'>As an SBA 8(a) Certified, SBA EDWOSB, SBA WOSB, we have been providing end to end solutions on ERP, Cloud, Data, Business Intelligence to Federal, Commercial, and Private clients by combining people, process, and technology for over 30+ years.</p>
            </div>
            <div className="grid grid-cols-2 text-lg">
              <div>
                {menuList.slice(0, Math.ceil(menuList.length / 2)).map((item, index) => (
                  <a key={index} href={item.url} className="block hover:text-secondaryRed font-light	mb-1">{item.label}</a>
                ))}
              </div>
              <div>
                {menuList.slice(Math.ceil(menuList.length / 2)).map((item, index) => (
                  <a key={index} href={item.url} className="block hover:text-secondaryRed font-light	mb-1">{item.label}</a>
                ))}
              </div>
            </div>
            <div>
              <h3>Get the latest news, new service notifications, and exclusive insights conveniently in your inbox.</h3>
              <div className='mt-8'>
                <div><input type="email" placeholder='Email Address' className='w-full p-2 rounded'/></div>
                <button className="bg-secondaryRed hover:scale-110 text-white font-bold my-8 py-2 px-4 rounded transition duration-500">Subscribe Now</button>
              </div>
              <div className='social-icons text-secondaryRed text-2xl flex items-center gap-2'>
                <a href='#' className='hover:text-white' ><TiSocialFacebook /></a>
                <a href='#' className='hover:text-white text-xl' ><AiOutlineInstagram /></a>
                <a href='#' className='hover:text-white' ><TiSocialLinkedin /></a>
                <a href='#' className='hover:text-white' ><TiSocialTwitter /></a>
                <a href='#' className='hover:text-white' ><TiSocialYoutube /></a>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-copyright border-t border-[#514f4f] p-2 pt-6'>
            <p className='text-center font-light'>© Copyright 2024 <span className='mx-2.5'>|</span> Broadlands Solutions <span className='mx-2.5'>|</span> All Right Reserved</p>
        </div>
    </footer>
  );
};

export default Footer;

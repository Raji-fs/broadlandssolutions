import React, { useState } from 'react';

const Header = () => {
    const menuList = [
        {
            label: 'About',
            url: 'about',
            subMenu: [
                {
                    label: 'Mission and Vision',
                    url: 'mission',
                },
                {
                    label: 'Leadership',
                    url: 'leadership',
                },
                {
                    label: 'Why work for us',
                    url: 'workforus',
                },
                {
                    label: 'Clients',
                    url: 'clients',
                },
                {
                    label: 'Partners',
                    url: 'partners',
                },
                {
                    label: 'Capabilities & NAIC Codes',
                    url: 'capabilities'
                }
            ]
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
    const [showMenu, setShowMenu] = useState(false)
    const openMenu = () => {
        setShowMenu(true)
    };
    const closeMenu = () => {
        setShowMenu(false)
    };
  return (
    <header className="header shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div>
          <a href="/" className="text-xl font-bold"><img src="/logo.png" alt="logo" className='max-w-72' /></a>
        </div>
        <div className="hidden md:flex space-x-10 text-lg">
            {menuList.map((i,index) => {
                return(
                    <>
                    {i.subMenu ? 
                        <div className="relative group">
                            <a href={`/${i.url}`} className="hover:text-secondary group">{i.label}</a>
                            <div className="z-10 absolute hidden py-2 space-y-1 bg-white text-gray-700 group-hover:block shadow-md border border-solid text-base w-max">
                                {i.subMenu.map((subMenu,idx) => {
                                    return(
                                    <a key={idx} href={`/${subMenu.url}`} className="block hover:text-secondary px-4">{subMenu.label}</a>
                                    )
                                })}
                            </div>
                        </div>
                        :
                        <a key={index} href={`/${i.url}`} className="hover:text-secondary group">{i.label}</a>
                    }
                    </>
                )
            })}
        </div>
        <div className="md:hidden">
          <button onClick={openMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
        <div className={`md:hidden z-10 w-screen h-screen overflow-auto fixed top-0 text-right bg-white px-4 py-6 flex flex-col gap-2 transition-all duration-500 ${showMenu ? 'left-0' : 'left-full'}`}>
            <button onClick={closeMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 ml-auto"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            {menuList.map((i, index) => (
                <>
                    {i.subMenu ?
                        <>
                            <a key={index} href={`/${i.url}`} className="hover:text-secondary block">{i.label}</a>
                            {i.subMenu.map((subMenu, idx) => (
                                <a key={idx} href={`/${subMenu.url}`} className="block hover:text-secondary">{subMenu.label}</a>
                            ))}
                        </>
                        :
                        <a key={index} href={`/${i.url}`} className="hover:text-secondary group block">{i.label}</a>
                    }
                </>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;

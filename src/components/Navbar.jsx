import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

import logo from '../assets/itlabs_logo.png';

const Navbar = () => {
    const Links = [
        { name: "Home", link: "/" },
        { name: "About us", link: "/About" },
        { name: "Products", link: "/Products" },
        { name: "Services", link: "/Services" },
        { name: "Solutions", link: "/Solutions" },
        { name: "Contact Us", link: "/Contactus" },
        { name: "Career", link: "/Career" },
    ];

    const [open, setOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(""); // State to store active link

    const handleLinkClick = (link) => {
        setOpen(false);
        setActiveLink(link); // Set active link when a menu item is clicked
    };

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-20'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-28 px-7 z-20 '>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[inter] text-gray-800'>
                    <img src={logo} alt="logo" className="logo" />
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {Links.map((link) => (
                        <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                            {/* Use NavLink instead of anchor tag */}
                            <NavLink
                                to={link.link}
                                className={`text-gray-800 hover:text-gray-400 duration-500 ${activeLink === link.link ? 'active' : ''}`}
                                onClick={() => handleLinkClick(link.link)} // Call handleLinkClick on click
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;

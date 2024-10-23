import React, { useEffect, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiEnglishInput } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const TopNav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleBodyScroll = () => {
      if (show) {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%'; // Prevent horizontal scroll
      } else {
        document.body.style.overflow = 'scroll';
        document.body.style.position = '';
        document.body.style.width = '';
      }
    };

    handleBodyScroll();

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [show])
  const HandleShow = () => {
    setShow(!show);
  };
  return (
    <div className="max-w-[1680px] xl:mx-auto md:px-[70px] px-[40px] ">
      <nav className="flex items-center overflow-hidden  justify-between gap-4 lg:hidden">
        <div className="flex items-center  relative gap-6">
          <div onClick={HandleShow} className="px- flex items-center ">
            {show ? <FaTimes size={26} className="z-50  left-0 md:left-[70px] " /> : <FaBars className="    " size={26} />}
          </div>

          <div className='text-[32px] z-50 '> {" "}
          <h1>Hotel</h1></div>
        </div>
      
          <div className="flex items-center  ">
            <CgProfile className="text-[#EE685F] z-50 " size={29} />
          </div>
     

        <div
        className={`fixed top-0 lg:hidden left-0 w-full bg-white z-30 transition-all duration-500 ease-in-out ${
          show ? 'opacity-100 h-screen' : 'opacity-0 h-0'
        }`}
        style={{
          transitionProperty: 'opacity, height',
          height: show ? '100vh' : '0',
        }}
        aria-hidden={!show} // Improve accessibility by hiding from screen readers when not open
      >
        <div className="flex flex-col gap-4 text-[12px] justify-center items-center p-4 h-full">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'nav-link hover:text-blue-500 active-link'
                : 'hover:text-blue-500 nav-link'
            }
            onClick={() => setShow(false)} // Close the menu when a link is clicked
          >
            About
          </NavLink>
          <NavLink
            to="/playground"
            className={({ isActive }) =>
              isActive
                ? 'nav-link active-link hover:text-blue-500'
                : 'hover:text-blue-500 nav-link'
            }
            onClick={() => setShow(false)} // Close the menu when a link is clicked
          >
            Playground
          </NavLink>
          <a
            className="hover:text-blue-500 transition-all duration-700 ease-in-out underline"
            href="https://drive.google.com/file/d/1ukJvpmSv2GOcYxwvyibqgDZIKw7929PO/view"
            onClick={() => setShow(false)} // Close the menu when a link is clicked
          >
            Résumé
          </a>
        </div>
      </div>
      </nav>
      <nav className=" hidden lg:flex justify-between items-center">
        <div className="flex items-center gap-[50px]">
          <div className="text-[32px]">
            {" "}
            <h1>Hotel</h1>{" "}
          </div>
          <div>
            <ul className="flex items-center font-thin gap-9 text-[16px]">
              <li>Last Minute Deals</li>
              <li>Blog</li>
              <li>About us</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <BsCurrencyDollar className="text-[#EE685F]" size={24} />
          </div>
          <div>
            <RiEnglishInput className="text-[#EE685F]" size={24} />
          </div>
          <div>
            <CgProfile className="text-[#EE685F]" size={29} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;

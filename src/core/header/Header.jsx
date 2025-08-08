import { Divide as Hamburger } from 'hamburger-react'
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import 'preline/preline';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpe, setIsDropdownOpe] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdow = () => {
    setIsDropdownOpe(!isDropdownOpe);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const location = useLocation();
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const isHome = location.pathname === '/';


  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsDropdownOpe(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>

      <header className={`relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full  text-sm py-3 shadow-md ${!isHome || scrolled || (isHome && isMobile) ? "bg-[#528F62]" : " bg-[#528F62]"} `}>
        <nav className="max-w-[100rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
            <a className="flex-none text-xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80" href="#" aria-label="Brand">
              <Link to='/'>
                <img className='lg:w-40 w-28 md:h-18 h-12' src="/images/home/logo-icaabc.webp" alt="LOGO" />
              </Link>
            </a>
            <div className="sm:hidden">
              <button type="button" className="hs-collapse-toggle relative flex justify-center items-center gap-x-2   focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent "
                id="hs-navbar-example-collapse" aria-expanded={menuOpen ? "true" : "false"} aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example" onClick={() => setMenuOpen(!menuOpen)} >
                {/* <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={20} color={menuOpen ? "#fff" : "#fff"} direction="right" /> */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
                  {!menuOpen ? (
                    <svg viewBox="0 0 100 80" width="30" height="30" className="text-white fill-current">
                      <rect width="100" height="8" rx="5"></rect>
                      <rect y="30" width="100" height="8" rx="5"></rect>
                      <rect y="60" width="100" height="8" rx="5"></rect>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="30" height="30" className="text-white fill-current">
                      <path d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7A1 1 0 105.7 7.11L10.59 12l-4.89 4.89a1 1 0 101.41 1.41L12 13.41l4.89 4.89a1 1 0 001.41-1.41L13.41 12l4.89-4.89a1 1 0 000-1.4z" />
                    </svg>
                  )}
                </button>
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
          </div>
          <div id="hs-navbar-example" ref={dropdownRef} className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-example-collapse"   >
            <div className="flex flex-col gap-8 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <a to='/' onClick={() => setIsDropdownOpen(false)} className=" text-white focus:outline-hidden text-base" href="/" aria-current="page">
                Home
              </a>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--adaptive:adaptive]">
                {/* <button id="hs-navbar-example-dropdown" type="button" onClick={toggleDropdown} className={`hs-dropdown-toggle flex items-center w-full text-white text-base gap-1 cursor-pointer  ${isDropdownOpen ? 'text-blue-400' : ''}`} aria-haspopup="menu" aria-expanded={isDropdownOpen} aria-label="Mega Menu"  >
                  About Us
                  <i className={`fi fi-sr-angle-circle-down transform transition-transform duration-200  text-xl ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} ></i>
                </button> */}
                <button
                  id="hs-navbar-example-dropdown"
                  type="button"
                  onClick={toggleDropdown}
                  className={`hs-dropdown-toggle flex items-center w-full text-white text-base gap-1 cursor-pointer transition-all duration-300 ${isDropdownOpen ? 'text-blue-400' : ''}`}
                  aria-haspopup="menu"
                  aria-expanded={isDropdownOpen}
                  aria-label="Mega Menu"
                >
                  About Us
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className="hs-dropdown-menu border border-white sm:mt-0 mt-5 transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-56 z-10   sm:shadow-md rounded-lg p-1 space-y-1 bg-white  before:absolute top-full  before:-top-5 before:start-0 before:w-full before:h-5 hidden"
                  role="menu" aria-orientation="vertical" aria-labelledby="hs-navbar-example-dropdown" >
                  <a to='/about' onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black  font-medium" href="/about">
                    About the Conference
                  </a>
                  <a to='/scope' onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black font-medium" href="/scope">
                    Scope of the Conference
                  </a>
                  <a to='/editorial' onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black  font-medium " href="/editorial">
                    Editorial Board
                  </a>
                </div>
              </div>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--adaptive:adaptive]">
                <button id="hs-navbar-example-dropdown" type="button" onClick={toggleDropdow} className={`hs-dropdown-toggle flex items-center w-full text-white text-base gap-1 cursor-pointer  ${isDropdownOpe ? 'text-blue-400' : ''}`} aria-haspopup="menu" aria-expanded={isDropdownOpe} aria-label="Mega Menu"   >
                  Author Desk's
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpe ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>                </button>
                <div className="hs-dropdown-menu  border border-white sm:mt-0 mt-5  transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-56 z-10   sm:shadow-md rounded-lg p-1 space-y-1 bg-white before:absolute top-full  before:-top-5 before:start-0 before:w-full before:h-5 hidden"
                  role="menu" aria-orientation="vertical" aria-labelledby="hs-navbar-example-dropdown" >
                  <a to='/conference-tracks' onClick={() => setIsDropdownOpe(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black   font-medium" href="/conference-tracks">
                    Conference Tracks
                  </a>
                  <a to='/dates' onClick={() => setIsDropdownOpe(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black  font-medium  " href="/dates">
                    Key Dates
                  </a>
                  <a to='/paper-submission' onClick={() => setIsDropdownOpe(false)} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black  font-medium" href="/paper-submission">
                    Paper Submission
                  </a>
                </div>
              </div>
              <a className="text-white text-base sm:pb-0 pb-5" href="/contact">
                Contact Us
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

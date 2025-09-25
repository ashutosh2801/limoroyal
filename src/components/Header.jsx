import React, { useState } from 'react'
import { PhoneIcon, Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import logo from "../assets/limo-royale.png";
import { useLocation } from "react-router-dom";
import FloatingActions from '../FloatingActions';

const Header = () => {
    const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

    const toggleServicesDropdown = () => {
        setIsServicesDropdownOpen(prev => !prev);
    };

    const location = useLocation();
    const currentPath = location.pathname;

    const isActive = (path) => currentPath === path;
  return (
    <div>
        <nav className='relative webFont'>
            <div className='absolute mt-3 w-full z-50'>
                <div className='border-b webBorderColor pb-2'>
                    <div className='container mx-auto px-2'>
                        <div className='flex flex-row items-center'>
                            <div className='w-1/2 lg:w-1/4'>
                                <a href='/'><img src={logo} className='w-full lg:w-50' alt='Luxury Limo Service for Memorable Rides - Limo Royale' /></a>
                            </div>
                            <div className='w-3/4'>
                                <div className='hidden xl:flex justify-end space-x-3'>
                                    <a href="tel:4167255466;" className='text-white flex items-center'> <PhoneIcon className="h-4 w-4 text-white mr-2" /> 416-725-LIMO (416-725-5466)</a>
                                    <a href="tel:18888705466;" className='text-white flex items-center'> <PhoneIcon className="h-4 w-4 text-white mr-2" /> Toll-free: 1 (888) 870-LIMO (5466)</a>
                                </div>
                            </div>
                            <div>
                                <div className='xl:hidden relative z-70'>
                                    <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                                        {isMobileNavOpen ? (
                                        <XMarkIcon className='h-8 w-8 text-white' />
                                        ) : (
                                        <Bars3Icon className='h-8 w-8 text-white' />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile main menu */}
                <div>
                    <div className='relative block xl:hidden'>
                        <div className={`fixed xl:relative top-0 left-0 h-full w-75 xl:w-full bg-white xl:bg-inherit transform transition-transform duration-300 z-60 ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full xl:translate-x-0'}`}>
                            <div className='flex flex-col xl:items-center xl:flex-row space-y-2 xl:space-y-0 xl:space-x-8 text-left xl:text-center text-white uppercase py-10 xl:py-0'>
                                <a href='/' className='link border-b border-yellow-200 hover:border-b active' title='Luxury Limo & Airport Chauffeur Service'>Home</a>
                                <div className='relative group'>
                                    <div
                                    onClick={() => {
                                        if (window.innerWidth < 1100) toggleServicesDropdown();
                                    }}
                                    className={`cursor-pointer flex items-center link border-b ${isServicesDropdownOpen ? '' : 'border-transparent'} `}>
                                        Services <ChevronDownIcon className='h-4 w-4 ml-2 transition-transform duration-200' />
                                    </div>
                                    <div className={`absolute left-0 w-75 bg-white text-left text-black rounded shadow-lg z-50 transition-all duration-200 uppercase
                                    ${isServicesDropdownOpen || window.innerWidth >= 1100 ? 'opacity-100 visible' : 'opacity-0 invisible'} xl:group-hover:opacity-100 xl:group-hover:visible`}>
                                        <a href='/corporate-limo-service' className='block px-6 py-3 link-service' title='Corporate Limo Service Toronto'>Corporate Limo Service</a>
                                        <a href='/executive-car-hire' className='block px-6 py-3 link-service' title='Executive Car Hire Toronto'>Executive Car Hire</a>
                                        <a href='/casino-limo-service' className='block px-6 py-3 link-service' title='Casino Limo Service Toronto'>Casino Limo Service</a>
                                        <a href='/airport-transfers' className='block px-6 py-3 link-service' title='Airport Transfers Toronto'>Airport Transfers</a>
                                        <a href='/wedding-cars' className='block px-6 py-3 link-service' title='Wedding Cars Toronto'>Wedding Cars</a>
                                        <a href='/ladies-night-out-limo-service' className='block px-6 py-3 link-service' title='Ladies Night Out Limo Service Toronto'>Ladies Night Out Limo Service</a>
                                        <a href='/luxury-chauffeuring-services-to-londons' className='block px-6 py-3 link-service' title='Events'>Events</a>
                                        <a href='/airport-meet-and-greet-services' className='block px-6 py-3 link-service' title='Airport Meet and Greet Services'>Airport Meet and Greet Services</a>
                                        <a href='/promotions' className='block px-6 py-3 link-service' title='Promotions'>Promotions</a>
                                        <a href='/birthdays-bachelor-and-bachelorette-limo-service' className='block px-6 py-3 link-service' title='Birthdays, Bachelor, & Bachelorette Limo Service'>Birthdays, Bachelor, & Bachelorette Limo Service</a>
                                        <a href='/long-distance-limo-service' className='block px-6 py-3 link-service' title='Long Distance Limo Service'>Long Distance Limo Service</a>
                                        <a href='/luxury-chauffeuring-services' className='block px-6 py-3 link-service' title='Luxury Chauffeuring Services'>Luxury Chauffeuring Services</a>
                                    </div>
                                </div>
                                <a href='/about' className='link border-b border-transparent hover:border-b hover:border-yellow-200' title='About Limo Royale'>About</a>
                                <a href='/luxury-limousine' className='link border-b border-transparent hover:border-b hover:border-yellow-200' title='Luxury Limousine'>Luxury Limousine</a>
                                <a href='/bus-charter' className='link border-b border-transparent hover:border-b hover:border-yellow-200' title='Bus Charter'>Bus Charter</a>
                                <a href='/areas-served' className='link border-b border-transparent hover:border-b hover:border-yellow-200' title='Areas Served'>Areas Served</a>
                                <a href='/fleet' className='link border-b border-transparent hover:border-b hover:border-yellow-200' title='Fleet'>Fleet</a>
                                <a href='/contact' className='link border-b border-transparent hover:border-b hover:border-yellow-200' title='Contact Limo Royale'>Contact</a>
                                <a href='/online-reservations' className='book-now-link px-5 py-1' title='Book Now'>Book Now</a>
                                <a href='/login' className='book-now-link px-5 py-1' title='Login'>Login</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='container mx-auto px-2'>
                        <div className='flex items-center py-4'>
                            <div className='w-[90%]'>
                                {/* main menu */}
                                <div className='relative hidden xl:block'>
                                    <div className={`fixed xl:relative top-0 left-0 h-full w-75 xl:w-full bg-white xl:bg-inherit transform transition-transform duration-300 z-30 ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full xl:translate-x-0'}`}>
                                        <div className='flex flex-col xl:items-center md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-left xl:text-center text-white uppercase py-10 xl:py-0'>
                                            <a href='/' className={`link border-b ${isActive("/") ? "active" : "border-transparent"} hover:border-yellow-200`} title='Luxury Limo & Airport Chauffeur Service'>Home</a>
                                            <div className='relative group'>
                                                <div className='cursor-pointer flex items-center link border-b border-transparent hover:border-b hover:border-yellow-200 uppercase'>
                                                    Services <ChevronDownIcon className='h-4 w-4 ml-2 transition-transform duration-200' />
                                                </div>
                                                <div className='absolute left-0 w-120 bg-white text-left text-black rounded shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 uppercase'>
                                                    <a href='/corporate-limo-service' className={`block px-6 py-3 link-service ${isActive("/corporate-limo-service") ? "service-active" : "border-transparent"}`} title='Corporate Limo Service Toronto'>Corporate Limo Service</a>
                                                    
                                                    <a href='/executive-car-hire' className={`block px-6 py-3 link-service ${isActive("/executive-car-hire") ? "service-active" : "border-transparent"}`} title='Executive Car Hire Toronto'>Executive Car Hire</a>

                                                    <a href='/casino-limo-service' className={`block px-6 py-3 link-service ${isActive("/casino-limo-service") ? "service-active" : "border-transparent"}`} title='Casino Limo Service Toronto'>Casino Limo Service</a>

                                                    <a href='/airport-transfers' className={`block px-6 py-3 link-service ${isActive("/airport-transfers") ? "service-active" : "border-transparent"}`} title='Airport Transfers Toronto'>Airport Transfers</a>

                                                    <a href='/wedding-cars' className={`block px-6 py-3 link-service ${isActive("/wedding-cars") ? "service-active" : "border-transparent"}`} title='Wedding Cars Toronto'>Wedding Cars</a>

                                                    <a href='/ladies-night-out-limo-service' className={`block px-6 py-3 link-service ${isActive("/ladies-night-out-limo-service") ? "service-active" : "border-transparent"}`} title='Ladies Night Out Limo Service Toronto'>Ladies Night Out Limo Service</a>

                                                    <a href='/luxury-chauffeuring-services-to-londons' className={`block px-6 py-3 link-service ${isActive("/luxury-chauffeuring-services-to-londons") ? "service-active" : "border-transparent"}`} title='Events'>Events</a>

                                                    <a href='/airport-meet-and-greet-services' className={`block px-6 py-3 link-service ${isActive("/airport-meet-and-greet-services") ? "service-active" : "border-transparent"}`} title='Airport Meet and Greet Services'>Airport Meet and Greet Services</a>

                                                    <a href='/promotions' className={`block px-6 py-3 link-service ${isActive("/promotions") ? "service-active" : "border-transparent"}`} title='Promotions'>Promotions</a>

                                                    <a href='/birthdays-bachelor-and-bachelorette-limo-service' className={`block px-6 py-3 link-service ${isActive("/birthdays-bachelor-and-bachelorette-limo-service") ? "service-active" : "border-transparent"}`} title='Birthdays, Bachelor, & Bachelorette Limo Service'>Birthdays, Bachelor, & Bachelorette Limo Service</a>

                                                    <a href='/long-distance-limo-service' className={`block px-6 py-3 link-service ${isActive("/long-distance-limo-service") ? "service-active" : "border-transparent"}`} title='Long Distance Limo Service'>Long Distance Limo Service</a>

                                                    <a href='/luxury-chauffeuring-services' className={`block px-6 py-3 link-service ${isActive("/luxury-chauffeuring-services") ? "service-active" : "border-transparent"}`} title='Luxury Chauffeuring Services'>Luxury Chauffeuring Services</a>
                                                </div>
                                            </div>
                                            <a href='/about' className={`link border-b ${isActive("/about") ? "active" : "border-transparent"} hover:border-yellow-200`} title='About Limo Royale'>About</a>

                                            <a href='/luxury-limousine' className={`link border-b ${isActive("/luxury-limousine") ? "active" : "border-transparent"} hover:border-yellow-200`} title='Luxury Limousine'>Luxury Limousine</a>

                                            <a href='/bus-charter' className={`link border-b ${isActive("/bus-charter") ? "active" : "border-transparent"} hover:border-yellow-200`} title='Bus Charter'>Bus Charter</a>

                                            <a href='/areas-served' className={`link border-b ${isActive("/areas-served") ? "active" : "border-transparent"} hover:border-yellow-200`} title='Areas Served'>Areas Served</a>

                                            <a href='/fleet' className={`link border-b ${isActive("/fleet") ? "active" : "border-transparent"} hover:border-yellow-200`} title='Fleet'>Fleet</a>

                                            <a href='/contact' className={`link border-b ${isActive("/contact") ? "active" : "border-transparent"} hover:border-yellow-200`} title='Contact Limo Royale'>Contact</a>

                                            <a href='/online-reservations' className='book-now-link px-5 py-1' title='Book Now'>Book Now</a>

                                            <a href='/login' className='book-now-link px-5 py-1' title='Login'>Login</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[10%]'>
                                <div className='hidden xl:flex justify-end'>
                                    {/* desktop sidebar Menu */}
                                    <button
                                    className='text-white cursor-pointer'
                                    onClick={() => setIsDesktopMenuOpen(true)}
                                    >
                                    <Bars3Icon className='h-8 w-8' />
                                    </button>
                                    <div className={`fixed top-0 right-0 h-full overflow-y-scroll w-140 bg-black shadow-lg transform transition-transform duration-300 z-50 ${
                                        isDesktopMenuOpen ? 'translate-x-0' : 'translate-x-full'
                                    }`}
                                    >
                                    <div className='flex justify-end items-center p-4'>
                                        <button onClick={() => setIsDesktopMenuOpen(false)}>
                                        <XMarkIcon className='h-6 w-6 text-white cursor-pointer' />
                                        </button>
                                    </div>
                                    <div className='flex flex-col space-y-3 px-15 py-8 text-white'>
                                        <img src={logo} className='w-full mb-10' alt='Luxury Limo Service for Memorable Rides - Limo Royale' />
                                        <b className='text-2xl'>Services</b>
                                        <a href='/corporate-limo-service' className='text-lg text-gray-300 hover:text-white' title='Corporate Limo Service Toronto'>Corporate Limo Service</a>
                                        <a href='/executive-car-hire' className='text-lg text-gray-300 hover:text-white' title='Executive Car Hire Toronto'>Executive Car Hire</a>
                                        <a href='/casino-limo-service' className='text-lg text-gray-300 hover:text-white' title='Casino Limo Service Toronto'>Casino Limo Service</a>
                                        <a href='/airport-transfers' className='text-lg text-gray-300 hover:text-white' title='Airport Transfers Toronto'>Airport Transfers</a>
                                        <a href='/wedding-cars' className='text-lg text-gray-300 hover:text-white' title='Wedding Cars Toronto'>Wedding Cars</a>
                                        <a href='/luxury-chauffeuring-services-to-londons' className='text-lg text-gray-300 hover:text-white' title='Events'>Events</a>
                                        <a href='/promotions' className='text-lg text-gray-300 hover:text-white' title='Promotions'>Promotions</a>
                                        <div className='mt-4 space-y-5 text-lg'>
                                        <a href="tel:4167255466;" className='flex items-center' title='Limo Royale Hotline'>
                                            <div className='webBG rounded-full p-2 mr-2'><PhoneIcon className="h-4 w-4" /></div> 416-725-LIMO (416-725-5466)
                                        </a>
                                        <a className='flex items-center' title='Limo Royale Hotline'>
                                            <div className='webBG rounded-full p-2 mr-2'><PhoneIcon className="h-4 w-4" /></div> Toll-free: 1-888-870-LIMO
                                        </a>
                                        <a href='/online-reservations' className='inline-block book-now-link rounded-md px-7 py-2 mt-2' title='Book Now'>Book Now</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            {/* Overlay for both Mobile and Desktop Menus */}
                            {(isMobileNavOpen || isDesktopMenuOpen) && (
                            <div
                                onClick={() => {
                                setIsMobileNavOpen(false)
                                setIsDesktopMenuOpen(false)
                                }}
                                className="fixed inset-0 bg-black opacity-70 z-40"
                            ></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <FloatingActions />
    </div>
  )
}

export default Header
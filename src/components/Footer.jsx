import React from 'react'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaYoutube, FaLinkedin, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='border-t lg:border-0 webBorderColor'>
        <div className='container mx-auto px-2'>
            <div className='grid md:grid-cols-2 lg:grid-cols-5 lg:space-x-3 space-y-5 lg:space-y-0 pt-15 pb-10'>
                <div data-aos="fade-up">
                    <h6 className='text-white text-xl font-semibold mb-5'>Limo</h6>
                    <a href='/' className='webFontColor w-full block mb-3'>Home</a>
                    <a href='/about' className='webFontColor w-full block mb-3'>About</a>
                    <a href='/bus-charter' className='webFontColor w-full block mb-3'>Bus Charter</a>
                    <a href='/about' className='webFontColor w-full block mb-3'>Faqs</a>
                    <a href='/online-reservations' className='webFontColor w-full block mb-3'>Book Now</a>
                    <a href='/about' className='webFontColor w-full block mb-3'>Blog</a>
                    <a href='/contact' className='webFontColor w-full block mb-3'>Contact Us</a>
                </div>
                <div data-aos="fade-up">
                    <h6 className='text-white text-xl font-semibold mb-5'>Services</h6>
                    <a href='/corporate-limo-service' className='webFontColor w-full block mb-3'>Corporate Limo Service</a>
                    <a href='/executive-car-hire' className='webFontColor w-full block mb-3'>Executive Car Hire</a>
                    <a href='/casino-limo-service' className='webFontColor w-full block mb-3'>Casino Limo Service</a>
                    <a href='/airport-transfers' className='webFontColor w-full block mb-3'>Airport Transfers</a>
                    <a href='/wedding-cars' className='webFontColor w-full block mb-3'>Wedding Cars</a>
                    <a href='/luxury-chauffeuring-services-to-londons' className='webFontColor w-full block mb-3'>Events</a>
                    <a href='/promotions' className='webFontColor w-full block mb-3'>Promotions</a>
                </div>
                <div data-aos="fade-up">
                    <h6 className='text-white text-xl font-semibold mb-5'>Our Tours</h6>
                    <a href='/areas-served' className='webFontColor w-full block mb-3'>Niagara Falls Tours</a>
                    <a href='/areas-served' className='webFontColor w-full block mb-3'>1000 Islands Tours</a>
                    <a href='/areas-served' className='webFontColor w-full block mb-3'>Toronto City Tours</a>
                    <a href='/areas-served' className='webFontColor w-full block mb-3'>Ottawa Tours</a>
                    <a href='/areas-served' className='webFontColor w-full block mb-3'>Montreal Tours</a>
                    <a href='/areas-served' className='webFontColor w-full block mb-3'>Sault Ste. Marie Tours</a>
                    <a href='/areas-served' className='webFontColor w-full block mb-3'>Blue Mountains Tours</a>
                </div>
                <div data-aos="fade-up">
                    <h6 className='text-white text-xl font-semibold mb-5'>Our Fleet</h6>
                    <a href='/fleet' className='webFontColor w-full block mb-3'>Luxury Sedan</a>
                    <a href='/fleet' className='webFontColor w-full block mb-3'>Luxury SUV</a>
                    <a href='/fleet' className='webFontColor w-full block mb-3'>Luxury Van</a>
                    <a href='/fleet' className='webFontColor w-full block mb-3'>Mini Coach (24 Passengers)</a>
                    <a href='/fleet' className='webFontColor w-full block mb-3'>Mini Coach (35 Passengers)</a>
                    <a href='/fleet' className='webFontColor w-full block mb-3'>Bus (55 Passengers)</a>
                </div>
                <div data-aos="fade-up">
                    <h6 className='text-white text-xl font-semibold mb-5'>Contact Us</h6>
                    <div className='mt-5 flex items-start flex-wrap'>
                        <div className='bg-white rounded-full px-3 py-3 mr-5 inline-block'><PhoneIcon className="h-4 w-4 webColor" /></div>
                        <a href='tel:4167255466' className='webFontColor'>416-725-LIMO <br></br> (416-725-5466)</a>
                        <a href='tel:18888705466' className='webFontColor ml-15 mt-5'>Toll-Free: <br></br> 1 (888) 870-LIMO (5466)</a>
                    </div>
                    <div className='mt-8 flex items-start flex-wrap'>
                        <div className='bg-white rounded-full px-3 py-3 mr-5 inline-block'><EnvelopeIcon className="h-4 w-4 webColor" /></div>
                        <a href='mailto:book@limo-royale.com;' className='webFontColor'>Email: <br></br> book@limo-royale.com</a>
                    </div>
                    <div>
                        <h6 className='text-white text-xl font-semibold mb-2 mt-7'>Follow Us</h6>
                        <div>
                            <a href="https://web.facebook.com/LimoRoyalelux" target='_blank' className="p-2 text-lg mr-1 rounded-lg text-white social-icon inline-block">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.instagram.com/limoroyale/" target='_blank' className="p-2 text-lg mr-1 rounded-lg text-white social-icon inline-block">
                                <FaInstagram />
                            </a>
                            <a href="https://www.tiktok.com/@limoroyale" target='_blank' className="p-2 text-lg mr-1 rounded-lg text-white social-icon inline-block">
                                <FaTiktok />
                            </a>
                            <a href="https://www.youtube.com/@LimoRoyalelux/shorts" target='_blank' className="p-2 text-lg mr-1 rounded-lg text-white social-icon inline-block">
                                <FaYoutube />
                            </a>
                            <a href="https://www.linkedin.com/company/limo-royale" target='_blank' className="p-2 text-lg mr-1 rounded-lg text-white social-icon inline-block">
                                <FaLinkedin />
                            </a>
                            <a href="https://x.com/limoroyalelux" target='_blank' className="p-2 text-lg mr-1 rounded-lg text-white social-icon inline-block">
                                <FaTwitter />
                            </a>
                            <a href="https://www.pinterest.com/limoroyale/" target='_blank' className="p-2 text-lg mr-1 rounded-lg text-white social-icon inline-block">
                                <FaPinterest />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pb-5 border-t webBorderColor'>
                <p className='webFontColor pt-5'>© 2025 Limo Royal, All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
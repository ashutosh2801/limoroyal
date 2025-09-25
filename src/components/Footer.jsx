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
                    <a href='/' className='webFontColor w-full block mb-3' title='Luxury Limo & Airport Chauffeur Service'>Home</a>
                    <a href='/about' className='webFontColor w-full block mb-3' title='About Limo Royale'>About</a>
                    <a href='/bus-charter' className='webFontColor w-full block mb-3' title='Bus Charter'>Bus Charter</a>
                    <a href='/about' className='webFontColor w-full block mb-3' title='Faqs'>Faqs</a>
                    <a href='/online-reservations' className='webFontColor w-full block mb-3' title='Book Now'>Book Now</a>
                    <a href='/about' className='webFontColor w-full block mb-3' title='Blog'>Blog</a>
                    <a href='/contact' className='webFontColor w-full block mb-3' title='Contact Limo Royale'>Contact Us</a>
                    <a href='/sitemap' className='webFontColor w-full block mb-3' title='Sitemap'>Sitemap</a>
                </div>
                <div data-aos="fade-up">
                    <h6 className='text-white text-xl font-semibold mb-5'>Services</h6>
                    <a href='/corporate-limo-service' className='webFontColor w-full block mb-3' title='Corporate Limo Service'>Corporate Limo Service</a>
                    <a href='/executive-car-hire' className='webFontColor w-full block mb-3' title='Executive Car Hire'>Executive Car Hire</a>
                    <a href='/casino-limo-service' className='webFontColor w-full block mb-3' title='Casino Limo Service'>Casino Limo Service</a>
                    <a href='/airport-transfers' className='webFontColor w-full block mb-3' title='Airport Transfers'>Airport Transfers</a>
                    <a href='/wedding-cars' className='webFontColor w-full block mb-3' title='Wedding Cars'>Wedding Cars</a>
                    <a href='/luxury-chauffeuring-services-to-londons' className='webFontColor w-full block mb-3' title='Events'>Events</a>
                    <a href='/promotions' className='webFontColor w-full block mb-3' title='Promotions'>Promotions</a>
                </div>
                <div data-aos="fade-up">
                    <h6 className='text-white text-xl font-semibold mb-5'>Our Tours</h6>
                    <a href='/areas-served' className='webFontColor w-full block mb-3' title='Niagara Falls Tours'>Niagara Falls Tours</a>
                    <a href='/areas-served' className='webFontColor w-full block mb-3' title='1000 Islands Tours'>1000 Islands Tours</a>
                    <a href='/areas-served' className='webFontColor w-full block mb-3' title='Toronto City Tours'>Toronto City Tours</a>
                    <a href='/areas-served' className='webFontColor w-full block mb-3' title='Ottawa Tours'>Ottawa Tours</a>
                    <a href='/areas-served' className='webFontColor w-full block mb-3' title='Montreal Tours'>Montreal Tours</a>
                    <a href='/areas-served' className='webFontColor w-full block mb-3' title='Sault Ste. Marie Tours'>Sault Ste. Marie Tours</a>
                    <a href='/areas-served' className='webFontColor w-full block mb-3' title='Blue Mountains Tours'>Blue Mountains Tours</a>
                </div>
                <div data-aos="fade-up">
                    <h6 className='text-white text-xl font-semibold mb-5'>Our Fleet</h6>
                    <a href='/fleet' className='webFontColor w-full block mb-3' title='Luxury Sedan'>Luxury Sedan</a>
                    <a href='/fleet' className='webFontColor w-full block mb-3' title='Luxury SUV'>Luxury SUV</a>
                    <a href='/fleet' className='webFontColor w-full block mb-3' title='Luxury Van'>Luxury Van</a>
                    <a href='/fleet' className='webFontColor w-full block mb-3' title='Mini Coach (24 Passengers)'>Mini Coach (24 Passengers)</a>
                    <a href='/fleet' className='webFontColor w-full block mb-3' title='Mini Coach (35 Passengers)'>Mini Coach (35 Passengers)</a>
                    <a href='/fleet' className='webFontColor w-full block mb-3' title='Bus (55 Passengers)'>Bus (55 Passengers)</a>
                </div>
                <div data-aos="fade-up">
                    <h6 className='text-white text-xl font-semibold mb-5'>Contact Us</h6>
                    <div className='mt-5 flex items-start flex-wrap'>
                        <div className='bg-white rounded-full px-3 py-3 mr-5 inline-block'><PhoneIcon className="h-4 w-4 webColor" /></div>
                        <a href='tel:4167255466' className='webFontColor' title='Limo Hotline'>416-725-LIMO <br></br> (416-725-5466)</a>
                        <a href='tel:18888705466' className='webFontColor ml-15 mt-5' title='Limo Royale Toll Free'>Toll-Free: <br></br> 1 (888) 870-LIMO (5466)</a>
                    </div>
                    <div className='mt-8 flex items-start flex-wrap'>
                        <div className='bg-white rounded-full px-3 py-3 mr-5 inline-block'><EnvelopeIcon className="h-4 w-4 webColor" /></div>
                        <a href='mailto:book@limo-royale.com;' className='webFontColor' title='Limo Royale Email'>Email: <br></br> book@limo-royale.com</a>
                    </div>
                    <div>
                        <h6 className='text-white text-xl font-semibold mb-2 mt-7'>Follow Us</h6>
                        <div>
                            <a href="https://web.facebook.com/LimoRoyalelux" target='_blank' title='Limo Royale Facebook' className="p-2 text-lg mr-1 rounded-lg text-white social-icon inline-block">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.instagram.com/limoroyale/" target='_blank' title='Limo Royale Instagram' className="p-2 text-lg mr-1 rounded-lg text-white social-icon inline-block">
                                <FaInstagram />
                            </a>
                            <a href="https://www.tiktok.com/@limoroyale" target='_blank' title='Limo Royale Tiktok' className="p-2 text-lg mr-1 rounded-lg text-white social-icon inline-block">
                                <FaTiktok />
                            </a>
                            <a href="https://www.youtube.com/@LimoRoyalelux/shorts" target='_blank' title='Limo Royale Youtube' className="p-2 text-lg mr-1 rounded-lg text-white social-icon inline-block">
                                <FaYoutube />
                            </a>
                            <a href="https://www.linkedin.com/company/limo-royale" target='_blank' title='Limo Royale Linkedin' className="p-2 text-lg mr-1 rounded-lg text-white social-icon inline-block">
                                <FaLinkedin />
                            </a>
                            <a href="https://x.com/limoroyalelux" target='_blank' title='Limo Royale Twitter' className="p-2 text-lg mr-1 rounded-lg text-white social-icon inline-block">
                                <FaTwitter />
                            </a>
                            <a href="https://www.pinterest.com/limoroyale/" target='_blank' title='Limo Royale Pinterest' className="p-2 text-lg mr-1 rounded-lg text-white social-icon inline-block">
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
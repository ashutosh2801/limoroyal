import React from 'react'
import ServiceSidePanel from './components/ServiceSidePanel'
import EventBanner from '../src/assets/services/events-service.jpg'
import CustomerExperiences from './components/CustomerExperiences'
import ServiceFaq from './components/ServiceFaq'
import { Helmet } from 'react-helmet'

const Events = () => {
  return (
    <div>
        <Helmet>
            <title>Luxury Group Chauffeuring & Event Transportation | Limo Royale</title>
            <meta name="description" content="Book Limo Royale for luxury group and event transportation. Corporate, weddings, VIPs, and social events—travel in style and comfort. Reserve now!" />
            <meta name="keywords" content="Group Transportation Service in Toronto" />
            <meta name="robots" content="index, follow"/>
            <link rel="canonical" href="https://limoroyal.com/luxury-chauffeuring-services-to-londons" />
        </Helmet>
        <div>
            <div className='relative'>
                <div className='page-bg object-cover absolute h-[450px] lg:h-[550px] inset-0 opacity-50'></div>
                <div className='relative z-10 pt-50 lg:pt-80 pb-30'>
                    <div className='container mx-auto px-2'>
                        <div>
                            <ul className='breadcrumb uppercase webColor text-sm flex'>
                            <li><a href='/'>Home</a></li>
                            <li>Events</li>
                            </ul>
                        </div>
                        <h2 className='text-white text-2xl lg:text-6xl leading-snug my-5 font-medium'>Events</h2>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='container mx-auto px-2'>
                <div className='flex flex-col-reverse md:flex-row md:space-x-8 justify-between pt-15 pb-5 md:pb-15 space-y-6 lg:space-y-0'>
                    <ServiceSidePanel />
                    <div className='w-full md:w-3/5 lg:w-2/3'>
                        <div data-aos="fade-up">
                            <img src={EventBanner} className='w-full h-full' alt='Event and Group Charter Services' />
                        </div>
                        <div className='border-b webBorderColor pb-10 mb-10' data-aos="fade-up">
                            <h1 className='text-white text-2xl lg:text-4xl mt-10 mb-5 lg:mb-10'>Seamless and Stylish Transportation for Every Occasion</h1>
                            <p className='webFontColor text-base leading-relaxed'>
                                At <b>Limo Royale</b>, we understand that organizing transportation for large groups requires precision, comfort, and elegance. Whether you’re planning a corporate retreat, a wedding, or a group event, our <b>Event and Group Charter Services</b> are designed to provide a luxurious and hassle-free experience. With our expansive fleet of premium vehicles and professional <b>Royale Chauffeurs</b>, your group will travel together in style and comfort, ensuring punctual arrivals and smooth coordination.
                            </p>
                            <b className='text-white w-full block mb-5 mt-5'>Why Choose Limo Royale for Group Transportation?</b>
                            <ul className='list-disc pl-5 space-y-4 webFontColor text-base'>
                                <li><b>Luxury Fleet: </b>From sleek limousines to spacious SUVs and luxury buses, our fleet can accommodate groups of any size. Every vehicle is equipped with plush seating, climate control, and entertainment options, ensuring that your group travels in comfort and style.</li>
                                <li><b>Professional Chauffeurs: </b>Our experienced <b>Royale Chauffeurs</b> are experts in providing safe, efficient, and discreet group transportation. With <b>15-20 years of experience</b>, they ensure that your group arrives on time, every time, while enjoying a smooth and elegant ride.</li>
                                <li><b>Customized Itineraries: </b>We offer fully customizable itineraries tailored to your event or group needs. Whether you need multiple stops, shuttle services, or a full day of transportation, <b>Limo Royale</b> can create the perfect travel plan to match your schedule.</li>
                            </ul>
                            <b className='text-white w-full block mb-5 mt-5'>Types of Events We Serve:</b>
                            <ul className='list-disc pl-5 space-y-4 webFontColor text-base'>
                                <li><b>Corporate Events: </b>From executive retreats to team-building exercises, we ensure your team travels comfortably and arrives at corporate functions on time, ready to focus on the day ahead. Impress your clients and business partners with elegant transportation that reflects your company’s commitment to excellence.</li>

                                <li><b>Weddings and Celebrations: </b>Make your big day even more special with <b>Limo Royale’s wedding transportation services</b>. We can transport bridal parties, wedding guests, and VIPs, ensuring that everyone arrives in style. Our vehicles are perfect for group travel, and our chauffeurs ensure that every ride is smooth and comfortable.</li>

                                <li><b>Sports and Entertainment Events: </b>Whether you’re attending a major sporting event or a concert, our group charter service allows your party to travel together with ease. Avoid the stress of parking and enjoy a luxurious ride to and from the venue.</li>

                                <li><b>Family Gatherings and Social Events: </b>For family reunions, birthdays, and other social events, <b>Limo Royale</b> provides a seamless transportation experience, ensuring that your family and friends can enjoy each other’s company from start to finish.</li>
                            </ul>
                            <b className='text-white w-full block mb-5 mt-5'>Tailored Group Packages</b>
                            <p className='webFontColor text-base mt-5'>We offer flexible group charter packages that cater to your specific needs:</p><br></br><br></br>
                            <ul className='list-disc pl-5 space-y-4 webFontColor text-base'>
                                <li><b>Corporate Charter Package: </b>Designed for business groups, this package offers luxury transportation for executive meetings, conferences, and events. With spacious interiors and amenities like WiFi, you can stay connected and productive on the go.</li>

                                <li><b>Wedding Party Package: </b>Our wedding party package offers elegant transportation for the entire wedding party. From the bridal party to your guests, we ensure everyone is taken care of with style and comfort.</li>

                                <li><b>VIP Group Package: </b>For exclusive events, our VIP group package offers the ultimate in luxury transportation, providing privacy, comfort, and elegance for high-profile gatherings.</li>
                            </ul>
                            <b className='text-white w-full block mb-5 mt-5'>Why Limo Royale for Group Charters?</b>
                            <ul className='list-disc pl-5 space-y-4 webFontColor text-base'>
                                <li><b>Attention to Detail: </b>We pride ourselves on ensuring that every detail is managed with care, from timely pickups to smooth coordination between multiple stops.</li>

                                <li><b>Luxury and Comfort: </b>Every group member will experience the same level of luxury and attention that defines <b>Limo Royale</b>. Our vehicles are designed for comfort, with amenities that keep everyone relaxed and entertained throughout the journey.</li>

                                <li><b>Safety and Reliability: </b>With our highly trained chauffeurs and well-maintained fleet, safety is always a priority. We guarantee punctual arrivals and stress-free travel for every event.</li>
                            </ul>
                            <p className='webFontColor text-base mt-5'>For your next group event, trust <b>Limo Royale</b> to provide impeccable service and luxurious transportation. <b>Book our Event and Group Charter Services today</b>, and let us make your journey as memorable as your destination.</p>
                        </div>
                        <div data-aos="fade-up">
                            <ServiceFaq />
                        </div>
                        <div data-aos="fade-up">
                            <CustomerExperiences />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Events
import React from 'react'
import ServiceSidePanel from './components/ServiceSidePanel'
import ServiceFaq from './components/ServiceFaq'
import CustomerExperiences from './components/CustomerExperiences'
import ExecutiveBanner from '../src/assets/services/executive-service.jpg'
import { Helmet } from 'react-helmet'

const ExecutiveCarHire = () => {
  return (
    <div>
        <Helmet>
            <title>Executive Car Hire & Airport Transfer Experts | LimoRoyal</title>
            <meta name="description" content="Professional executive car hire with flexible airport pickup and transfer options—luxury and efficiency combined." />
            <meta name="keywords" content="airport pickup, airport transfer" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="canonical" href="https://limoroyal.com/executive-car-hire" />
        </Helmet>
        <div>
            <div className='relative'>
                <div className='page-bg object-cover absolute h-[450px] lg:h-[550px] inset-0 opacity-50'></div>
                <div className='relative z-10 pt-50 lg:pt-80 pb-30'>
                    <div className='container mx-auto px-2'>
                        <div>
                            <ul className='breadcrumb uppercase webColor text-sm flex'>
                            <li><a href='/'>Home</a></li>
                            <li>Executive Car Hire</li>
                            </ul>
                        </div>
                        <h2 className='text-white text-2xl lg:text-6xl leading-snug my-5 font-medium'>Executive Car Hire</h2>
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
                            <img src={ExecutiveBanner} className='w-full h-full' />
                        </div>
                        <div className='border-b webBorderColor pb-10 mb-10' data-aos="fade-up">
                            <h1 className='text-white text-2xl lg:text-4xl mt-10 mb-5 lg:mb-10'>Executive Car Hire</h1>
                            <p className='webFontColor text-base leading-relaxed'>
                                Our Executive Car Hire service is designed for those who value comfort, style, and professionalism. Whether you’re traveling for business or leisure, our premium fleet offers a wide range of luxurious vehicles that cater to all your transportation needs. We ensure your journey is smooth, punctual, and tailored to your specifications.<br></br><br></br>

                                Each vehicle in our fleet is meticulously maintained and equipped with modern amenities, providing you with a first-class travel experience. Our luxury sedans, SUVs, and more are perfect for corporate events, airport transfers, or a stylish arrival at any occasion.<br></br><br></br>

                                Our experienced chauffeurs are trained to deliver exceptional service. They are not only skilled drivers but also courteous professionals who prioritize your comfort and safety throughout your journey. You can rely on us to provide a seamless, stress-free experience from start to finish.<br></br><br></br>

                                With flexible booking options and a commitment to quality, our Executive Car Hire service is the perfect solution for those who need reliable, luxurious transportation. Whether it’s a day in the city or a cross-country trip, our team is here to ensure that your ride exceeds expectations.
                            </p> 
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

export default ExecutiveCarHire
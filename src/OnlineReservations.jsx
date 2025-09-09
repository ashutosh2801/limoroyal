import React from 'react'
import { Helmet } from 'react-helmet'

const OnlineReservations = () => {
  return (
    <div>
        <Helmet>
            <title>Online Reservations | Airport Limo Service Booking | LimoRoyal</title>
            <meta name="description" content="Book your airport transfer or limo service online—easy reservations for limo to the airport or airport chauffeur service." />
            <meta name="keywords" content="limo to the airport, airport limo service" />
            <link rel="canonical" href="https://limoroyal.com/online-reservations" />
        </Helmet>
        <div className='relative'>
            <div className='page-bg object-cover absolute h-[450px] lg:h-[550px] inset-0 opacity-50'></div>
            <div className='relative z-10 pt-50 lg:pt-80 pb-30'>
                <div className='container mx-auto px-2'>
                    <div>
                        <ul className='breadcrumb uppercase webColor text-sm flex'>
                        <li><a href='/'>Home</a></li>
                        <li>Book Now</li>
                        </ul>
                    </div>
                    <h2 className='text-white text-2xl lg:text-6xl leading-snug my-5 font-medium'>Book Now</h2>
                </div>
            </div>
        </div>
        <div>
            <div className='container mx-auto px-2'>
                <div className='pt-20 lg:pt-0 pb-10 mt-10' data-aos="fade-up">
                    <iframe src="https://book.mylimobiz.com/v4/limoroyaleca" className='w-full h-280'></iframe>
                    <a href="" data-ores-widget="website" data-ores-alias="limoroyaleca">Online Reservations</a>
                    <script type="text/javascript" src="https://book.mylimobiz.com/v4/widgets/widget-loader.js"></script>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnlineReservations
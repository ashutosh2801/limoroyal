import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { PlayIcon } from '@heroicons/react/24/solid'
import Slider from './components/Slider'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import cat1 from '../src/assets/categories/1.png'
import cat2 from '../src/assets/categories/2.png'
import cat3 from '../src/assets/categories/3.png'
import cat4 from '../src/assets/categories/4.png'
import cat5 from '../src/assets/categories/5.png'
import carvideo from '../src/assets/banners/video-1.mp4'
import VideoThumbnail from '../src/assets/banners/banner-video.png' 
import CarBanner from '../src/assets/banners/banner-1.jpg'
import GlobalImg1 from '../src/assets/banners/global-1.jpg'
import GlobalImg2 from '../src/assets/banners/global-2.jpg'
import GlobalImg3 from '../src/assets/banners/global-3.jpg'
import GlobalImg4 from '../src/assets/banners/global-4.jpg'
import Icon1 from '../src/assets/icons/icon-1.png'
import Icon2 from '../src/assets/icons/icon-2.png'
import Icon3 from '../src/assets/icons/icon-3.png'
import Gallery from '../src/components/Gallery'
import Testimonials from './components/Testimonials'
import { Helmet } from "react-helmet";

const Home = () => {

  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)  

  const handlePlay = () => {
    setIsPlaying(true)
    setTimeout(() => {
      videoRef.current.play()
    }, 100)
  }
  
  return (
    <div>
      <Helmet>
        <title>Luxury Limo & Airport Chauffeur Service | LimoRoyal</title>
        <meta name="description" content="Experience premium airport chauffeur service and luxury limo rides. Reliable, elegant, and tailored for your comfort—book now with LimoRoyal." />
        <meta name="keywords" content="airport chauffeur service, airport limo service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://limoroyal.com" />
      </Helmet>

      <Slider />
        <div >
          <div className='container mx-auto px-2'>
            <div className='grid md:grid-cols-2 space-x-4 py-17' data-aos="fade-up">
              <div>
                <h2 className='text-white text-2xl lg:text-4xl mb-5 lg:mb-0 leading-snug font-medium'>Experience True Luxury with Over 20 Years of Global Expertise</h2>
              </div>
              <div>
                <p className='webFontColor text-base leading-relaxed'>At Limo Royale, we go beyond providing simply transportation services. In fact, our goal is to provide a luxurious, memorable, and most satisfactory experience to our clientele. With more than 20 years of experience spanning multiple countries across the globe, we truly understand what clients require. Our expertise in the hotel and hospitality industries adds more depth to our service to clients. Our objective is to provide clients with a royal experience that exceeds expectations in luxury transportation.</p>
                <a href='tel:4167255466' className='webFontColor mt-5 block'>
                  <div className='bg-white rounded-full px-4 lg:px-5 py-4 mr-2 inline-block'><FontAwesomeIcon icon={faHeadset} className="text-red-800 text-3xl" /></div> <span className='webColor'>Call Center:</span> 416-725-5466
                </a>
              </div>
            </div>
            <div>
              <div className="mb-10" data-aos="fade-up">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={40}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                  }}
                >
                  <SwiperSlide>
                    <div className="text-left">
                      <a href='/fleet'><img src={cat1} alt="LUXURY SEDAN" className="w-full h-50 object-contain bg-[#222] rounded-xl" loading='lazy' /></a>
                      <h3 className="text-white text-xl uppercase my-5"><a href=''>LUXURY SEDAN</a></h3>
                      <a href='/online-reservations' className='webColor text-base'>Book Now</a>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="text-left">
                      <a href='/fleet'><img src={cat2} alt="LUXURY SUV" className="w-full h-50 object-contain bg-[#222] rounded-xl" loading='lazy' /></a>
                      <h3 className="text-white text-xl uppercase my-5"><a href=''>LUXURY SUV</a></h3>
                      <a href='/online-reservations' className='webColor text-base'>Book Now</a>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="text-left">
                      <a href='/fleet'><img src={cat3} alt="EXECUTIVE VAN" className="w-full h-50 object-contain bg-[#222] rounded-xl" loading='lazy' /></a>
                      <h3 className="text-white text-xl uppercase my-5"><a href=''>EXECUTIVE VAN</a></h3>
                      <a href='/online-reservations' className='webColor text-base'>Book Now</a>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="text-left">
                      <a href='/fleet'><img src={cat4} alt="STRETCH LIMO" className="w-full h-50 object-contain bg-[#222] rounded-xl" loading='lazy' /></a>
                      <h3 className="text-white text-xl uppercase my-5"><a href=''>STRETCH LIMO</a></h3>
                      <a href='/online-reservations' className='webColor text-base'>Book Now</a>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="text-left">
                      <a href='/fleet'><img src={cat5} alt="LUXURY COACH" className="w-full h-50 object-contain bg-[#222] rounded-xl" loading='lazy' /></a>
                      <h3 className="text-white text-xl uppercase my-5"><a href=''>LUXURY COACH</a></h3>
                      <a href='/online-reservations' className='webColor text-base'>Book Now</a>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='bg-[#0a0a0a] mt-20 py-15'>
            <div className='container mx-auto px-2'>
              <div className='border-b webBorderColor pb-10 mb-13' data-aos="fade-up">
                <small className='text-sm webColor uppercase'>Finest Transport</small>
                <h2 className='text-white text-2xl lg:text-4xl leading-snug my-5'>Our Legacy of Excellence</h2>
                <p className='text-base leading-relaxed webFontColor'>
                  True luxury is not about the outer appearance of the fleet. Instead, it’s about making you feel extra special and comfortable along your journey. Our knowledge in the hospitality industry makes our service all the more special to our clients. We’ve served high-profile clients, including VIPs and business executives, which gives us a unique edge and enables us to provide a royal service all the way.
                </p>
              </div>
              <div data-aos="fade-up">
                <h3 className='text-white text-2xl mb-15'>What Makes Limo Royale Unique?</h3>
                <div className='grid lg:grid-cols-3 lg:space-x-20 space-y-10 lg:space-y-0'>
                  <div>
                    <h4 className='text-white text-xl lg:text-xl mb-5'>A Royal Experience, Every Time</h4>
                    <p className='text-base leading-relaxed webFontColor'>Our service extends beyond merely transporting our clients from one location to another. It is all about making them enjoy the comfort level and luxury of travelling in our fleet. We prioritize privacy and comfort, making you feel special and cared for the moment you step into our vehicle. Clients enjoy being treated like royalty.</p>
                  </div>
                  <div>
                    <h4 className='text-white text-xl lg:text-xl mb-5'>Exclusive Fleet Under Two Years Old</h4>
                    <p className='text-base leading-relaxed webFontColor'>We ensure each one of our vehicles is maintained and up to date with the latest technological advancements in the automotive industry. All our vehicles are under two years old, ensuring our clients experience the best service in a vehicle kept in good condition. You can travel in comfort in a vehicle equipped with the latest technology.</p>
                  </div>
                  <div className='lg:mr-[60px]'>
                    <h4 className='text-white text-xl lg:text-xl mb-5'>Personalized Service</h4>
                    <p className='text-base leading-relaxed webFontColor'>Every small detail matters to us at Limo Royale. We curate personalized itineraries for our clients, ensuring they enjoy their journey to the fullest. The best experience comes with VIP treatment at every stage of the journey. We meticulously plan your journey, prioritizing luxury and comfort every step of the way.</p>
                  </div>
                </div>
              </div>
              <div className='grid md:grid-cols-2 md:space-x-5 space-y-5 lg:space-y-0 mt-10 lg:mt-20'>
                <div className='relative' data-aos="fade-up">
                  {!isPlaying ? (
                    <div  onClick={handlePlay} className="relative cursor-pointer">
                      <img src={VideoThumbnail} className="w-full h-64 md:h-100 lg:h-180 object-cover rounded-md" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className='rounded-full border border-white p-5'><PlayIcon className="w-12 h-12 text-white" /></div>
                      </div>
                    </div>
                  ) : (
                    <video ref={videoRef} src={carvideo} className="w-full h-64 md:h-100 lg:h-180 object-cover rounded-md" controls={isPlaying} />
                  )}
                </div>
                <div data-aos="fade-up">
                  <img src={CarBanner} className="w-full h-64 md:h-100 lg:h-180 object-cover rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='py-10 lg:py-23 pl-8 lg:pl-62 pr-8 lg:pr-0'>
            <div className='flex flex-col lg:flex-row lg:space-x-10 items-center' data-aos="fade-up">
              <div className='w-full lg:w-2/5'>
                <small className='webColor uppercase'>Premium drivers</small>
                <h2 className='text-white text-2xl lg:text-4xl leading-snug my-5 font-medium'>Our Global Experience</h2>
                <p className='text-base leading-relaxed webFontColor'>Limo Royale knows how to best serve its clients with expertise gained over two years in the industry. Experience in the hotel industry has taught us the importance of maintaining client satisfaction throughout. We don’t just meet expectations – we exceed them. We strive to be the best in the industry, providing the highest level of service to the clients, going beyond simply being yet another limo service.</p>
                <a href='/online-reservations' className='inline-block book-now-slide text-sm px-9 py-4 mt-10 uppercase'>Book Now</a>
              </div>
              <div className='w-full lg:w-3/5'>
                  <div className='grid grid-cols-2 space-x-5 mt-10 lg:mt-0'>
                    <div><img src={GlobalImg1} className='w-full h-full' /></div>
                    <div><img src={GlobalImg2} className='w-full h-full' /></div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='relative'>
            <div className='value-bg object-cover absolute inset-0 opacity-50'></div>
            <div className='relative z-10 py-5 lg:py-20'>
              <div className='container mx-auto px-2'>
                <h2 className='text-white text-2xl lg:text-4xl leading-snug my-5 font-medium'>Our Values: <br></br> Luxury, Precision, Royal Treatment</h2>
                <div className='grid lg:grid-cols-3 lg:space-x-5 space-y-5 lg:space-y-0 mt-10'>
                  <div className='backdrop-blur-md bg-[#1b1b1b]/60 p-6' data-aos="fade-up">
                    <h4 className='text-white text-xl lg:text-2xl mb-5'>Luxury Above All</h4>
                    <p className='text-base leading-relaxed webFontColor'>Every detail of our service is crafted with luxury in mind. From the hand-selected fleet to our team of professional chauffeurs, Limo Royale embodies elegance, exclusivity, and refinement.</p>
                  </div>
                  <div className='backdrop-blur-md bg-[#1b1b1b]/60 p-6' data-aos="fade-up">
                    <h4 className='text-white text-xl lg:text-2xl mb-5'>Precision & Punctualit</h4>
                    <p className='text-base leading-relaxed webFontColor'>We understand the value of time. Our commitment to punctuality and professionalism ensures that every journey with Limo Royale is smooth, reliable, and stress-free. Our experienced chauffeurs are trained not only in safe driving but also in delivering the highest level of service.</p>
                  </div>
                  <div className='backdrop-blur-md bg-[#1b1b1b]/60 p-6' data-aos="fade-up">
                    <h4 className='text-white text-xl lg:text-2xl mb-5'>Royal Treatment</h4>
                    <p className='text-base leading-relaxed webFontColor'>At Limo Royale, you are more than a client—you are a guest of honor. We treat every booking as an opportunity to deliver a royal experience, ensuring that our clients feel pampered and valued. Our dedication to customer service goes beyond the standard; it’s about creating an atmosphere of sophistication, comfort, and care.</p>
                  </div>
                </div>
                <div className='relative mt-10'>
                  <a href='/fleet' className='inline-block view-more-btn text-sm px-10 py-5 uppercase'>View More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='bg-[#0a0a0a] py-5'>
            <div className='container mx-auto px-2'>
              <h2 className='text-white text-2xl lg:text-4xl leading-snug my-5 font-medium' data-aos="fade-up">Royale Excellence in Cleanliness and Vehicle Maintenance</h2>
              <p className='text-base leading-relaxed webFontColor' data-aos="fade-up">At <b>Limo Royale</b>, every journey is meticulously planned and executed to perfection. We take pride in ensuring that our fleet not only meets but exceeds the expectations of our discerning clients. That’s why we have a <b>dedicated team of professionals</b> who conduct thorough <b>vehicle cleanliness and quality checks</b> before each pickup. Every vehicle is detailed to immaculate standards, ensuring that your experience with us is luxurious from the moment you step inside. <br></br><br></br>Our commitment to maintaining the <b>highest quality standards</b> means that no detail is overlooked. From spotless interiors to the flawless performance of our vehicles, we guarantee that your ride will be as smooth and elegant as possible.</p>
              <div className='grid md:grid-cols-3 md:space-x-5 space-y-5 lg:space-y-0 my-10'>
                <div className='webBorderColor border rounded-lg p-5' data-aos="fade-up">
                  <img src={Icon1} className='filter brightness-0 invert' />
                  <h5 className='text-white text-xl lg:text-3xl mt-5 font-medium'>Reclining seats</h5>
                </div>
                <div className='webBorderColor border rounded-lg p-5' data-aos="fade-up">
                  <img src={Icon2} className='filter brightness-0 invert' />
                  <h5 className='text-white text-xl lg:text-3xl mt-5 font-medium'>State-of-the-art sound systems</h5>
                </div>
                <div className='webBorderColor border rounded-lg p-5' data-aos="fade-up">
                  <img src={Icon3} className='filter brightness-0 invert' />
                  <h5 className='text-white text-xl lg:text-3xl mt-5 font-medium'>Premium amenities</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='mt-10 pb-10 lg:pb-0'>
            <div className='container mx-auto px-2 text-center'>
              <small className='webColor uppercase'>Our Team</small>
              <h2 className='text-white text-2xl lg:text-4xl leading-snug my-5 font-medium' data-aos="fade-up">Royale Excellence in Cleanliness and Vehicle Maintenance</h2>
              <p className='text-base leading-relaxed webFontColor' data-aos="fade-up">At Limo Royale, we take pride in offering more than just a ride—we provide an exceptional travel experience, guided by our elite team of Royale Chauffeurs. With a minimum of 15-20 years of professional driving experience, each Royale Chauffeur is handpicked to ensure that your journey is both safe and smooth. Our chauffeurs are not only skilled drivers but also masters of service, trained to deliver the royal treatment you deserve.</p>
              <div data-aos="fade-up">
                <h2 className='text-white text-2xl lg:text-3xl leading-snug mt-10 mb-8 font-medium'>Why Choose a Royale Chauffeur?</h2>
                <div className='grid lg:grid-cols-2 lg:space-x-8 space-y-15 text-left'>
                    <div>
                      <h2 className='text-white text-xl lg:text-2xl leading-snug font-medium'>Experience & Expertise</h2>
                      <p className='text-base leading-relaxed webFontColor'>Our chauffeurs have decades of experience navigating both local and international routes, ensuring that every journey is flawless and efficient.</p>
                    </div>
                    <div>
                      <h2 className='text-white text-xl lg:text-2xl leading-snug font-medium'>Safety First</h2>
                      <p className='text-base leading-relaxed webFontColor'>Safety is our top priority. With their extensive experience, our chauffeurs are adept at handling all road conditions, giving you peace of mind throughout your journey.</p>
                    </div>
                    <div>
                      <h2 className='text-white text-xl lg:text-2xl leading-snug font-medium'>Royal Servic</h2>
                      <p className='text-base leading-relaxed webFontColor'>Beyond driving, our chauffeurs excel in delivering a discreet, professional, and courteous service, attending to your needs with precision and care.</p>
                    </div>
                    <div>
                      <h2 className='text-white text-xl lg:text-2xl leading-snug font-medium'>Seamless Journeys</h2>
                      <p className='text-base leading-relaxed webFontColor'>Whether it’s navigating city traffic or ensuring timely arrivals for events, your Royale Chauffeur is committed to making your journey as smooth and stress-free as possible.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Gallery />
        </div>
        <div>
          <div className='container mx-auto px-2'>
            <div className='flex flex-col lg:flex-row lg:space-x-12 space-y-10 lg:space-y-0 items-center py-15'>
              <div className='w-full lg:w-3/5' data-aos="fade-up">
                  <div className='grid grid-cols-2 space-x-5'>
                    <div><img src={GlobalImg3} className='w-full h-full' /></div>
                    <div><img src={GlobalImg4} className='w-full h-full' /></div>
                  </div>
              </div>
              <div className='w-full lg:w-2/5' data-aos="fade-up">
                <small className='webColor uppercase'>Only the best</small>
                <h2 className='text-white text-2xl lg:text-4xl leading-snug my-3 font-medium'>Why We Stand Apart</h2>
                <p className='text-base leading-relaxed webFontColor'>At <b>Limo Royale</b>, we don’t follow trends—we set new standards. Our service is built around one core promise: to give every client a <b>royal experience</b>. Unlike other limo services, we are not focused on being the largest or the most visible—we are focused on being the <b>best</b>. Our goal is to ensure that every time a client steps into one of our vehicles, they experience the ultimate in luxury and comfort. <br></br> <br></br>We believe that the journey should be just as special as the destination. That’s why we go above and beyond to ensure that your time with us reflects the elegance and refinement you deserve. Our <b>20+ years of experience</b> in both the limo service and hotel industry have given us a unique insight into what it means to provide <b>world-class service</b>. We pride ourselves on standing out in an industry where many others fall short.</p>
              </div>
            </div>
            <div className='mb-15' data-aos="fade-up">
              <h2 className='text-white text-2xl lg:text-4xl leading-snug my-3 font-medium'>The Limo Royale Experience</h2>
              <p className='text-base leading-relaxed webFontColor'>With <b>Limo Royale</b>, you’re not just choosing a ride—you’re choosing a premium service that caters to your every need. Whether you require corporate transportation, airport transfers, event charters, or personalized tours, our team is dedicated to providing an experience that is unmatched. From our <b>luxury fleet</b> to our <b>bespoke service</b>, we make it our mission to ensure every client enjoys an unforgettable journey.</p>
            </div>            
          </div>
        </div>
        <div>
          <div className='car-banner h-[300px] md:h-[500px] lg:min-h-[1000px]' data-aos="fade-up"></div>
        </div>
        
        <Testimonials />

        <div>
          <div className='luxury-car-bg py-40'>
            <div className='container mx-auto px-2'>
              <h6 className='text-white text-3xl lg:text-4xl leading-snug my-5 font-medium'>Unmatched Luxury, Always New</h6>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Home
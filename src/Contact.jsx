import { useEffect, useRef, useState } from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { Helmet } from "react-helmet";

const Contact = () => {

    const dateRef = useRef(null);
    const timeRef = useRef(null);
    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];
        if (dateRef.current) {
        dateRef.current.value = today;
        }
    }, []);
    const [pickupTime, setPickupTime] = useState("");

  return (
    <div>
        <Helmet>
            <title>Contact Limo Royale | Book Your Luxury Chauffeur Service Today</title>
            <meta name="description" content="Get in touch with Limo Royale to reserve your premium limo or airport chauffeur service. Experience comfort and elegance with our expert chauffeurs."/>
            <meta name="keywords" content="Book Your Luxury Chauffeur Service Today, Best Airport Limo Service Toronto, Airport Transportation Toronto "/>
            <meta name="robots" content="index, follow"/>
            <link rel="canonical" href="https://limoroyal.com/contact" />
        </Helmet>
        <div>
            <div className='relative'>
                <div className='page-bg object-cover absolute h-[450px] lg:h-[550px] inset-0 opacity-50'></div>
                <div className='relative z-10 pt-50 lg:pt-80 pb-30'>
                    <div className='container mx-auto px-2'>
                        <div>
                            <ul className='breadcrumb uppercase webColor text-sm flex'>
                            <li><a href='/'>Home</a></li>
                            <li>Contact</li>
                            </ul>
                        </div>
                        <h2 className='text-white text-2xl lg:text-6xl leading-snug my-5 font-medium'>Contact</h2>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='container mx-auto px-2'>
                <div className='pt-10 lg:pt-0 pb-10 mt-15' data-aos="fade-up">
                    <small className='text-sm webColor uppercase'>Contact us</small>
                    <h1 className='text-white text-2xl lg:text-4xl leading-snug my-5'>Ride To Destinations With <br></br> Maximum Comfort</h1>
                </div>
            </div>
        </div>
        <div>
            <div className='container mx-auto px-2'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-15'>
                    <div className='bg-[#0a0a0a] p-5 md:p-5 lg:p-10' data-aos="fade-up">
                        <div className='w-auto inline-block bg-white rounded-full p-5 mb-5'>
                            <PhoneIcon className="w-5 h-5 lg:w-8 lg:h-8 text-black" />
                        </div>
                        <h3 className='text-white text-2xl lg:text-3xl mb-5'>Phone</h3>
                        <a href='tel:4167255466' className='text-base md:text-sm lg:text-base leading-relaxed webFontColor w-full inline-block mb-10'>
                            416-725-LIMO<br></br>
                            (416-725-5466)
                        </a>
                        <a href='tel:4167255466' className='text-base md:text-sm lg:text-base leading-relaxed webFontColor w-full inline-block'>
                            Toll-free:<br></br>
                            1 (888) 870-LIMO (5466)
                        </a>
                    </div>
                    <div className='bg-[#0a0a0a] p-5 md:p-5 lg:p-10' data-aos="fade-up">
                        <div className='w-auto inline-block bg-white rounded-full p-5 mb-5'>
                            <EnvelopeIcon className="w-5 h-5 lg:w-8 lg:h-8 text-black" />
                        </div>
                        <h3 className='text-white text-2xl lg:text-3xl mb-5'>Email</h3>
                        <a href='mailto:book@limo-royale.com;' className='text-base md:text-sm lg:text-base leading-relaxed webFontColor w-full inline-block mb-10'>
                            book@limo-royale.com
                        </a>
                    </div>
                    <div className='bg-[#0a0a0a] p-5 md:p-5 lg:p-10' data-aos="fade-up">
                        <div className='w-auto inline-block bg-white rounded-full p-5 mb-5'>
                            <GlobeAltIcon className="w-5 h-5 lg:w-8 lg:h-8 text-black" />
                        </div>
                        <h3 className='text-white text-2xl lg:text-3xl mb-5'>Web</h3>
                        <a href='https://limo-royale.com/' className='text-base md:text-sm lg:text-base leading-relaxed webFontColor w-full inline-block mb-10'>
                           www.limoroyal.ca
                        </a>
                    </div>
                    {/* <div className='bg-[#0a0a0a] p-5 md:p-5 lg:p-10' data-aos="fade-up">
                        <div className='w-auto inline-block bg-white rounded-full p-5 mb-5'>
                            <MapPinIcon className="w-5 h-5 lg:w-8 lg:h-8 text-black" />
                        </div>
                        <h3 className='text-white text-2xl lg:text-3xl mb-5'>Location</h3>
                        <a href='https://maps.app.goo.gl/oVrvqS7i5hgPHXzM7' target='_blank' className='text-base md:text-sm lg:text-base leading-relaxed webFontColor w-full inline-block mb-10'>
                            1 Dundas Street West, Eaton Centre, Suite 2500, Toronto, ON M5G 1Z3
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
        {/* <div>
            <div className='container mx-auto px-2' data-aos="fade-up">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d369368.7119364437!2d-79.389552!3d43.675353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cad8871b47%3A0x65933b9c7540b48a!2sRegus!5e0!3m2!1sen!2slk!4v1754728658724!5m2!1sen!2slk" loading="lazy" className='w-full h-100 lg:h-120 filter grayscale'></iframe>
            </div>
        </div> */}
        <div>
            <div className='bg-[#0a0a0a] py-15 mt-15' data-aos="fade-up">
                <div className='container mx-auto px-2'>
                    <small className='text-sm webColor uppercase'>Get in touch</small>
                    <h2 className='text-white text-2xl lg:text-4xl leading-snug my-5'>Feel free to talk to us</h2>
                    <form className='space-y-5'>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                            <div>
                                <label className='text-base webFontColor'>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="bg-black w-full p-4 mt-3 rounded outline-none text-white text-sm md:text-xs lg:text-base"
                                    required
                                />
                            </div>
                            <div>
                                <label className='text-base webFontColor'>Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    className="bg-black w-full p-4 mt-3 rounded outline-none text-white text-sm md:text-xs lg:text-base"
                                    required
                                />
                            </div>
                            <div>
                                <label className='text-base webFontColor'>Phone Number</label>
                                <input
                                    type="text"
                                    name="number"
                                    className="bg-black w-full p-4 mt-3 rounded outline-none text-white text-sm md:text-xs lg:text-base"
                                    required
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div>
                                <label className='text-base webFontColor'>Pickup Date</label>
                                <div onClick={() => dateRef.current.showPicker()}>
                                    <input
                                        type="date"
                                        name="name"
                                        ref={dateRef}
                                        className="bg-black w-full p-4 mt-3 rounded outline-none text-white text-sm md:text-xs lg:text-base"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className='text-base webFontColor'>Pickup Time</label>
                                <div onClick={() => timeRef.current.showPicker()}>
                                    <input
                                        type="time"
                                        ref={timeRef}
                                        value={pickupTime}
                                        onChange={(e) => setPickupTime(e.target.value)}
                                        className="bg-black w-full p-4 mt-3 rounded outline-none text-white text-sm md:text-xs lg:text-base"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div>
                                <label className='text-base webFontColor'>Pickup Location</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="bg-black w-full p-4 mt-3 rounded outline-none text-white text-sm md:text-xs lg:text-base"
                                    required
                                />
                            </div>
                            <div>
                                <label className='text-base webFontColor'>Dropoff Location</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="bg-black w-full p-4 mt-3 rounded outline-none text-white text-sm md:text-xs lg:text-base"
                                    required
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 gap-5'>
                            <div>
                                <label className='text-base webFontColor'>Message</label>
                                <textarea
                                    name="message"
                                    className="bg-black w-full p-4 mt-3 rounded outline-none text-white text-sm md:text-xs lg:text-base"
                                    rows="5"
                                ></textarea>
                            </div>
                        </div>
                        <submit className='inline-block check-map-btn text-sm px-9 py-4 mt-2 uppercase cursor-pointer'>Submit Now</submit>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
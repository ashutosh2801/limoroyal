import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import img1 from '../assets/gallery/1.jpg'
import img2 from '../assets/gallery/2.jpg'
import img3 from '../assets/gallery/3.jpg'
import img4 from '../assets/gallery/4.jpg'
import img5 from '../assets/gallery/5.jpg'
import img6 from '../assets/gallery/6.jpg'

const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const images = [img1, img2, img3, img4, img5, img6]

  return (
    <div className='bg-[#0a0a0a] py-5'>
        <div className='container mx-auto px-2 mt-4'>

            <div data-aos="fade-up">
                <h2 className='text-white text-2xl lg:text-4xl leading-snug my-5 font-medium'>Ride Fast, Ride First-Class</h2>
                <p className='text-base leading-relaxed webFontColor mb-5'>
                    At Limo Royale, we set the standard for luxury travel. Every vehicle in our fleet is brand new and never more than two years old—including models like the BMW XM and BMW M340i. This means you’ll always experience the latest in comfort, technology, and style. From advanced entertainment systems to plush interiors, every detail is designed with your enjoyment in mind. When you choose Limo Royale, you’re not just booking a ride—you’re choosing sophistication, reliability, and a journey that feels first-class from start to finish.
                </p>
            </div>

            {/* Desktop View - Grid */}
            <div className='md:grid grid-cols-3 space-y-5 lg:space-y-0 gap-3'>
                {images.slice(0, 6).map((img, index) => (
                    <div key={index} className='col-span-1' data-aos="fade-up">
                    <img
                        src={img}
                        alt='Travel with BMW XM and BMW M340i'
                        className='w-full h-70 lg:h-90 object-cover cursor-pointer'
                        onClick={() => { setIsOpen(true); setPhotoIndex(index + 1); }}
                    />
                    </div>
                ))}
            </div>

            <div className='relative mt-10 mb-5 text-center' data-aos="fade-up">
                <a href='/online-reservations' className='inline-block view-more-btn text-sm px-10 py-5 uppercase'>book our fleet today</a>
            </div>
        </div>
        {/* Lightbox */}
        <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={photoIndex}
            slides={images.map((src) => ({ src }))}
            on={{ view: ({ index }) => setPhotoIndex(index) }}
        />

    </div>
  )
}

export default Gallery
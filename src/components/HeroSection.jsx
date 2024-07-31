import React from 'react'
import './Page.css';
import AynTech from '..//..//src/assets/Ayntech_Video.mp4';
const HeroSection = () => {
  return (
    <div>
      <section className='container mx-auto navfont mt-10'>
        <div className='text-black text-3xl text-center'>Before Investing Too Much on Digital Marketing, <br /> Ensure You Have the Right Strategy</div>
        <div className='text-black text-center mt-10'>Invest 90 minutes with Ayn Media for just ₹99 to discover an
          unbreakable digital marketing strategy tailored to your business</div>
        <div className='bg-red-500 cursor-pointer flex justify-center items-center w-80 p-7 container mx-auto mt-20'>
          <div className='text-white text-center text-lg '>
            Book Your ₹99 Session Now
          </div>
        </div>

        <div>
          <div className="container mx-auto px-4 py-8">
            <div className="relative w-full aspect-video">
              <iframe
                controls
                className="w-full h-full  rounded-lg shadow-lg"
                src={AynTech}
                alt="Ayntech"
              >
                Your browser does not support the video tag.
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection

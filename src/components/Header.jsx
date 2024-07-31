import React from 'react'
import AynLogo from '../..//src/assets/Ayn_Logo.jpg'
import './Page.css';
const Navabar = () => {
    return (
        <div>
            {/* HEADER  */}
            <section className='bg-white shadow-xl sticky top-0 left-0'>
                <div class="container mx-auto flex flex-wrap items-center justify-between">
                    <div class="flex items-center w-52">
                        <img src={AynLogo} alt="Ayn_Media" />
                    </div>
                    <div class="block lg:hidden">
                        <button class="text-black focus:outline-none">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div class="text-center text-black mx-auto navfont">
                            Unlock Your Business Potential with a Personalized Digital Marketing Strategy
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Navabar

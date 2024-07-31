import React from 'react'
import './Page.css';
const Footer = () => {
    return (
        <div>
            <section className='bg-black'>
                <div className="container mx-auto px-4 navfont ">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <h2 className="text-2xl font-bold">Stay Connected with Us</h2>
                        </div>
                        <div className="text-center md:text-right">
                            <h3 className="text-xl mb-2">Social Media Links:</h3>
                            <ul className="flex flex-col md:flex-row justify-center md:justify-end space-y-2 md:space-y-0 md:space-x-4">
                                <li>
                                    <a href="https://www.facebook.com/AynMediaDigital" className="hover:underline text-white">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/ayn_media_2.0/" className="hover:underline text-white">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/aynmedia/" className="hover:underline text-white">
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <p className='text-white'>© 2024 Ayn Media. All rights reserved.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer

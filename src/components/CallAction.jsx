import React from 'react'
import './Page.css';
const CallAction = () => {
    return (
        <div>
            <section className='container mx-auto navfont text-center mt-20'>
                <div className='text-black text-3xl font-bold'>Call to Action:</div>
                <div className='text-black mt-5'>Ready to Transform Your Digital Marketing?</div>
                <div className='mt-10'>
                    <div className='text-black text-3xl font-bold'>Call Action Button:</div>
                    <div className='mt-10'>
                        <div className='bg-red-500 cursor-pointer flex justify-center items-center w-80 p-7 container mx-auto'>
                            <div className='text-white text-center text-lg '>
                                Book Your ₹99 Session Now
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='text-black text-3xl font-bold'>Contact Information:</div>
                    <div className='space-y-3 mt-3'>
                        <li className="text-black">Phone: +91 89259 22232</li>
                        <li className="text-black">Email: info@ayntech.in</li>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CallAction

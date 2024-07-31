import React from 'react'
import './Page.css';
const AboutUS = () => {
    return (
        <div>
            <section className='navfont container mx-auto mt-10 text-center'>
                <div className='text-black text-3xl font-bold'>About the Session:</div>
                <div className='text-black text-md font-bold mt-5'>Why This 90-Minute Session is Crucial for Your Business</div>
                <div>
                    <div className="mt-5 ">
                        <div className='space-y-3'>
                            <div className='text-black text-md font-bold'>Identify the Right Strategy: </div>
                            <div className='text-black'>Learn how to pinpoint the most effective digital marketing tactics
                                for your unique business needs.
                            </div>
                        </div>
                        <div className='mt-5 space-y-3'>
                            <div className='text-black text-md font-bold'>Maximize Returns:</div>
                            <div className='text-black'>Understand how to implement a strategy that fits your budget <br />and maximizes returns over the next six months
                            </div>
                        </div>
                        <div className='mt-5 space-y-3'>
                            <div className='text-black text-md font-bold'>Expert Guidance: </div>
                            <div className='text-black'>Receive personalized advice from Ayn Media’s award-winning digital marketing experts.
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUS

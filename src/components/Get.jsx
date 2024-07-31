import React from 'react'
import './Page.css';
const Get = () => {
    return (
        <div>
            <section className='mt-10 text-center'>
                <div className='container mx-auto navfont' >
                    <div className='text-black font-bold text-3xl'>What You'll Get: </div>
                    <ul className="mt-5 space-y-3">
                        <div className='text-black font-bold'>In-Depth Business Analysis</div>
                        <li className='text-black'>Review your current digital marketing efforts.</li>
                        <li className='text-black'>Identify strengths, weaknesses, opportunities, and threats.</li>
                    </ul>
                    <ul className="mt-5 space-y-3">
                        <div className='text-black font-bold'>Custom Strategy Development</div>
                        <li className='text-black'>Tailored recommendations for digital marketing channels (SEO, PPC, social media, etc.).</li>
                        <li className='text-black'>Budget-friendly plan designed to maximize your ROI.</li>
                    </ul>
                    <ul className="mt-5 space-y-3">
                        <div className='text-black font-bold'>Implementation Roadmap</div>
                        <ul>
                            <li className='text-black'>Step-by-step guidance on how to execute the strategy.</li>
                            <li className='text-black'>Key performance indicators (KPIs) to measure success</li>
                        </ul>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Get

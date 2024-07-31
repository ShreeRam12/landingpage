import React, { useState } from 'react';
import './Page.css';
const FAQ = () => {
    const [open, setOpen] = useState(null);

    const toggle = (id) => {
        setOpen(open === id ? null : id);
    };

    return (
        <div>
            <section>
                <div className="container mx-auto px-4 py-8 navfont mt-10">
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <div className="max-w-2xl mx-auto">
                        <div>
                            <div className="mb-4">
                                <button
                                    onClick={() => toggle(1)}
                                    className="w-full text-left px-4 py-2 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring"
                                >
                                    Q: Is the session really only ₹99?
                                </button>
                                {open === 1 && (
                                    <div className="px-4 py-2">
                                        <p>A: Yes, the 90-minute consultation is just ₹99 with no additional obligation.</p>
                                    </div>
                                )}
                            </div>
                            <div className="mb-4">
                                <button
                                    onClick={() => toggle(2)}
                                    className="w-full text-left px-4 py-2 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring"
                                >
                                    Q: Who will I be meeting with?
                                </button>
                                {open === 2 && (
                                    <div className="px-4 py-2">
                                        <p>A: You will meet with one of our experienced digital marketing consultants.</p>
                                    </div>
                                )}
                            </div>
                            <div className="mb-4">
                                <button
                                    onClick={() => toggle(3)}
                                    className="w-full text-left px-4 py-2 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring"
                                >
                                    Q: What do I need to prepare for the session?
                                </button>
                                {open === 3 && (
                                    <div className="px-4 py-2">
                                        <p>A: Just bring information about your current digital marketing efforts and business goals.</p>
                                    </div>
                                )}
                            </div>
                            <div className="mb-4">
                                <button
                                    onClick={() => toggle(4)}
                                    className="w-full text-left px-4 py-2 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring"
                                >
                                    Q: Who will benefit from this session?
                                </button>
                                {open === 4 && (
                                    <div className="px-4 py-2">
                                        <p>A: Business owners, marketing managers, and entrepreneurs looking to optimize their digital marketing strategy and maximize their ROI.</p>
                                    </div>
                                )}
                            </div>
                            <div className="mb-4">
                                <button
                                    onClick={() => toggle(5)}
                                    className="w-full text-left px-4 py-2 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring"
                                >
                                    Q: Why should I attend this session?
                                </button>
                                {open === 5 && (
                                    <div className="px-4 py-2">
                                        <p>A: This session offers a cost-effective way to gain expert insights and a tailored strategy that can save you time and money in the long run, ensuring your digital marketing efforts are efficient and effective.</p>
                                    </div>
                                )}
                            </div>
                            <div className="mb-4">
                                <button
                                    onClick={() => toggle(6)}
                                    className="w-full text-left px-4 py-2 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring"
                                >
                                    Q: What if I need further assistance after the session?
                                </button>
                                {open === 6 && (
                                    <div className="px-4 py-2">
                                        <p>A: Ayn Media offers comprehensive digital marketing services and can work with you to implement the strategy discussed during the session.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;

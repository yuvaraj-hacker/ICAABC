import React from 'react';

const ContactSection = () => {
    return (
        <section className="bg-gray-100" id="contact">
            <div className="pb-14 px-6 md:px-6 mx-auto max-w-[80rem]">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="md:text-3xl text-xl font-bold text-green-700 mb-4">Contact</h2>
                    <div className="border-t-2 border-[#528F62] w-16 mx-auto mb-8"></div>
                </div>
                <div className="grid md:grid-cols-1 gap-8 mt-8">
                    <div className="relative border-t-4 border-b-4 border-[#528F62] p-6 shadow-md rounded-md bg-[url('/images/home/ai.jpg')] bg-center bg-cover">
                        <div className="absolute inset-0 bg-black/75"></div>
                        <div className="relative">
                            <h3 className="text-xl font-semibold text-white flex items-center mb-3">
                                <GlobeIcon className="mr-2 text-white" />
                                About International Forum
                            </h3>
                            <p className="text-white text-base lg:text-[19px] text-justify">
                                The Seoul International Forum is a modern event venue in Seoul, South Korea, known for its sleek design and advanced facilities. It hosts conferences, exhibitions, and business events in a central, accessible location.
                            </p>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-3 gap-5'>
                        <div className="border-t-4 border-b-4 border-[#528F62] p-6 shadow-md rounded-md bg-white">
                            <div className=" ">
                                <h3 className="text-lg font-semibold text-[#528F62] flex items-center mb-3">
                                    <GlobeIcon className="mr-2 text-[#528F62]" />
                                    Location
                                </h3>
                                <p className="text-gray-700 text-base lg:text-[19px]">Seoul, South Korea</p>
                            </div>
                        </div>
                        <div className="border-t-4 border-b-4 border-[#528F62] p-6 shadow-md rounded-md bg-white">
                            <div className=" ">
                                <h3 className="text-lg font-semibold text-[#528F62] flex items-center mb-3">
                                    <MapPinIcon className="mr-2 text-[#528F62]" />   When
                                </h3>
                                <p className="text-gray-700 text-base lg:text-[19px]">
                                    February 16, 2026 <br />
                                    9:00 AM - 5:00 PM
                                </p>
                            </div>
                        </div>
                        <div className="border-t-4 border-b-4 border-[#528F62] p-6 shadow-md rounded-md bg-white">
                            <div className=" ">
                                <h3 className="text-lg font-semibold text-[#528F62] flex items-center mb-3">
                                    <MailIcon className="mr-2 text-[#528F62]" />
                                    Email
                                </h3>
                                <p className="text-gray-700 text-base lg:text-[19px]">submit.icaabc@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const GlobeIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
    </svg>
);

const MapPinIcon = (props) => (
    <svg   {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

const MailIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);



export default ContactSection;

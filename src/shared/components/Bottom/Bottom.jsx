import React from 'react';

const ContactSection = () => {
    return (
        <section className="bg-gray-100" id="contact">
            <div className="pb-14 px-6 md:px-6 mx-auto max-w-[80rem]">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="md:text-3xl text-xl font-bold   text-green-700 mb-4">Contact</h2>
                    <div className="border-t-2 border-[#528F62] w-16 mx-auto mb-8"></div>
                </div>
                <div className="grid md:grid-cols-1 gap-8 mt-8">
                    <div className="border-t-4 border-b-4 border-[#528F62] p-6 shadow-md rounded-md bg-white">
                        <div className=" ">
                            <h3 className="text-xl font-semibold text-[#528F62] flex items-center mb-3">
                                <GlobeIcon className="mr-2 text-[#528F62]" />
                                About International Forum
                            </h3>
                            <p className="text-gray-700 text-base lg:text-[19px] text-justify">
                                The Seoul International Forum is a modern event venue in Seoul, South Korea, known for its sleek design and advanced facilities. It hosts conferences, exhibitions, and business events in a central, accessible location.
                            </p>
                        </div>
                        {/* <div className="mb-6">
                            <h3 className="text-xl font-semibold text-[#528F62] flex items-center mb-3">
                                <MapPinIcon className="mr-2 text-[#528F62]" />
                                Location
                            </h3>
                            <p className="text-gray-700 text-base lg:text-[18px]">Seoul, South Korea</p>
                        </div> */}
                    </div>
                    <div className='grid md:grid-cols-3 gap-5'>

                        <div className="border-t-4 border-b-4 border-[#528F62] p-6 shadow-md rounded-md bg-white">
                            <div className=" ">
                                <h3 className="text-lg font-semibold text-[#528F62] flex items-center mb-3">
                                    <MailIcon className="mr-2 text-[#528F62]" />
                                    Location
                                </h3>
                                <p className="text-gray-700 text-base lg:text-[19px]">Seoul, South Korea</p>
                            </div>
                        </div>
                        <div className="border-t-4 border-b-4 border-[#528F62] p-6 shadow-md rounded-md bg-white">
                            <div className=" ">
                                <h3 className="text-lg font-semibold text-[#528F62] flex items-center mb-3">
                                    <GlobeIcon className="mr-2 text-[#528F62]" />   When
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
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const MailIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);



export default ContactSection;

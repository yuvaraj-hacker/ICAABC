import React from 'react'
import Bottom from '../Bottom/Bottom'

function About() {
    return (
        <>
            <section className='bg-[#F3F4F6]'>
                <section className=' '>
                    <section>
                        <div className="md:py-10  pt-10 md:pt-10">
                            <div className="text-center">
                                <h1 className="md:text-3xl text-xl font-semibold text-green-700 mb-4">
                                    About the Conference
                                </h1>
                            </div>
                            <div className='md:px-5 px-3'>
                                <div className="max-w-[77rem] mx-auto flex flex-col md:flex-row 2xl:items-center gap-5 lg:gap-15   ">
                                    <div className="w-full">
                                        <div className='grid grid-cols-3 gap-4 items-center mb-3'>
                                            <div className='col-span-1'>
                                                <img src="/images/home/aboutimage.webp" className='rounded-md' alt="" />
                                            </div>
                                            <div className='col-span-2'>
                                                <p className="pb-3 md:pb-6 text-justify md:text-[18px] leading-relaxed ">
                                                    The International Conference on Advances in AI, Business Analytics, and Cloud Systems 2025 is a globally recognized platform that brings together leading researchers, industry professionals, and academic scholars to explore the rapid developments in artificial intelligence, data analytics, and cloud technologies. With the digital landscape evolving faster than ever, this conference aims to bridge the gap between theoretical research and real-world implementation.
                                                </p>
                                                <div className="bg-white p-4  rounded-md text-center border-y-4 border-[#528F62] w-fit">
                                                    <div className="text-[#528F62] font-medium text-[clamp(1rem,2vw,1.25rem)] underline underline-offset-2  leading-relaxed flex md:flex-row justify-center flex-col">
                                                        <div>
                                                            Date:  February 16, 2026
                                                        </div> <span className=" px-4 md:block hidden">|</span>
                                                        <div>
                                                            Venue: Seoul, South Korea
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="pb-3 md:pb-6 text-justify md:text-[18px] leading-relaxed">
                                            At the heart of ICAABC 2025 lies a focus on innovation and collaboration. The event will feature keynote speeches from renowned experts, technical paper presentations, panel discussions, and workshops covering key topics such as machine learning, generative AI, predictive analytics, cloud-native infrastructure, and intelligent business solutions. It provides a unique space for thought leaders to share breakthroughs and best practices across diverse sectors.
                                        </p>
                                        <p className="  text-justify md:text-[18px] leading-relaxed">
                                            ICAABC 2025 is more than just a conference — it's a hub for forward-thinking dialogue, knowledge exchange, and strategic networking. Whether you're a researcher, data scientist, cloud architect, entrepreneur, or policy-maker, this event offers the opportunity to engage with the global tech community and contribute to shaping the future of intelligent, data-driven systems.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className=''>
                    <section>
                        <div className="md:py-14 py-14 pt-14 md:pt-0">
                            <div className="text-center">
                                <h1 className="md:text-3xl text-xl font-semibold text-green-700 mb-4">
                                    Vision of the Conference
                                </h1>
                            </div>
                            <div className='md:px-5 px-3'>
                                <div className="max-w-[77rem] mx-auto flex flex-col md:flex-row 2xl:items-center gap-5 lg:gap-15 ">
                                    <div className="w-full">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mb-8 text-gray-800">
                                            <div className="bg-white shadow-md rounded-md p-6 border-y-4 border-[#528F62]  transition duration-300">
                                                <h3 className="text-xl font-bold text-[#528F62] mb-2">AI for Societal Progress</h3>
                                                <p className=" ">
                                                    Encourage ethical and inclusive AI development to solve societal problems such as healthcare, education, and sustainability.
                                                </p>
                                            </div>
                                            <div className="bg-white shadow-md rounded-md p-6 border-y-4 border-[#528F62]  transition duration-300">
                                                <h3 className="text-xl font-bold text-[#528F62] mb-2">Data-Driven Business Intelligence</h3>
                                                <p className=" ">
                                                    Promote innovation in business analytics for better decision-making, forecasting, and competitive advantage across industries.
                                                </p>
                                            </div>
                                            <div className="bg-white shadow-md rounded-md p-6 border-y-4 border-[#528F62]  transition duration-300">
                                                <h3 className="text-xl font-bold text-[#528F62] mb-2">Scalable Cloud Solutions</h3>
                                                <p className=" ">
                                                    Support research on scalable, secure, and intelligent cloud infrastructures that drive digital transformation globally.
                                                </p>
                                            </div>
                                        </div>
                                        <p className="pb-3 md:pb-6 text-justify md:text-[18px] leading-relaxed">
                                            The vision of the International Conference on Advances in AI, Business Analytics, and Cloud Systems (ICAABC 2025) is to foster a transformative ecosystem that empowers innovation, interdisciplinary research, and practical solutions in the era of intelligent technologies. Our aim is to become a leading global platform where academia, industry, and policy converge to address real-world challenges through the seamless integration of Artificial Intelligence, data-driven analytics, and scalable cloud infrastructure.
                                        </p>

                                        <p className="  text-justify md:text-[18px] leading-relaxed">
                                            By providing a dynamic environment for researchers, practitioners, and change-makers, ICAABC 2025 aims to spark meaningful conversations and cultivate partnerships that contribute to building resilient, intelligent, and future-ready systems for tomorrow’s world.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
            <Bottom />
        </>
    )
}

export default About

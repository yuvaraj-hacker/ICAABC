import { useRef } from "react";
import Bottom from "../Bottom/Bottom";
import { Link } from "react-router-dom";
import ContactSection from "../Bottom/Bottom";

export default function HeroSection({ data }) {
  const deadlines = [
    {
      title: 'Full Paper Submission Deadline',
      date: '2026-January-01',
    },

    {
      title: 'Notification of Decision',
      date: '2026-January-10',
    },
    {
      title: 'Deadline for Submitting Revised Full Paper',
      date: '2026-January-16',
    },

    {
      title: 'Notification of Acceptance',
      date: '2026-January-23',
    },

    {
      title: 'Camera-Ready Submission',
      date: '2026-February-05',
    },
    {
      title: 'Last Date for Registration',
      date: '2026-February-13',
    },

  ];

  return (
    <>
      <section className="bg-[#F3F4F6]">
        <section className="bg-[#528F62]  md:pt-10 h-full">
          <div className="w-full  max-w-[110rem] ml-auto flex flex-col items-center md:pt-10 pt-18  md:h-auto  ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="text-center lg:text-left  md:pl-10 2xl:pb-20">
                <h1 className="text-white font-bold md:py-0 mb-5  2xl:text-5xl md:px-0 px-3  lg:text-4xl md:text-3xl text-xl leading-tight">
                  International Conference on Advances in AI, Business Analytics, and Cloud Systems 2025
                </h1>
                <Link to='/paper-submission'>
                  <button className="border border-white md:px-5 px-4 md:py-2 py-2 rounded-full text-[#528F62] hover:scale-95 duration-300 bg-white transition text-lg md:text-lg cursor-pointer">
                    Register Now
                  </button>
                </Link>
              </div>
              <div className="flex justify-center flex-col w-fit">
                <div className="bg-[url('/images/home/react.png')] bg-cover bg-center w-full pl-1 pt-1">
                  <div className="relative">
                    <img alt="Venue" src="/images/home/final-sec.png" className=" w-full  " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 flex flex-col gap-10">
          <section className="">
            <div className="container w-full xl:w-[90%] 2xl:w-[65%] mx-auto px-4 sm:px-6 lg:px-6">
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="md:text-3xl text-xl font-semibold text-green-700 mb-4">About Us</h2>
                {/* <div className="border-t-2 border-green-700 w-16 mx-auto mb-8"></div> */}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4 items-center">
                <div>
                  <p className="text-base lg:text-lg mb-4 text-justify">The International Conference on Advances in AI, Business Analytics, and Cloud Systems (ICAABC) brings together researchers, industry experts, and academics to explore innovations in AI, analytics, and cloud technologies. Through keynotes, technical sessions, and workshops, it covers topics like machine learning, cloud security, and AI ethics, fostering collaboration, knowledge sharing, and real-world solutions. ICAABC is a platform to network, learn, and shape the future of technology and business.</p>
                </div>
                <div className="flex justify-center items-center">
                  <img alt="About Image" className="  w-full h-full" src="/images/home/about.png" />
                </div>
              </div>
            </div>
          </section>
          <section className="">
            <div className="container w-full xl:w-[90%] 2xl:w-[65%] mx-auto px-4 sm:px-6 lg:px-6">
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="md:text-3xl  text-xl font-semibold text-green-700 mb-4">Scope of the Conference</h2>
                {/* <div className="border-t-2 border-green-700 w-16 mx-auto mb-8"></div> */}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <div>
                  <p className="text-base lg:text-lg mb-4 text-justify">
                    The International Conference on Advances in AI, Business Analytics, and Cloud Systems aims to bring together researchers, industry professionals, academicians, and students to exchange ideas, innovations, and best practices across the interdisciplinary domains of Artificial Intelligence, Business Analytics, and Cloud Computing. The conference provides a vibrant platform for sharing cutting-edge research, technological advancements, and emerging trends that shape the future of intelligent systems and data-driven enterprises.              </p>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                    <div className="text-lg lg:text-[19px] mb-4 text-justify">
                      <h1 className="md:text-2xl mb-2 text-[#528F62] font-semibold">Artificial Intelligence</h1>
                      <div className="2xl:text-lg text-base">
                        <ul className="list-disc list-inside flex flex-col gap-2">
                          <li>Machine Learning & Deep Learning</li>
                          <li>Natural Language Processing (NLP)</li>
                          <li>Computer Vision & Pattern Recognition</li>
                          <li>AI for Edge Devices and IoT</li>
                          <li>AI Ethics and Responsible AI</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-lg lg:text-[19px] mb-4 text-justify">
                      <h1 className="md:text-2xl mb-2 text-[#528F62] font-semibold">Business Analytics</h1>
                      <div className="2xl:text-lg text-base">
                        <ul className="list-disc list-inside flex flex-col gap-2">
                          <li>Predictive & Prescriptive Analytics</li>
                          <li>Data Mining & Decision Support Systems</li>
                          <li>Big Data Analytics & Visualization</li>
                          <li>Business Intelligence Systems</li>
                          <li>Real-Time Analytics for Smart Business</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-lg lg:text-[19px] mb-4 text-justify">
                      <h1 className="md:text-2xl mb-2 text-[#528F62] font-semibold"> Cloud Systems</h1>
                      <div className="2xl:text-lg text-base">
                        <ul className="list-disc list-inside flex flex-col gap-2">
                          <li>Cloud Infrastructure & Virtualization</li>
                          <li>Cloud Security & Privacy</li>
                          <li>Edge and Fog Computing</li>
                          <li>Serverless Architecture & Microservices</li>
                          <li>Scalable Cloud Applications</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="text-center mb-3">
            <div className="mx-auto text-center">
              <h2 className="md:text-3xl text-xl font-semibold text-green-700 mb-4">Key Dates</h2>
            </div>
            <div className="flex justify-center">
              <div className="max-w-[80rem] mx-auto md:px-5 px-3">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-center gap-5 md:gap-5">
                  {deadlines.map((item, index) => (
                    <div key={index} className="h-auto gap-2 flex flex-col justify-between items-center rounded-md shadow-lg border-y-4 border-[#528F62] hover:shadow-2xl transition-all duration-300 bg-white p-4"   >
                      <p className="md:text-[20px] mt-2 text-[#528F62] font-semibold text-center w-full transform transition-transform duration-500 hover:scale-110  ">
                        {item.date}
                      </p>
                      <h2 className="text-lg text-black text-center">
                        {item.title}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
      <ContactSection />
    </>
  );
}
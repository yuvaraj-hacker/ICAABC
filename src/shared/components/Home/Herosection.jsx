import { useRef } from "react";
import Bottom from "../Bottom/Bottom";
import { Link } from "react-router-dom";
import ContactSection from "../Bottom/Bottom";

export default function HeroSection({ data }) {
  const deadlines = [
    {
      title: 'Full Paper Submission Deadline',
      date: '2025-January-01',
    },

    {
      title: 'Notification of Decision',
      date: '2025-January-10',
    },
    {
      title: 'Deadline for Submitting Revised Full Paper',
      date: '2025-January-18',
    },

    {
      title: 'Notification of Acceptance',
      date: '2025-January-25',
    },

    {
      title: 'Camera-Ready Submission',
      date: '2025-February-05',
    },
    {
      title: 'Last Date for Registration',
      date: '2025-February-13',
    },

  ];

  return (
    <>
      <section className="bg-[#528F62] px-5 md:py-10 h-full">
        <div className="w-full xl:w-[85%] 2xl:w-[65%] mx-auto flex flex-col items-center md:py-10 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-white font-bold py-5 md:text-4xl text-xl leading-tight">
                International Conference on Advances in AI, Business Analytics, and Cloud Systems 2025
              </h1>
              <p className="text-white text-[clamp(1rem,2vw,1.25rem)] pb-5 leading-relaxed">
                Date:  October 24, 2025 <br />
                Venue: San Francisco, United States
              </p>
              <Link to='/paper-submission'>
                <button className="border border-white px-6 py-3 rounded-full text-white hover:text-[#528F62] hover:bg-white transition text-lg md:text-xl cursor-pointer">
                  Register Now
                </button>
              </Link>
            </div>
            <div className="flex justify-center">
              <img alt="Venue" src="/images/home/icaabc.webp" className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover xl:max-w-xl 2xl:max-w-2xl" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 flex flex-col gap-10">
        <section className="  ">
          <div className="container w-full xl:w-[90%] 2xl:w-[65%] mx-auto px-4 sm:px-6 lg:px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="md:text-3xl text-xl font-semibold text-green-700 mb-4">About Us</h2>
              <div className="border-t-2 border-green-700 w-16 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-4">
              <div>
                <p className="text-base lg:text-lg mb-4 text-justify"> The International Conference on Advances in AI, Business Analytics, and Cloud Systems is a premier global event uniting researchers, industry experts, and academics to explore innovations in AI, Business Analytics, and Cloud Systems. Featuring keynote speeches, technical sessions, workshops, and industry panels, ICAABC addresses cutting-edge topics like machine learning, data analytics, cloud security, and AI ethics. The conference fosters collaboration, knowledge sharing, and practical solutions to real-world challenges. Whether you're a researcher, practitioner, or student, ICAABC offers a platform to network, learn, and contribute to the future of technology and business. Join us to shape the next wave of innovation!              </p>
              </div>
              <div className="flex justify-center items-center">
                <img alt="About Image" className="rounded-lg shadow-lg w-full h-full max-w-md" src="/images/home/aboutimage.webp" />
              </div>
            </div>
          </div>
        </section>
        <section className="  ">
          <div className="container w-full xl:w-[90%] 2xl:w-[65%] mx-auto px-4 sm:px-6 lg:px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="md:text-3xl  text-xl font-semibold text-green-700 mb-4">Scope of the Conference</h2>
              <div className="border-t-2 border-green-700 w-16 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div>
                <p className="text-base lg:text-lg mb-4 text-justify">
                  The International Conference on Advances in AI, Business Analytics, and Cloud Systems aims to bring together researchers, industry professionals, academicians, and students to exchange ideas, innovations, and best practices across the interdisciplinary domains of Artificial Intelligence, Business Analytics, and Cloud Computing. The conference provides a vibrant platform for sharing cutting-edge research, technological advancements, and emerging trends that shape the future of intelligent systems and data-driven enterprises.              </p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                  <div className="text-lg lg:text-[19px] mb-4 text-justify">
                    <h1 className="md:text-2xl mb-2 text-[#528F62] font-semibold">Artificial Intelligence</h1>
                    <div className="md:text-lg text-base">
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
                    <div className="md:text-lg text-base">
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
                    <div className="md:text-lg text-base">
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
        <section className="text-center">
          <div className="max-w-6xl mx-auto text-center ">
            <h2 className="md:text-3xl text-xl font-semibold text-green-700 mb-4">Key Dates</h2>
            <div className="border-t-2 border-green-700 w-16 mx-auto mb-8"></div>
          </div>
          <div className="flex justify-center  ">
            <div className="max-w-[90%] lg:max-w-[80%] 2xl:max-w-[70%] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-center gap-5 md:gap-10">
                {deadlines.map((item, index) => (
                  <div key={index} className="h-auto gap-2 flex flex-col justify-between items-center rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 bg-white p-6"   >
                    <p className="md:text-[20px] mt-2  text-[#528F62] font-semibold text-center w-full transform transition-transform duration-500 hover:scale-110  ">
                      {item.date}
                    </p>
                    <h2 className="text-lg text-black text-center ">
                      {item.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
      <ContactSection />
    </>
  );
}
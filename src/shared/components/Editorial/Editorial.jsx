
import React from 'react'
import Edit from './Edit';
import Bottom from '../Bottom/Bottom';

function Editorial() {
    const Tech = [
        { name: "Twana A. Hamad", position: "Harran University", location: "Turkey" },
        { name: "Ammar Amjad", position: " National Yang Ming Chiao Tung University", location: "Taiwan" },
        { name: "Qiang Tong", position: "Shenzhen Institute of Information Technology", location: "China" },
        { name: "Abraham Musa Peter ", position: "Federal University Lokoja", location: "Nigeria" },
        { name: 'V. Pravenea', position: ' Dr.N.G.P Institute of Technology', location: ' India' },
        { name: "Waseem", position: "Jiangsu University", location: "China" },
        { name: 'Ankit Sharma', position: ' Nirma University', location: 'India' },
        { name: 'Theresa Omodunbi', position: 'Obafemi Awolowo University', location: 'Nigeria' },
        { name: 'Hua Qu', position: 'Tianjin Medical University', location: 'China' },
        { name: 'Satyabrata Roy', position: 'Manipal University Jaipur', location: 'India' },
        { name: 'Chen Li', position: 'Hangzhou TCM Hospital', location: 'China' },
        { name: 'K. Ramesh', position: ' V.R.S. College of Engineering and Technology', location: ' India' },
        { name: 'Asma Sbeih', position: 'Palestine Ahliya university', location: 'Palestine' },
        { name: 'R. Veerandrakumar', position: ' Panimalar Engineering College', location: 'India' },
        { name: 'Asef Shahriar', position: 'Khulna University of Engineering & Technology', location: 'Bangladesh' },
        { name: 'Zhao Qianyi', position: 'Jinan University', location: 'China' },
        { name: 'Elegbeleye Femi Abiodun', position: 'Walter Sisulu University', location: 'South Africa' },
        { name: 'Masoud Asghari', position: 'University of Maragheh', location: 'Iran' },
        { name: 'Maryam Anwer', position: 'Majma University', location: 'Saudi Arabia' },
        { name: 'G. Vinodhini', position: 'Annamalai University', location: 'India' },
        { name: 'Asghar Ali Shah', position: 'Bahria university', location: 'Pakistan' },
    ];
    return (
        <>
            <section className='bg-[#F3F4F6] pt-10'>
                <section className=' '>
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl font-bold pb-6 text-[#528F62] relative inline-block after:content-[''] after:block after:w-40">
                            Editorial Board
                        </h1>
                    </div>
                    <div className="max-w-[90%] lg:max-w-[80%] 2xl:max-w-[70%] mx-auto flex flex-col md:flex-col 2xl:items-start gap-5 lg:gap-5">
                        <div className="text-justify md:text-[18px] leading-relaxed">
                            The Editorial Board of the International Conference on Advances in AI, Business Analytics, and Cloud Systems plays a crucial role in maintaining the academic integrity and excellence of the event. Our board members guide the peer-review process, ensure the highest standards of ethical publishing, and contribute strategic insights that align with the evolving frontiers of artificial intelligence, business intelligence, and cloud technologies.
                        </div>
                    </div>
                    <div className=' bg-gray-100 md:p-6 p-3 rounded-lg  w-fit   my-10 mx-auto flex flex-col md:flex-col 2xl:items-start gap-5 lg:gap-5'>
                        <div className="grid  bg-white p-3 md:p-6 grid-cols-1 lg:grid-cols-1 md:gap-5 gap-5 mx-auto">
                            {Tech.map((member, index) => (
                                <Edit key={index} position={member.position} name={member.name} location={member.location} />
                            ))}
                        </div>
                    </div>
                </section>
            </section>
            <Bottom />
        </>
    )
}

export default Editorial

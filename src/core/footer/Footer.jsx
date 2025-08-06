import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <section>
      <footer className="bg-[#528F62] text-white py-5 pb-5 flex justify-center">
        <div className="w-4/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
            <div className="text-left flex flex-col gap-4">
              <a className="flex-none text-xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80" href="#" aria-label="Brand">
                <Link to='/'>
                  <img className='lg:w-40 w-40 md:h-18 h-15' src="/images/home/logo-icaabc.webp" alt="LOGO" />
                </Link>
              </a>
              <p className="">The International Conference on Advances in AI, Business Analytics, and Cloud Systems brings together global experts to share innovations in AI, business analytics, and cloud technologies.</p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-3">Conference Information</h3>
              <ul className="space-y-2 md:text-base">
                <li>
                  <a className=" " href="/conference-tracks">Home</a>
                </li>
                <li>
                  <a className=" " href="/conference-tracks">About the Conference</a>
                </li>
                <li>
                  <a className=" " href="/conference-tracks">Conference Tracks</a>
                </li>
                <li>
                  <a className=" " href="/paper-submission" data-discover="true">Paper Submission</a>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-3">Contact</h3>
              <ul className="space-y-2 md:text-base">
                <li>
                  Email: <a href="mailto:support@acsitconference.com" className="">contact.icacsit@gmail.com</a>
                </li>
                <li>
                  Location: Abuja, Nigeria
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white pt-4 md:text-sm text-sm text-center text-white">
            <p>© 2025 ICAABC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  )
}

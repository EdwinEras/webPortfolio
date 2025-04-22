import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-800 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/edwineras-logo.png"
              className="h-10 rounded-full "
              alt="myphoto"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Edwin Eras
            </span>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="/certifications" className="hover:underline me-4 md:me-6">
                Certifications
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:underline me-4 md:me-6">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline me-4 md:me-6">
                Contact
              </a>
            </li>
          </ul>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="https://profile.indeed.com/?hl=en_CA&co=CA&from=gnav-homepage" className="hover:underline me-4 md:me-6">
                Indeed
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/edwineras/ " className="hover:underline me-4 md:me-6">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/EdwinEras" className="hover:underline me-4 md:me-6">
                Github
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()} Edwin Eras. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
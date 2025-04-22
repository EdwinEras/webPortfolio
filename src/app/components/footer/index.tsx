import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-800 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
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
              <Link href="/" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link href="/certifications" className="hover:underline me-4 md:me-6">
                Certifications
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline me-4 md:me-6">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline me-4 md:me-6">
                Contact
              </Link>
            </li>
          </ul>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="https://profile.indeed.com/?hl=en_CA&co=CA&from=gnav-homepage" className="hover:underline me-4 md:me-6">
                Indeed
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/edwineras/ " className="hover:underline me-4 md:me-6">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="https://github.com/EdwinEras" className="hover:underline me-4 md:me-6">
                Github
              </Link>
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
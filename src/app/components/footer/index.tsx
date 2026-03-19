'use client';

import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const footerNav = [
  { name: "Home", href: "/" },
  { name: "Certifications", href: "/certifications" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Indeed", href: "https://profile.indeed.com/?hl=en_CA&co=CA&from=gnav-homepage" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/edwineras/" },
  { name: "Github", href: "https://github.com/EdwinEras" },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
      className="bg-gray-800 rounded-lg shadow m-4"
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              width={50} 
              height={40}
              src="/edwineras-logo.png"
              className="h-15 rounded-full "
              alt="myphoto"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Edwin Eras
            </span>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {footerNav.map((item) => (
              <li key={item.name}>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Link href={item.href} className="hover:underline me-4 md:me-6">
                    {item.name}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {socialLinks.map((item) => (
              <li key={item.name}>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Link href={item.href} className="hover:underline me-4 md:me-6">
                    {item.name}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()} Edwin Eras. All rights reserved.
        </span>
      </div>
    </motion.footer>
  );
};

export default Footer;

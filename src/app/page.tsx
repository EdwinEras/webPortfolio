"use client";

import { motion } from "framer-motion";
import Carousel from "./components/carousel";
import GridTech from "./components/grid-tech";
import PageTransition from "./components/page-transition";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen px-6 sm:px-12 lg:px-24 py-16 space-y-20">

        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="relative text-3xl sm:text-5xl font-bold tracking-tight mb-6
        bg-gradient-to-r from-black via-blue-400 to-blue-600 pb-5
        dark:bg-gradient-to-r dark:from-white dark:via-purple-400 dark:to-purple-600 pb-5
        bg-clip-text text-transparent animate-gradient text-center">
            Edwin Eras
            <br/>Software Engineer
            <span className="absolute inset-0 blur-2xl opacity-30 
          bg-gradient-to-r from-white via-blue-400 to-blue-600 
          dark:bg-gradient-to-r dark:from-white dark:via-purple-400 dark:to-purple-600 
          -z-10 rounded-lg"></span>
          </h1>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Computer Science graduate with postgraduate certifications in Databases 
            and Cybersecurity. Over 5 years of experience as a full-stack and database 
            developer, with a strong passion for problem solving, research, and helping others.
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="space-y-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center">
            Areas of Expertise
          </h2>

          <div className="relative">
            <Carousel />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="space-y-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center">
            Technical Skills
          </h2>

          <GridTech />
        </motion.section>
      </div>
    </PageTransition>
  );
}

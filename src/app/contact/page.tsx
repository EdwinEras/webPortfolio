'use client';
import { motion } from "framer-motion";
import ContactForm from "../components/contact-form";
import ContactIcon from "../components/contact-icon";
import PageTransition from "../components/page-transition";
import content from "../content.json";

export default function Page(){
    return (
    <PageTransition>
      <div className="items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="lg:flex lg:items-center lg:justify-between"
        >
            <div className="min-w-0 flex-1">
                <h2 className="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight">
                    Contact page
                </h2>
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="my-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
            {content.contacts.map((item, index)=>(
                <ContactIcon key={index}
                name={item.name}
                image={item.image}
                color={item.color}
                href={item.href}
            />
            ))}
        </motion.div>
       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="w-full"
        >
          <ContactForm />
        </motion.div>
      </div>
    </PageTransition>
)};

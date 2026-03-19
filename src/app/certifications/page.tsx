'use client';
import { motion } from "framer-motion";
import Card from "../components/card";
import PageTransition from "../components/page-transition";
import content from "../content.json";

export default function Page(){
    const certificates = [...content.certificates]
    certificates.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
                    Certifications page
                </h2>
            </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="size-full my-10"
        >
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
                {certificates.map((item, index) => (
                    <Card key={index}
                        title={item.title}
                        image={item.image}
                    />
                ))}
            </div>
        </motion.div>
      </div>
    </PageTransition>
    );
};
